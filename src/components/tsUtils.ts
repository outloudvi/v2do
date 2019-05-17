export class tsTodoItem {
    public text: string = '';
    public createts: number;
    public tags: string[] = [];
    public finished: boolean = false;

    constructor(text: string, createts = Number(new Date()), tags: string[] = []) {
        this.text = text;
        this.createts = createts;
        this.tags = tags;
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

export function saveToLocalStorage(todos: tsTodoItem[]) {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

export function getFromLocalStorage(): tsTodoItem[] {
    const itemstr = window.localStorage.getItem('todos');
    try {
        const items = JSON.parse(<string>itemstr);
        if (itemChecker(items)) return items;
        return [];
    } catch {
        return [];
    }
    return [];
}

function itemChecker(items: any): boolean {
    if (typeof items !== typeof []) return false;
    for (let i of items) {
        if (i.tags === undefined
            || i.createts == undefined
            || i.text === undefined
            || i.finished === undefined)
            return false;
    }
    return true
}