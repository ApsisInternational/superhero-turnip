import homeTemplate from './templates/home.tpl.html!text';
import { homeCtrl } from './javascript/home.ctrl.js';

export function demoConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('first/');

    $stateProvider
        .state('home', {
            url: '/',
            abstract: true,
            template: homeTemplate,
            controller: homeCtrl,
            controllerAs: '$ctrl',
        })
        .state('home.first', {
            url: 'first/',
            template: `
            <h1>
                <st-icon icon="apsis-product-logo" size="m"></st-icon>
                First Page
            </h1>
            `,
        })
        .state('home.second', {
            url: 'second/',
            template: `
            <h1>
                Second Page
            </h1>
            `,
        })
        // // @TODO: Center icon vertically
        .state('home.settings', {
            url: 'settings/',
            abstract: true,
            template: '<ui-view></ui-view>',
        })
            .state('home.settings.profile', {
                url: 'profile/',
                template: `
                <h1>
                    Settings Page
                </h1>
                `,
            })
            .state('home.settings.account', {
                url: 'account/',
                template: `
                <h1>
                    Account Page
                </h1>
                `,
            });
}
