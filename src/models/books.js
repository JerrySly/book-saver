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
    new Book(0, "Test1", "Author1", "0", "0"),
    new Book(1, "Test2", "Author2", "1", "1"),
];