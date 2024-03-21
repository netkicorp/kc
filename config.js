import dotenv from 'dotenv';

dotenv.config();

const config = {
    didPrefix: process.env.KC_DID_PREFIX || "did:mdip:test",
    gatekeeperPort: process.env.KC_GATEKEEPER_PORT || 4224,
    gatekeeperURL: process.env.KC_GATEKEEPER_URL || 'http://localhost',
};

export default config;
