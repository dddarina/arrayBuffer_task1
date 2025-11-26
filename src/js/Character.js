export class Character {
  constructor() {
    this._attack = 100;
    this._stoned = false;
    this._distance = 1;
  }

  get attack() {
    const distanceMultiplier = Math.max(1 - (this._distance - 1) * 0.1, 0);
    let attackPower = this._attack * distanceMultiplier;

    if (this._stoned) {
      const stonedPenalty = Math.log2(this._distance) * 5;
      attackPower = Math.max(attackPower - stonedPenalty, 0);
    }

    return Math.round(attackPower);
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set distance(value) {
    if (value < 1) value = 1;
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }
}