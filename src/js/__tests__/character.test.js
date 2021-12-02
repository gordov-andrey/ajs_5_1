import Bowerman from '../Bowerman';

test('Создание персонажа', () => {
  const result = new Bowerman('user', 'Bowerman');
  const must = {
    name: 'user',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(must);
});

test('Ошибка в имени', () => {
  expect(() => new Bowerman('1', 'Bowerman')).toThrowError(new Error('Укажите корректное имя!'));
});

test('Ошибка в типе', () => {
  expect(() => new Bowerman('user', 'QBowerman')).toThrowError(new Error('Укажите корректный тип!'));
});
