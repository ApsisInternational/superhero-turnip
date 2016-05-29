iconCtrl.$inject = ['$element'];

export function iconCtrl($element) {
    const vm = {...this};

    updateDomElement();

    return vm;

    function updateDomElement() {
        // @TODO
        // 1. Get the svg element in the element
        // 2. Get the use element inside the svg
        // 3. Set the correct size of the svg. Use the st_Icon class namespace
        //    in conjunction with vm.size
        // 4. Set the xlink:href attribute of the use element to '#icon' + vm.icon
    }
}
