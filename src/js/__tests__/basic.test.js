import ErrorRepository from '../app';

test('test error', () => {
  const error = new ErrorRepository();
  expect(error.translate(1)).toEqual('Дублирование персонажа!');
});

test('test error unknown', () => {
  const error = new ErrorRepository();
  expect(error.translate(123)).toEqual('Unknown error');
});
