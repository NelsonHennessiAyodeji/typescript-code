export default class Repository <T extends {id: number}> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    public remove(id: number): void {
        // For simplicity sake...
        this.items = this.items.filter(i => i.id !== id);
    }

    public findById(id: number): (T | undefined) {
        let item: (T | undefined) = this.items.find(i => i.id === id);
        // for (let i: number = 0; i < this.items.length; i++) {
        //     if (this.items[i]?.id === id) item = this.items[i];
        // }
        return item;
    }

    public getAll(): T[] {
        return this.items;
    }

    public count(): number {
        return this.getAll().length;
    }
}
