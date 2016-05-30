import { iconCtrl } from './icon.ctrl';

export const icon = {
    bindings: {
        icon: '@',
        size: '@?',
    },
    controller: iconCtrl,
    template: '<svg class="st_Icon st_Icon--{{$ctrl.size}}"><use xlink:href="" ng-href="#icon-{{$ctrl.icon}}"></use></svg>',
};

export { iconService } from './icon.service';
