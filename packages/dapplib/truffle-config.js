require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift regret soap arrow inflict arena equal gift'; 
let testAccounts = [
"0xdb577df64f927ef10b0f2b0e3662c4f9c5f13bcabe2b02350b6ca1771052b5f5",
"0x142aea32f3037f78d1117e22ff3dcfda277c0fe1ea1177d7e40c0915c211e264",
"0x07daf9a366897ffe61799f29084f56ccbc87624ace400b6e2dba884566a264f8",
"0xccea7edde253214147ffc1dec8169499e1f65e4d520af6ffd6a01f7ec4046002",
"0x982b853fcbd95e59ee8a5dda053974246eba652220c993525a62d29bae0735cc",
"0xd2614b278de5131123dbd7d5133143ee6d057557bd1210a0c1dd67cd21344f2a",
"0x628edd8b5db9bd2757bbf1e6160a2e47f3f603bc45eeee676eb797b0a5258832",
"0xe8c5974b4c7bba82e7ff88a00c25881acb41c1ed393e0b469e47f33bf7fbe607",
"0x7691dcc04576fc5377b95652417b99259276e1cf6fa2a140f0fdfd14a65a1fd1",
"0xe69f4c5e5ff9b4824b2490b3da773d108610e81553a4bfb7cce869697fdc541f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


