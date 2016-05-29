selectCtrl.$inject = ['$state'];
export function selectCtrl($state) {
    const vm = {
        ...this,
        selectedItem,
    };

    return vm;

    function selectedItem(item) {
        // @TODO Let the implementation know that a change occured
        $state.go(item.state);
    }
}
