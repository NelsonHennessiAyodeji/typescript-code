class Repository {
    repo = new Map();
    add(object) {
        const id = this.repo.size + 1;
        this.repo.set(id, object);
    }
    remove(id) {
        this.repo.delete(id);
    }
    update(id, updates) {
        let object = this.repo.get(id);
        object = { ...object, ...updates };
    }
    getById(id) {
        return this.repo.get(id);
    }
    getAll() {
        let arr = [];
        this.repo.forEach(i => arr.push(i));
        return arr;
    }
}
const config = { appName: "Whatapp", version: 2.5, apiURL: "somthing.com" };
const mergeUpdates = (original, updates) => {
    return { ...original, ...updates };
};
const user = {
    id: 1,
    name: "James",
    age: 20,
    email: "something@gmail.com",
    address: "Lagos, Nigeria",
    phone: 9999999,
    createdAt: "now",
    updatedAt: "now",
};
console.log(user);
console.log(mergeUpdates(user, { id: 2, name: "Dniel" }));
export {};
//# sourceMappingURL=main.js.map