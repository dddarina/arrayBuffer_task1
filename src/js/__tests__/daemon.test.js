import { Daemon } from "../Daemon";

describe('Daemon', () => {
  test('should create instance', () => {
    const daemon = new Daemon();
    expect(daemon).toBeInstanceOf(Daemon);
  });

  test('should inherit functionality', () => {
    const daemon = new Daemon();
    daemon.distance = 4;
    expect(daemon.attack).toBe(70);
  });
});