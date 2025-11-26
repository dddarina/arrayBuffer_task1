import { Magician } from "../Magician";

describe('Magician', () => {
  test('should create instance', () => {
    const magician = new Magician();
    expect(magician).toBeInstanceOf(Magician);
  });

  test('should inherit functionality', () => {
    const magician = new Magician();
    magician.distance = 3;
    expect(magician.attack).toBe(80);
  });
});