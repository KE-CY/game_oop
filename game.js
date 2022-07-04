class Person {
    constructor(level = 1) {
        this.level = level;
        calDefaultValue();
        this.weapon = null;
        this.shield = null;
    }
    /** 計算初始數值 */
    calDefaultValue() {
        this.attack = 10;
        this.defense = 10;
        for (let i = 1; i < this.level; i++) {
            this.attack = this.attack + 3;
            this.defense = this.defense + 1;
        }
    }
    /** 裝備武器 */
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    /** 裝備盾牌 */
    setShield(shield) {
        this.shield = shield;
    }

    levelUp() {
        this.level = this.level + 1;
        this.attack = this.attack + 3;
        this.defense = this.defense + 2;
    }

    calValue() {
        let defaultAttack = this.attack;
        let defaultDefense = this.defense;
        if (this.weapon) {
            defaultAttack = defaultAttack + this.weapon.attack;
            defaultDefense = defaultDefense + this.weapon.defense;
            for (let i = 0; i < this.level; i++) {
                defaultAttack = defaultAttack + this.weapon.lvlUpAttack
                defaultDefense = defaultDefense + this.weapon.lvlUpdefense
            }
        }
        if (this.shield) {
            defaultAttack = defaultAttack + this.shield.attack;
            defaultDefense = defaultDefense + this.shield.defense;
            for (let i = 0; i < this.level; i++) {
                defaultAttack = defaultAttack + this.shield.lvlUpAttack
                defaultDefense = defaultDefense + this.shield.lvlUpdefense
            }
        }
        return defaultAttack, defaultDefense;
    }

    /** 查看屬性 */
    viewStatus() {
        let attack, defense = calValue();
        return this.level, attack, defense;
    }
}

class Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpdefense) {
        this.attack = attack;
        this.defense = defense;
        this.lvlUpAttack = lvlUpAttack;
        this.lvlUpdefense = lvlUpdefense;
    }
}
/** 武器 */
class Weapon extends Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpdefense) {
        super(attack, defense, lvlUpAttack, lvlUpdefense);
    }
}

/** 防禦 */
class Shield extends Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpdefense) {
        super(attack, defense, lvlUpAttack, lvlUpdefense);
    }
}