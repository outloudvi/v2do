export default class tsTodoItem {
    public text: string = '';
    public createts: number;
    public tags: string[] = [];
    public finished: boolean = false;

    constructor(text: string, createts = Number(new Date()), tags: string[] = []) {
        this.text = text;
        this.createts = createts;
        this.tags = tags;
        this.finished = false;
    }
}
