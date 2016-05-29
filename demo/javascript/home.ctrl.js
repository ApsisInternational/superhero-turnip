homeCtrl.$inject = ['$state'];
export function homeCtrl($state) {
    const vm = {
        ...this,
        options: getOptions(),
        onChange(item) {
            $state.go(item.state);
        },
    };

    return vm;

    function getOptions() {
        return [{
            id: 1,
            label: 'Profile',
            state: 'home.settings.profile',
        }, {
            id: 2,
            label: 'Account',
            state: 'home.settings.account',
        }];
    }
}
