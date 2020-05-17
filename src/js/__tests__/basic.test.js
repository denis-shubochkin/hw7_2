
import Bowerman from '../Bowerman';


test('Bowerman created', () => {
  const pers = new Bowerman('Иван');
  const exp = {
    name: 'Иван',
    level: 1,
    health: 100,
    attack: 25,
    deffense: 25,
  };
  expect(pers).toEqual(exp);
});


test('Bowerman levelUp', () => {
  const pers = new Bowerman('Иван');
  pers.levelUp();
  const exp = {
    name: 'Иван',
    level: 2,
    health: 100,
    attack: 30,
    deffense: 30,
  };
  expect(pers).toEqual(exp);
});

test('Bowerman levelUp unavailable', () => {
  const pers = new Bowerman('Иван');
  pers.health = 0;
  try {
    pers.levelUp();
  } catch (e) {
    expect(pers.levelUp).toThrow();
  }
});
