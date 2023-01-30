export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [
        [1, 'Дублирование персонажа!'],
        [2, 'Некорректоное имя!'],
        [3, 'Такой тип отсутствует!'],
        [4, 'Потеря соединения!'],
      ],
    );
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
