const crypto = require('crypto');
const secp256k1 = require('secp256k1');
const { keccak256 } = require('js-sha3');

function generatePrivateKey() {
  let privateKey;
  do {
    privateKey = crypto.randomBytes(32);
  } while (!secp256k1.privateKeyVerify(privateKey));
  return privateKey.toString('hex');
}

function getPublicKey(privateKey) {
  const privateKeyBuffer = Buffer.from(privateKey, 'hex');
  const publicKey = secp256k1.publicKeyCreate(privateKeyBuffer, false).slice(1);
  return publicKey.toString('hex');
}

function getAddress(publicKey) {
  const publicKeyBuffer = Buffer.from(publicKey, 'hex');
  const address = keccak256(publicKeyBuffer).slice(-40);
  return `0x${address}`;
}

module.exports = {
  generatePrivateKey,
  getPublicKey,
  getAddress,
};
