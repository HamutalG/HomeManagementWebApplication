export class Task {
    public _id: number;
    public title: string;
    public body: string;
    public date: string;
    public isDone: boolean;

    constructor(title, body, date, isDone) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.isDone = isDone;
    }
}