const BCProvider = require('./index.js')
const ProviderEngine = require('web3-provider-engine')
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js')
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
const Web3 = require('web3');//use your own version
var engine = new ProviderEngine()
engine.addProvider(new FilterSubprovider())
engine.addProvider(new BCProvider())
engine.addProvider(new RpcSubprovider({
  rpcUrl: 'https://mainnet.infura.io',
}))

engine.start()