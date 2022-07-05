
import { Weapon } from "../equipment/weapon";

import { Shield } from "../equipment/shield";
interface ICaleCulateJob {
    calValue(level: number, attack: number, defense: number, weapon: Weapon | null, shield: Shield | null): number[];
}
export abstract class Job implements ICaleCulateJob {
    abstract calValue(level: number, attack: number, defense: number, weapon: Weapon | null, shield: Shield | null): number[];
}
/** 無名小卒 */
export class Nobody extends Job {
    calValue(level: number, attack: number, defense: number, weapon: Weapon | null, shield: Shield | null) {
        let defaultAttack = attack;
        let defaultDefense = defense;
        if (weapon) {
            defaultAttack += weapon.returnValue()[0] + (level - 1) * weapon.returnValue()[2];
            defaultDefense += weapon.returnValue()[1] + (level - 1) * weapon.returnValue()[3];
        }
        if (shield) {
            defaultAttack += shield.returnValue()[0] + (level - 1) * shield.returnValue()[2];
            defaultDefense += shield.returnValue()[1] + (level - 1) * shield.returnValue()[3];
        }
        return [defaultAttack, defaultDefense]
    }
}
/** 劍鬥士 */
export class Gladiator extends Job {
    calValue(level: number, attack: number, defense: number, weapon: Weapon | null, shield: Shield | null) {
        let defaultAttack = attack;
        let defaultDefense = defense;
        if (weapon) {
            if (weapon.type == 0) {
                defaultAttack += weapon.returnValue()[0] + (level - 1) * weapon.returnValue()[2] * 2;
            } else {
                defaultAttack += weapon.returnValue()[0] + (level - 1) * weapon.returnValue()[2];
            }
            defaultDefense += weapon.returnValue()[1] + (level - 1) * weapon.returnValue()[3];
        }
        if (shield) {
            defaultAttack += shield.returnValue()[0] + (level - 1) * shield.returnValue()[2];
            defaultDefense += shield.returnValue()[1] + (level - 1) * shield.returnValue()[3];
        }
        return [defaultAttack, defaultDefense]
    }
}
/** 聖騎士 */
export class Paladin extends Job {
    calValue(level: number, attack: number, defense: number, weapon: Weapon | null, shield: Shield | null) {
        let defaultAttack = attack;
        let defaultDefense = defense;
        if (weapon) {
            defaultAttack += weapon.returnValue()[0] + (level - 1) * weapon.returnValue()[2];
            defaultDefense += weapon.returnValue()[1] + (level - 1) * weapon.returnValue()[3];
        }
        if (shield) {
            defaultAttack += shield.returnValue()[0] + (level - 1) * shield.returnValue()[2];
            if (shield.type == 0) {
                defaultDefense += shield.returnValue()[1] + (level - 1) * shield.returnValue()[3] * 3;
            } else {
                defaultDefense += shield.returnValue()[1] + (level - 1) * shield.returnValue()[3];
            }

        }
        return [defaultAttack, defaultDefense]
    }
}