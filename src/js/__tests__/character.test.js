import { Character } from "../Character";

describe('Character', () => {
  test('should create with default values', () => {
    const character = new Character();
    expect(character.attack).toBe(100);
  });

  test('should set and get attack', () => {
    const character = new Character();
    character.attack = 150;
    expect(character.attack).toBe(150);
  });

  test('should set and get stoned', () => {
    const character = new Character();
    character.stoned = true;
    expect(character.stoned).toBe(true);
  });

  test('should calculate attack without stoned', () => {
    const character = new Character();
    expect(character.calculateAttack(2)).toBe(90);
  });

  test('should calculate attack with stoned', () => {
    const character = new Character();
    character.stoned = true;
    expect(character.calculateAttack(2)).toBe(85);
  });

  test('should not return negative attack', () => {
    const character = new Character();
    character.attack = 1;
    character.stoned = true;
    expect(character.calculateAttack(10)).toBe(0);
  });
});