export default class Repository<T extends {
    id: number;
}> {
    private items;
    add(item: T): void;
    remove(id: number): void;
    findById(id: number): (T | undefined);
    getAll(): T[];
    count(): number;
}
//# sourceMappingURL=Repository.d.ts.map