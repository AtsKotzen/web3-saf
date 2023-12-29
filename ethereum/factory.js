import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1fd82C757D2014CEaA2C73776806a0666aB5c141'
);

export default instance;
