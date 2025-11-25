import { Magician } from "../Magician";

describe('Magician', () => {
  test('should create Magician instance', () => {
    const magician = new Magician();
    expect(magician).toBeInstanceOf(Magician);
  });

  test('should inherit Character functionality', () => {
    const magician = new Magician();
    expect(magician.calculateAttack(2)).toBe(90);
  });
});