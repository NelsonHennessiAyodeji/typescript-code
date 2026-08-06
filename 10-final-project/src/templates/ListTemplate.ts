import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement;
    clear(): void;
    render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement;
    static instance: ListTemplate = new ListTemplate();
    private constructor(){
        this.ul = <HTMLUListElement>document.getElementById("listItems");
    };

    public clear(): void {
        this.ul!.innerHTML = ``;
    }

    render(fullList: FullList): void {
        // So we do not duplicate the list
        this.clear();
        fullList.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";

            const check = document.createElement("input") as HTMLInputElement;
            check.type = "checkbox";
            check.id = item.id; // This is the getter at work
            check.checked = item.checked;// This is the getter at work
            li.append(check);

            check.addEventListener('change', () => {
                item.checked = !item.checked;
                fullList.save();
            })

            const label = <HTMLLabelElement>document.createElement("label");
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label);

            const button = <HTMLButtonElement>document.createElement("button");
            button.className = "button";
            button.textContent = "X";
            li.append(button);

            button.addEventListener('click', () => {
                fullList.removeItem(item.id);
                // This is not a loop because we have to click the button in order to make it work
                this.render(fullList);
            })

            this.ul.append(li);
        });
    }

}