export class Member {
    public _id: number;
    public name: string;
    public nickname: string;
    public role: string;

    constructor(name, nickname, role) {
        this.name = name;
        this.nickname = nickname;
        this.role = role;
    }
}