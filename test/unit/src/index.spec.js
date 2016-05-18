import 'jasmine-expect';

import { superheroTurnip } from 'superhero-turnip';

describe('Superhero Turnip', () => {
    it('should export an Angular object', function it() {
        expect(superheroTurnip).toBeObject();
    });

    it('should be named "superhero-turnip"', function it() {
        expect(superheroTurnip.name).toEqual('superhero-turnip');
    });
});
