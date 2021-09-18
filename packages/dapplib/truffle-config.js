require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet raise noble hospital jazz end army gaze'; 
let testAccounts = [
"0x56c66ed1f46699e11520dd326e7f93d927e1c1d3660af642ae7dedd98a7fc4e8",
"0x6482e86e267755ce89a1474ed5a15dbe2bc1a77782bff53cadb9f7335b3a0d37",
"0x384c64f831833fa8f7b2d5bb10f8339e6b2e3037986f7edacb1ad3c4d3e2fa0b",
"0xcb2a33e6681f2280e43c53af55e820331ca765bd28bde657e0a1803d1a8dc0fd",
"0x19079d3921eb2aef8c02a26aecc00cbe3c2f9535dbf5c8665102e05ba9b78285",
"0xe4dd072cd53164a9cc3c09e589d089bf85d0e0b9279709a7fabecef99c3b2a8f",
"0x7b1e83d5fb10cdebe48ee79b0443e319dd5b6e1b2637df1039765ab315ea6d52",
"0xab1811f54e4ea0f1843481893ca9f4016b3995eece31f15b0decec2f5f3427b8",
"0x9da8a86fda3184f67be1d65b0d0a5db17ac8ed506f43edefb40a2c03ee5bb7a1",
"0xe16e678de5faf9ea2ba8ec8e790fef0f77ff81484936cdb2a3bf64200c383478"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

