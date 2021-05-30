export class Todo {
    constructor(content){
        this.Id = Date.now();
        this.Content = content;
        this.Completed = false;
    }
}