import { expect, test } from '@jest/globals';
import Character from '../class/Character';

test('constructor test', () => {
  const result = new Character('Pete', 'Swordsman');

  expect(result.name).toBe('Pete');
  expect(result.type).toBe('Swordsman');
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

test('fail validation test', () => {
  expect(() => new Character('R', 'Swordsman')).toThrow(new Error('Неверный тип данных или превышение длины имени'));
  expect(() => new Character('Pete', 'Dovakin')).toThrow(new Error('Неверный тип героя'));
});

test('damage func test', () => {
  const result = new Character('Pete', 'Swordsman');

  expect(result.damage(40)).toBe(64);
  result.health = -1;
  expect(() => { result.damage(40); }).toThrow(new Error('Герой умер'));
});

test('levelUp func test', () => {
  const result = new Character('Pete', 'Swordsman');

  expect(result.levelUp()).toEqual([48, 12, 100]);
  result.health = -1;
  expect(() => { result.levelUp(40); }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test.each([
  ['Pete', 'Bowerman'],
  ['Max', 'Swordsman'],
  ['Nick', 'Magician'],
  ['Zero', 'Undead'],
  ['Goldman', 'Zombie'],
  ['Frank', 'Daemon'],
])('test setCharacteristics func with %s name and %s type', (name, heroType) => {
  const result = new Character(name, heroType);

  expect(result.setCharacteristics(heroType)).toEqual([result.attack, result.defence, result.type]);
});
