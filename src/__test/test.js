import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../index.js'

describe('Character class', () => {
  // Тесты на успешную инициализацию
  test('Создает персонажа типа Bowman с правильными свойствами', () => {
    const character = new Bowerman('Legolas');
    expect(character.name).toBe('Legolas');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('Создает персонажа типа Swordsman с правильными свойствами', () => {
    const character = new Swordsman('Aragorn');
    expect(character.name).toBe('Aragorn');
    expect(character.type).toBe('Swordsman');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('Создает персонажа типа Magician с правильными свойствами', () => {
    const character = new Magician('Gandalf');
    expect(character.name).toBe('Gandalf');
    expect(character.type).toBe('Magician');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('Создает персонажа типа Daemon с правильными свойствами', () => {
    const character = new Daemon('Azazel');
    expect(character.name).toBe('Azazel');
    expect(character.type).toBe('Daemon');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('Создает персонажа типа Undead с правильными свойствами', () => {
    const character = new Undead('Necro');
    expect(character.name).toBe('Necro');
    expect(character.type).toBe('Undead');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('Создает персонажа типа Zombie с правильными свойствами', () => {
    const character = new Zombie('Walker');
    expect(character.name).toBe('Walker');
    expect(character.type).toBe('Zombie');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });
});

  // // Тесты на ошибки при неправильных данных
describe('Ошибки при создании персонажа', () => {
  test('Ошибка при некорректном имени (не строка)', () => {
    expect(() => new Bowerman(123)).toThrow('Имя должно быть строкой');
  });

  test('Ошибка при коротком имени', () => {
    expect(() => new Bowerman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('Ошибка при длинном имени', () => {
    expect(() => new Bowerman('Оченьдлинноеимя')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('Ошибка при неправильном типе', () => {
    expect(() => new Character('Bob', 'InvalidType')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });
});