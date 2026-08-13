export default class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        // For simplicity sake...
        this.items = this.items.filter(i => i.id !== id);
    }
    findById(id) {
        let item = this.items.find(i => i.id === id);
        // for (let i: number = 0; i < this.items.length; i++) {
        //     if (this.items[i]?.id === id) item = this.items[i];
        // }
        return item;
    }
    getAll() {
        return this.items;
    }
    count() {
        return this.getAll().length;
    }
}
//# sourceMappingURL=Repository.js.map