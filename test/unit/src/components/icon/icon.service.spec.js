import 'jasmine-expect';

//import { superheroTurnip } from 'superhero-turnip';
import { iconService } from '/src/components/icon/icon.service';
//import 'angular';
//import 'angular-mocks';

// @TODO: Add tests for icon service
describe('Icon service', () => {
    it('should export an Angular object', function it() {
        expect(iconService).toBeFunction();
    });

    /*describe('Downloading', () => {
        var iconSvc;

        beforeEach(module(superheroTurnip.name));
        beforeEach(inject(function(_iconService_) {
            iconSvc = _iconService_;
        }));

        it('should find 1 set of icon definitions', inject(function(iconService){
            "use strict";
            iconSvc.loadIconDefs('//files.anpdm.com/svgdefs.svg');

            "use strict";
            expect(iconSvc);
        }));
    })*/

});
