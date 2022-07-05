import { Equipment } from ".";
/**  防禦 type  0 = 盾 */
export class Shield extends Equipment {
    constructor(attack: number, defense: number, lvlUpAttack: number, lvlUpDefense: number, type: number) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}
/** 一般盾牌 */
export class GeneralShield extends Shield {
    constructor(attack: number = 0, defense: number = 5, lvlUpAttack: number = 0, lvlUpDefense: number = 1, type: number = 0) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}
/** 騎士之盾 */
export class KnightShield extends Shield {
    constructor(attack: number = 0, defense: number = 16, lvlUpAttack: number = 0, lvlUpDefense: number = 3, type: number = 0) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
}