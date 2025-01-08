const crypto = require('crypto');

function createTransaction({ from, to, value }) {
  const transaction = {
    from,
    to,
    value,
    timestamp: Date.now(),
  };
  transaction.hash = generateTransactionHash(transaction);
  return transaction;
}

function generateTransactionHash(transaction) {
  const transactionString = JSON.stringify(transaction);
  return crypto.createHash('sha256').update(transactionString).digest('hex');
}

function verifyTransaction(transaction) {
  const { hash, ...transactionData } = transaction;
  const calculatedHash = generateTransactionHash(transactionData);
  return hash === calculatedHash;
}

function signTransaction(transaction, privateKey) {
  const transactionHash = generateTransactionHash(transaction);
  const sign = crypto.createSign('SHA256');
  sign.update(transactionHash);
  sign.end();
  const signature = sign.sign(privateKey, 'hex');
  return signature;
}

function verifyTransactionSignature(transaction, signature, publicKey) {
  const transactionHash = generateTransactionHash(transaction);
  const verify = crypto.createVerify('SHA256');
  verify.update(transactionHash);
  verify.end();
  return verify.verify(publicKey, signature, 'hex');
}

module.exports = {
  createTransaction,
  verifyTransaction,
  signTransaction,
  verifyTransactionSignature,
};
