/**
 * job 職業 0:無名小卒 1:劍鬥士 2:聖騎士
 * weapon 武器裝備 型態只能 Weapon or null
 * shield 防禦裝備 型態只能 Shield or null
 */
class Person {
    constructor(level = 1, attack = 10, defense = 10, job = 0, weapon = null, shield = null) {
        this.level = level;
        this.attack = attack;
        this.defense = defense;
        this.calDefaultValue();
        this.job = job;
        this.weapon = weapon;
        this.shield = shield;
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
    /** 轉職為劍鬥士 */
    changeGladiator() {
        this.job = 1;
    }
    /** 轉職為聖騎士 */
    changePaladin() {
        this.job = 2;
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
            defaultAttack += this.weapon.cal(this.level, this.job)[0]
            defaultDefense += this.weapon.cal(this.level, this.job)[1]
        }
        if (this.shield) {
            defaultAttack += this.shield.cal(this.level, this.job)[0]
            defaultDefense += this.shield.cal(this.level, this.job)[1]
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
/**
 * attack:初始攻擊力
 * defense:初始防禦力
 * lvlUpAttack:升級加攻擊力
 * lvlUpDefense:升級加防禦力
 * type: 裝備種類
 */
class Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpDefense, type) {
        this.attack = attack;
        this.defense = defense;
        this.lvlUpAttack = lvlUpAttack;
        this.lvlUpDefense = lvlUpDefense;
        this.type = type;
    }
    /** 計算 */
    cal(level, job) { }

}
/** 
 * 武器
 * type 0 = 劍; 1 = 斧頭
 */
class Weapon extends Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpDefense, type) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
    }
    cal(level, job) {
        let attack = 0;
        let defense = this.defense + this.lvlUpDefense * (level - 1);
        if (job == 1 && this.type == 0) {
            attack = this.attack + this.lvlUpAttack * (level - 1) * 2;
        } else {
            attack = this.attack + this.lvlUpAttack * (level - 1);
        }
        return [attack, defense];
    }
}
/** 
 * 防禦
 * type  0 = 盾; 1 = 其他
 */
class Shield extends Equipment {
    constructor(attack, defense, lvlUpAttack, lvlUpDefense, type) {
        super(attack, defense, lvlUpAttack, lvlUpDefense, type);
        // type 0 = 盾; 1 = 其他
    }
    cal(level, job) {
        let attack = this.attack + this.lvlUpAttack * (level - 1);
        let defense = 0;
        if (job == 2 && this.type == 0) {
            defense = this.defense + this.lvlUpDefense * (level - 1) * 3;
        } else {
            defense = this.defense + this.lvlUpDefense * (level - 1);
        }
        return [attack, defense];
    }
}


let a = new Person(3)
a.setWeapon(new Weapon(12, 0, 4, 0, 1))
a.setShield(new Shield(0, 16, 0, 3))
a.changeGladiator();
console.log(a.viewStatus())
