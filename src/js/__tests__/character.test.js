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

  test('should set and get distance', () => {
    const character = new Character();
    character.distance = 3;
    expect(character.distance).toBe(3);
  });

  test('should set distance to 1 when value less than 1', () => {
    const character = new Character();
    character.distance = 0;
    expect(character.distance).toBe(1);
  });

  test('should calculate attack without stoned', () => {
    const character = new Character();
    character.distance = 2;
    expect(character.attack).toBe(90);
  });

  test('should calculate attack with stoned', () => {
    const character = new Character();
    character.distance = 2;
    character.stoned = true;
    expect(character.attack).toBe(85);
  });
});