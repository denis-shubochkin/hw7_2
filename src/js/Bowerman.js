import Character from './Character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.deffense = 25;
  }
}
