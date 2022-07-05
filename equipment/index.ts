import { Shield } from "./shield";
import { Weapon } from "./weapon";

/**
 * attack:初始攻擊力
 * defense:初始防禦力
 * lvlUpAttack:升級加攻擊力
 * lvlUpDefense:升級加防禦力
 * type: 裝備種類
 */
export abstract class Equipment {
    attack: number;
    defense: number;
    lvlUpAttack: number;
    lvlUpDefense: number;
    type: number;
    constructor(attack: number, defense: number, lvlUpAttack: number, lvlUpDefense: number, type: number) {
        this.attack = attack;
        this.defense = defense;
        this.lvlUpAttack = lvlUpAttack;
        this.lvlUpDefense = lvlUpDefense;
        this.type = type;
    }
    /** 回傳數值
     * 0:初始攻擊
     * 1:初始防禦
     * 2:等級提升攻擊
     * 3:等級提升防禦
     */
    returnValue(): number[] {
        return [this.attack, this.defense, this.lvlUpAttack, this.lvlUpDefense, this.type];
    }
}
export interface IWeapoEquipment {
    setWeapon(weapon: Weapon): void;
}
export interface IShieldEquipment {
    setShield(shield: Shield): void;
}