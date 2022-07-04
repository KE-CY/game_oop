class Person {
    constructor(level = 1) {
        this.level = level;
        this.attack = 10;
        this.defense = 10;
        this.calDefaultValue();
        this.job = 0;
        this.weapon = null;
        this.shield = null;
    }
    /** 計算初始數值 */
    calDefaultValue() {
        this.attack = 10 + (this.level - 1) * 3;
        this.defense = 10 + (this.level - 1) * 2;

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
            defaultAttack += this.weapon.cal(this.level)[0]
            defaultDefense += this.weapon.cal(this.level)[1]
        }
        if (this.shield) {
            defaultAttack += this.shield.cal(this.level)[0]
            defaultDefense += this.shield.cal(this.level)[1]
        }
        return [defaultAttack, defaultDefense];
    }

    /** 查看屬性 */
    viewStatus() {
        let attack = this.calValue()[0];
        let defense = this.calValue()[1];
        return [this.level, attack, defense];
    }
}

class Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpdefense, name) {
        this.attack = attack;
        this.defense = defense;
        this.lvlUpAttack = lvlUpAttack;
        this.lvlUpdefense = lvlUpdefense;
        this.name = name;
    }
    cal(level) {
        return [this.attack + this.lvlUpAttack * (level - 1), this.defense + this.lvlUpdefense * (level - 1)];
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

class Sword extends Weapon {
    constructor(attack, defense, lvlUpAttack, lvlUpdefense) {
        super(attack, defense, lvlUpAttack, lvlUpdefense);
    }

}

let a = new Person(3)
a.setWeapon(new Weapon(3, 1, 1, 1, '斧'))
a.setShield(new Shield(0, 16, 0, 3, '盾'))
console.log(a.viewStatus())
a.setWeapon()
console.log(a.viewStatus())
