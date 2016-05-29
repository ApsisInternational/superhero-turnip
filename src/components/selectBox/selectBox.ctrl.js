export function selectCtrl() {
    const vm = {
        ...this,
        selectedItem,
    };

    return vm;

    function selectedItem(item) {
        // @TODO Let the implementation know that a change occured
        console.log('changed', item)
    }
}
