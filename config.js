import dotenv from 'dotenv';

dotenv.config();

const config = {
    didPrefix: process.env.KC_DID_PREFIX || "did:mdip:test",
    gatekeeperPort: process.env.KC_GATEKEEPER_PORT || 4224,
    gatekeeperURL: process.env.KC_GATEKEEPER_URL || 'http://localhost',
    gatekeeperDb: process.env.KC_GATEKEEPER_DB || 'json',
    nodeName: process.env.KC_NODE_NAME || 'anon',
    nodeID: process.env.KC_NODE_ID,
    mongodbUrl: process.env.KC_MONGODB_URL || 'mongodb://localhost:27017',
    tessHost: process.env.KC_TESS_HOST || 'localhost',
    tessPort: process.env.KC_TESS_PORT || 8333,
    tessUser: process.env.KC_TESS_USER || 'tesseract',
    tessPass: process.env.KC_TESS_PASS || 'tesseract',
    tessID: process.env.KC_TESS_ID || 'tesseract',
    btcHost: process.env.KC_BTC_HOST || 'localhost',
    btcPort: process.env.KC_BTC_PORT || 8332,
    btcWallet: process.env.KC_BTC_WALLET,
    btcUser: process.env.KC_BTC_USER,
    btcPass: process.env.KC_BTC_PASS,
};

export default config;
