import angular from 'angular';

import { selectBox } from 'select';
import { icon, iconService } from 'icon';

import './stylesheets/styles.css!';

export const superheroTurnip = angular.module('superhero-turnip', ['ng'])
    .factory('stIconService', iconService)
    .component('stSelect', selectBox)
    .component('stIcon', icon);
