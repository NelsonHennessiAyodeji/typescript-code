// Mini ORM
class DatabaseTable {
    items = [];
    insert(item) {
        this.items.push(item);
    }
    findById(id) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            return item;
        }
        throw new Error("Item not found");
    }
    findAll() {
        return this.items;
    }
    update(id, updates) {
        const item = this.findById(id);
        // this.items.filter(i => )
    }
}
export {};
//# sourceMappingURL=main.js.map