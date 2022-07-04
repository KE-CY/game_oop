class Person {
    constructor(level = 1, attack = 10, defense = 10) {
        this.level = level;
        this.attack = attack;
        this.defense = defense;
        this.weapon = null;
        this.shield = null;
    }

    levelUp() {
        this.level = this.level + 1;
        this.attack = this.attack + 3;
        this.defense = this.defense + 2;
    }


    showProperties() {
        return this.level, this.attack, this.defense;
    }
}

class Equipment {
    constructor(attack,defense){
        
    }
}