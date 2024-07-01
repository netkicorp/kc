import * as cipher from './cipher-web.js';

const walletName = 'mdip-keymaster';

export function saveWallet(wallet) {
    // TBD validate wallet before saving
    window.localStorage.setItem(walletName, JSON.stringify(wallet));
}

export function loadWallet() {
    const walletJson = window.localStorage.getItem(walletName);

    if (walletJson) {
        return JSON.parse(walletJson);
    }

    return newWallet();
}

export function newWallet(mnemonic, overwrite = false) {
    if (!overwrite && window.localStorage.getItem(walletName)) {
        throw "Wallet already exists";
    }

    try {
        if (!mnemonic) {
            mnemonic = cipher.generateMnemonic();
        }
        const hdkey = cipher.generateHDKey(mnemonic);
        const keypair = cipher.generateJwk(hdkey.privateKey);
        const backup = cipher.encryptMessage(keypair.publicJwk, keypair.privateJwk, mnemonic);

        const wallet = {
            seed: {
                mnemonic: backup,
                hdkey: hdkey.toJSON(),
            },
            counter: 0,
            ids: {},
        }

        saveWallet(wallet);
        return wallet;
    }
    catch (error) {
        throw "Invalid mnemonic";
    }
}
