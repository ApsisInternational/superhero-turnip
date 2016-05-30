import angular from 'angular';
import 'angular-ui-router';

import { superheroTurnip } from 'superhero-turnip';

import { demoConfig } from './demo.config';

const appEl = document.querySelector('#superhero-turnip');
const module = angular.module('superhero-turnip-demo', ['ng', 'ui.router', superheroTurnip.name])
    .config(demoConfig)
    .run(moduleRun);

moduleRun.$inject = ['stIconService'];
function moduleRun(aIconService) {
    aIconService.loadIconDefs('//files.anpdm.com/svgdefs.svg');
}

angular.element(document)
    .ready(() => {
        document.querySelector('#js-LoadingMessage').remove();
        return angular.bootstrap(appEl, [module.name], { strictDi: true });
    });
