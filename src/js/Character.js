/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
  constructor(name, type) {
    this.name = this.nameChecker(name);
    this.type = this.typeChecker(type);
    this.health = 100;
    this.level = 1;
  }

  nameChecker(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Укажите корректное имя!');
    }
    return name;
  }

  typeChecker(type) {
    if (type !== types.find((item) => item === type)) {
      throw new Error('Укажите корректный тип!');
    }
    return type;
  }
}

export default Character;
