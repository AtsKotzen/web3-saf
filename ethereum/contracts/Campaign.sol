// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.9;

contract CampaignFactory {
    address payable[] public deployedCampaigns;
 
    function createCampaign(uint minimum, string memory name, string memory managerName) public {
        require(minimum > 0, "Minimum contribution must be greater than 0");
        require(bytes(name).length > 0, "Campaign name is required");
        require(bytes(managerName).length > 0, "Manager name is required");
        
        address newCampaign = address(new Campaign(minimum, msg.sender, name, managerName));
        deployedCampaigns.push(payable(newCampaign));
    }
 
    function getDeployedCampaigns() public view returns (address payable[] memory) {
        return deployedCampaigns;
    }
}
 
contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
 
    Request[] public requests;
    address public manager;
    string public managerName;
    uint public minimumContribution;
    string public campaignName;
    mapping(address => bool) public approvers;
    uint public approversCount;
 
    modifier restricted() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }
 
    constructor (uint minimum, address creator, string memory name, string memory managerNameInput) {
        require(minimum > 0, "Minimum contribution must be greater than 0");
        require(bytes(name).length > 0, "Campaign name is required");
        require(bytes(managerNameInput).length > 0, "Manager name is required");
        
        manager = creator;
        minimumContribution = minimum;
        campaignName = name;
        managerName = managerNameInput;
    }
 
    function contribute() public payable {
        require(msg.value > minimumContribution, "Contribution must be greater than the minimum contribution");
 
        approvers[msg.sender] = true;
        approversCount++;
    }
 
    function createRequest(string memory description, uint value, address recipient) public restricted {
        require(bytes(description).length > 0, "Description is required");
        require(value > 0, "Value must be greater than 0");
        require(recipient != address(0), "Recipient is required");
        
        Request storage newRequest = requests.push(); 
        newRequest.description = description;
        newRequest.value= value;
        newRequest.recipient= recipient;
        newRequest.complete= false;
        newRequest.approvalCount= 0;
    }
 
    function approveRequest(uint index) public {
        require(approvers[msg.sender], "Only approvers can approve requests");
        
        Request storage request = requests[index];
        require(!request.approvals[msg.sender], "You have already approved this request");
 
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
 
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
 
        require(request.approvalCount > (approversCount / 2), "This request needs more approvals");
        require(!request.complete, "This request has already been completed");
 
        payable(request.recipient).transfer(request.value);
        request.complete = true;
    }
    
    function getSummary() public view returns (
      uint, uint, uint, uint, address, string memory, string memory
      ) {
        return (
          minimumContribution,
          address(this).balance,
          requests.length,
          approversCount,
          manager,
          campaignName,
          managerName
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
