selectCtrl.$inject = ['$state'];
export function selectCtrl($state) {
    const vm = {
        ...this,
        selectedItem,
    };

    return vm;

    function selectedItem(item) {
        // @TODO Let the implementation know that a change occured

        /*
            The method to implement it can be disputable.
            Using the function binding as suggested by home.tpl.html
            can make the code less readable.
            In general components should be autonomous and not refer to outer world controllers.
            Therefore my suggestion would be to either use the $state service or events.
        */

        $state.go(item.state);
    }
}
