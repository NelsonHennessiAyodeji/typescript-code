import ListItem from "./ListItem";

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj: ListItem): void;
    removeItem(id: string): void;
}

// Will make this class a singleton
export default class FullList implements List {
    // Like this, we will always have one instance
    static instance: FullList = new FullList();
    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list;
    }

    public load() : void {
        const storedList: (string | null) = localStorage.getItem("myList");
        // Type guarding
        if (typeof storedList !== "string") return;
        // We are going to get back the underscore versions of this class, hence the underscored types
        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList);

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(
                itemObj._id,
                itemObj._item,
                itemObj._checked
            );
            // In this situation, they are both the same
            // Though some implementation design may make them differ in some certain cases
            FullList.instance.addItem(newListItem)
            // this.addItem(newListItem); correct
        })
    }

    public save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    // Check Back
    public clearList(): void {
        localStorage.clear();
    }

    public addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    public removeItem(id: string): void {
        const itemObj = this._list.filter(i => i.id !== id);
        this._list = itemObj;
        this.save();
    }
}