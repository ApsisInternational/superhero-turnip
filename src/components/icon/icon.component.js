import { iconCtrl } from './icon.ctrl';

export const icon = {
    bindings: {
        icon: '@',
        size: '@?',
    },
    controller: iconCtrl,
    template: '<svg class="st_Icon"><use xlink:href="#icon-"></use></svg>',
};

export { iconService } from './icon.service';
