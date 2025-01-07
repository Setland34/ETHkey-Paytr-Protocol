const { generatePrivateKey, getPublicKey, getAddress } = require('./ethkey');
const { createTransaction, verifyTransaction } = require('./paytr');

function main() {
  // Generate an Ethereum key pair
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  const address = getAddress(publicKey);

  console.log('Generated Ethereum Key Pair:');
  console.log('Private Key:', privateKey);
  console.log('Public Key:', publicKey);
  console.log('Address:', address);

  // Create a Paytr transaction
  const transaction = createTransaction({
    from: address,
    to: '0xRecipientAddress',
    value: 100,
  });

  console.log('Created Paytr Transaction:', transaction);

  // Verify the Paytr transaction
  const isValid = verifyTransaction(transaction);
  console.log('Is the transaction valid?', isValid);
}

main();
