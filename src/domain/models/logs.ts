export class Logs {
    id?: number;
    id_user: number;
    content: string;

    constructor(id_user: number, content: string, id?: number) {
        this.id = id;
        this.id_user = id_user;
        this.content = content;
    }
}