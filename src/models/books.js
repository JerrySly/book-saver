export class Book {
    constructor(id, name, author, statusId, tagId) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.statusId = statusId;
        this.tagId = tagId;
    }
    get readebleString() {
        return `${this.name} ${this.author}`;
    }
}
export default [
    new Book(0, "Преступление и наказание", "Достоевский И.В.", "0", "0"),
    new Book(1, "Война и мир", "Толстой Л.В.", "1", "1"),
];