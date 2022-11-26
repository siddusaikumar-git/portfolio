export class Skill {
    public skillName: string;
    public skillFabAwesomeName: string;
    public skillRating: number;
    constructor(skillName: string, skillFabAwesomeName: string, skillRating: number){
        this.skillName = skillName;
        this.skillFabAwesomeName = skillFabAwesomeName;
        this.skillRating = skillRating;
    }
}