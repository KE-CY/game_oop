import { Equipment } from ".";
/**  武器 type 0 = 劍; 1 = 斧頭 */
export class Weapon extends Equipment {
    constructor(attack: number, defense: number, lvlUpAttack: number, lvlUpDefense: number, type: number) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}
/** 普通劍 */
export class Sword extends Weapon {
    constructor(attack: number = 4, defense: number = 0, lvlUpAttack: number = 2, lvlUpDefense: number = 0, type: number = 0) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}
/** 鬥士之劍 */
export class GladiatorSword extends Weapon {
    constructor(attack: number = 12, defense: number = 0, lvlUpAttack: number = 4, lvlUpDefense: number = 0, type: number = 0) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}

/** 普通斧頭 */
export class Ax extends Weapon {
    constructor(attack: number = 3, defense: number = 1, lvlUpAttack: number = 1, lvlUpDefense: number = 1, type: number = 1) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}
/** 狂戰之斧 */
export class BerserkerAx extends Weapon {
    constructor(attack: number = 8, defense: number = 8, lvlUpAttack: number = 2, lvlUpDefense: number = 2, type: number = 1) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}