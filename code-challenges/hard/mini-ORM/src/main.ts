// Mini ORM
class DatabaseTable<T extends {id: number}> {
    private items: T[] = [];

    public insert(item: T): void {
        this.items.push(item);
    }

    public findById(id: number): T {
        const item = this.items.find(i => i.id === id);
        if (item) {
            return item;
        }
        throw new Error("Item not found");
    }

    public findAll(): T[] {
        return this.items;
    }

    public update(id: number, updates: Partial<T>): void {
        const item = this.findById(id);
        // this.items.filter(i => )
    }

    // delete(id: number)
    // exists(id: number)
    // count()
    // clear()
}