import assert from 'node:assert';
import test from 'node:test';
import { generatePrivateKey, getPublicKey, getAddress } from '../src/ethkey';
import { createTransaction, verifyTransaction } from '../src/paytr';

test('generatePrivateKey function', () => {
  const privateKey = generatePrivateKey();
  assert.strictEqual(privateKey.length, 64);
  assert.strictEqual(typeof privateKey, 'string');
});

test('getPublicKey function', () => {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  assert.strictEqual(publicKey.length, 128);
  assert.strictEqual(typeof publicKey, 'string');
});

test('getAddress function', () => {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey);
  const address = getAddress(publicKey);
  assert.strictEqual(address.length, 42);
  assert.strictEqual(address.startsWith('0x'), true);
});

test('createTransaction function', () => {
  const transaction = createTransaction({ from: '0x123', to: '0x456', value: 100 });
  assert.strictEqual(transaction.from, '0x123');
  assert.strictEqual(transaction.to, '0x456');
  assert.strictEqual(transaction.value, 100);
  assert.strictEqual(typeof transaction.timestamp, 'number');
  assert.strictEqual(typeof transaction.hash, 'string');
});

test('verifyTransaction function', () => {
  const transaction = createTransaction({ from: '0x123', to: '0x456', value: 100 });
  const isValid = verifyTransaction(transaction);
  assert.strictEqual(isValid, true);
});
