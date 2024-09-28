/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman([])).toBe(false)
  expect(convertBytesToHuman({})).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB')
});

// другая группа проверок

test('Возвращает корректное округление для больших чисел', () => {
  expect(convertBytesToHuman(1536)).toBe('1.5 KB');
  expect(convertBytesToHuman(4097553)).toBe('3.91 MB');
  expect(convertBytesToHuman(439596569266)).toBe('409.41 GB');
});

test('Возвращает корректное округление до 2 знаков после запятой', () => {
  expect(convertBytesToHuman(1500)).toBe('1.46 KB');
  expect(convertBytesToHuman(23555)).toBe('23 KB');
  expect(convertBytesToHuman(2147483648)).toBe('2 GB');
});

