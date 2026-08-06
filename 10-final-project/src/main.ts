import './css/style.css';
import FullList from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = <HTMLFormElement>document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault();

        const input = <HTMLInputElement>document.getElementById("newItem");
        const newEntryText: string = input.value.trim();
        // If there is nothing in the input, do nothing
        if (!newEntryText.length) return;

        const itemId: number = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1;

            // We can omit checked since it has a default of false
            const newItem = new ListItem(itemId.toString(), newEntryText);

            fullList.addItem(newItem);
            template.render(fullList);
    });

    const clearItems = <HTMLButtonElement>document.getElementById("clearItemsButton");
    clearItems.addEventListener("click", (): void => {
        fullList.clearList();
        template.clear();
    });

    fullList.load();
    template.render(fullList);
}

// Also like saying defer in the HTML
document.addEventListener('DOMContentLoaded', initApp);