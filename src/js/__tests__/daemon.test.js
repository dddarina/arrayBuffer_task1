import { Daemon } from "../Daemon";

describe('Daemon', () => {
  test('should create Daemon instance', () => {
    const daemon = new Daemon();
    expect(daemon).toBeInstanceOf(Daemon);
  });

  test('should inherit Character functionality', () => {
    const daemon = new Daemon();
    expect(daemon.calculateAttack(2)).toBe(90);
  });
});