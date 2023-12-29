const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const mnemonic = 'husband joy wage plug treat pen pitch lend avocado flush reform rival';
const SEPOLIA_INFURA_URL = 'https://sepolia.infura.io/v3/8ee09ed48efc475e8953b95c3feaf1f7'

const provider = new HDWalletProvider(
  mnemonic,
  // remember to change this to your own phrase!
  SEPOLIA_INFURA_URL
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
