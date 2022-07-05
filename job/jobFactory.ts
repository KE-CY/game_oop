import { Gladiator, Nobody, Paladin } from "./job";

/** 職業生產工廠 */
export class JobFactory {
    NOBODY: number = 0;
    GLADIATOR: number = 1;
    PALADIN: number = 2;
    create(t: number) {
        switch (t) {
            case this.NOBODY: {
                return new Nobody()
            }
            case this.GLADIATOR: {
                return new Gladiator();
            } case this.PALADIN: {
                return new Paladin();
            } default: {
                throw new Error("error");
                ;
            }
        }
    }
}
