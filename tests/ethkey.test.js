const { generatePrivateKey, getPublicKey, getAddress } = require('../src/ethkey');

test('generatePrivateKey function', () => {
  const privateKey = generatePrivateKey();
  expect(privateKey).toHaveLength(64);
  expect(typeof privateKey).toBe('string');
});

test('getPublicKey function', () => {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  expect(publicKey).toHaveLength(128);
  expect(typeof publicKey).toBe('string');
});

test('getAddress function', () => {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  const address = getAddress(publicKey);
  expect(address).toHaveLength(42);
  expect(address.startsWith('0x')).toBe(true);
});
