
import template from './selectBox.tpl.html!text';
import {selectCtrl} from './selectBox.ctrl';

export const selectBox = {
    // @TODO Implement a component. Parts needed:
    // template
    // bindings
    // controller

    bindings: {
        options: '<',
        onChange: '&',
    },
    controller: selectCtrl,
    template: template,
};
