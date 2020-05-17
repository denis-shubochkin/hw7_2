export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.deffense *= 1.2;
    } else {
      throw new Error('Персонаж мертв');
    }
  }
}
