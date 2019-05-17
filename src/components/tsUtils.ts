export class tsTodoItem {
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

export function procTodoText(text: string) {
    const tags: string[] = text.split(' ').filter((t) => t[0] === '#').map((x) => x.slice(1));
    const retx: string = text.split(' ').filter((t) => t[0] !== '#').join(' ');
    return {
        tags,
        text: retx,
    };
}
