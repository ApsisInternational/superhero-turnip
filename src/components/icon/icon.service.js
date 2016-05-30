iconService.$inject = ['$http'];

export function iconService($http) {
    const loadedPaths = [];

    const factory = {
        loadIconDefs,
    };

    return factory;


    /**
     * Load icons definition from a given url
     *
     * @param  {string} _path a string representing the url to fetch the definitions at
     */
    function loadIconDefs(_path) {
        if ( loadedPaths.indexOf(_path) !== -1 ) {
            return false;
        }

        loadedPaths.push(_path);

        return $http({
            method: 'GET',
            url: _path,
        })
            .then(response => {
                appendDefsToDOM(response.data);
            });
    }


    function appendDefsToDOM(defs) {
        const div = document.createElement('div');
        div.innerHTML = defs;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }
}
