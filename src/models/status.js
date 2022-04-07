export class Status {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}
export default [
    new Status(0, "Запланировано", "#AAAA00"),
    new Status(1, "Начато", "#00AAFF"),
];