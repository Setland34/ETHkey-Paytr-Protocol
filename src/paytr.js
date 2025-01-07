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

module.exports = {
  createTransaction,
  verifyTransaction,
};
