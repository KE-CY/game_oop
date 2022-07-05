import { BerserkerAx, Sword, Weapon } from "./equipment/weapon";
import { GeneralShield, KnightShield, Shield } from "./equipment/shield";
import { Gladiator, Job, Nobody, Paladin } from "./job/job";
import { JobFactory } from "./job/jobFactory";
import { IShieldEquipment, IWeapoEquipment } from "./equipment";

export abstract class DefaultPerson {
    level: number;
    attack: number;
    defense: number;
    weapon: Weapon | null;
    shield: Shield | null;
    job: Job;
    constructor(level = 1, weapon = null, shield = null, job = new Nobody()) {
        this.level = level;
        this.attack = 10 + (this.level - 1) * 3;
        this.defense = 10 + (this.level - 1) * 2;
        this.weapon = weapon;
        this.shield = shield;
        this.job = job;
    }
    changeJob(t: number) {
        if (this.job instanceof Nobody) {
            this.job = new JobFactory().create(t);
        }
    }
    levelUp() {
        this.level = this.level + 1;
        this.attack = this.attack + 3;
        this.defense = this.defense + 2;
    }
    abstract viewStatus(): string
}


class PersonK extends DefaultPerson implements IWeapoEquipment, IShieldEquipment {
    constructor(level = 1, weapon = null, shield = null, job = new Nobody()) {
        super(level, weapon, shield, job);
    }
    setWeapon(weapon: Weapon | null) {
        this.weapon = weapon
    }
    setShield(shield: Shield | null) {
        this.shield = shield
    }
    viewStatus() {
        let attack = this.job.calValue(this.level, this.attack, this.defense, this.weapon, this.shield)[0];
        let defense = this.job.calValue(this.level, this.attack, this.defense, this.weapon, this.shield)[1];
        return '等級:' + this.level + '攻擊力:' + attack + '防禦力' + defense;
    }
}

let noe = new PersonK(3)
console.log(noe.viewStatus());
noe.setWeapon(new Sword());
noe.setShield(new KnightShield());
console.log(noe.viewStatus());
noe.changeJob(2);
console.log(noe.viewStatus());