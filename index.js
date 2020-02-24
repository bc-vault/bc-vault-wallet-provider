'use strict';

const bc = require('bc-vault-js/build/module/index');
const HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js')

class BCProvider extends HookedWalletSubprovider{
    constructor(){
        super({
            getAccounts:bc.web3_GetAccounts,
            signTransaction:bc.web3_signTransaction,
            signPersonalMessage:bc.web3_signPersonalMessage
        });
    }
}
module.exports = BCProvider;