import  Character from '../class/Character.js'


describe('Класс Character', () => {
  let hero;

  beforeEach(() => {
    hero = new Character('Hero', 'Swordsman');
    hero.attack = 40;
    hero.defence = 10;
  });

  test('метод levelUp увеличивает уровень и stats, восстанавливает здоровье', () => {
    hero.health = 50; // урон
    hero.levelUp();

    expect(hero.level).toBe(2);
    expect(hero.health).toBe(100);
    expect(hero.attack).toBe(Math.round(40 * 1.2)); // 48
    expect(hero.defence).toBe(Math.round(10 * 1.2)); // 12
  });

  test('метод levelUp бросает ошибку, если здоровье равно 0', () => {
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow('Нельзя повысить уровень умершего');
  });

  test('метод damage уменьшает здоровье правильно с учетом defence', () => {
    hero.health = 100;
    hero.damage(50); // урон
    const expectedHealth = 100 - 50 * (1 - hero.defence / 100);
    expect(hero.health).toBeCloseTo(expectedHealth);
  });

  test('здоровье не опускается ниже нуля', () => {
    hero.health = 10;
    hero.damage(100); // очень сильный урон
    expect(hero.health).toBe(0);
  });

  test('при здоровье 0 вызов damage ничего не меняет', () => {
    hero.health = 0;
    hero.damage(50);
    expect(hero.health).toBe(0);
  });
});

  // Тесты на ошибки при неправильных данных
  describe('Ошибки при создании персонажа', () => {
    test('Ошибка при некорректном имени (не строка)', () => {
      expect(() => new Character(123)).toThrow('Имя должно быть строкой');
    });
  
    test('Ошибка при коротком имени', () => {
      expect(() => new Character('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });
  
    test('Ошибка при длинном имени', () => {
      expect(() => new Character('Оченьдлинноеимя')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });
  
    test('Ошибка при неправильном типе', () => {
      expect(() => new Character('Bob', 'InvalidType')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
  });












