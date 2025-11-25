export class Character {
  constructor() {
    this._attack = 100;
    this._stoned = false;
  }

  get attack() {
    return this.calculateAttack();
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

  calculateAttack(distance = 1) {
    let attackPower = this._attack;
    
    if (distance > 1) {
      const distancePenalty = (distance - 1) * 10; 
      attackPower = Math.max(this._attack - distancePenalty, 0);
    }

    if (this._stoned) {
      const stonedPenalty = Math.log2(distance) * 5;
      attackPower = Math.max(attackPower - stonedPenalty, 0);
    }

    return Math.round(attackPower);
  }
}


