export class Character {
    constructor(name, type) {
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (typeof name !== 'string') {
        throw new Error('Имя должно быть строкой');
      }
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
      }
      if (!validTypes.includes(type)) {
        throw new Error(`Тип должен быть одним из: ${validTypes.join(', ')}`);
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  
      // Задаем attack и defence в зависимости от типа
      switch (type) {
        case 'Bowman':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Swordsman':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Magician':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Daemon':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Undead':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Zombie':
          this.attack = 40;
          this.defence = 10;
          break;
      }
    }

    // Метод levelUp
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить уровень умершего');
      }
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    }

    //  Метод damage
    damage(points) {
      if (this.health === 0) {
        return; // если умер, ничего не делаем
      }
      const damagePoints = points * (1 - this.defence / 100);
      this.health -= damagePoints;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  



  