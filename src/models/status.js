export class Status {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
export default [
    new Status(0, "Запланировано"),
    new Status(1, "Начато"),
];