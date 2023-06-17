/**
 * This this requires a import from an external files. This means you need to
 * add "type": "module" on your package.json to run the tests correctly.
 */

import App from '../src/App.js';

describe('Application sample tests', () => {

    it('Testing App.js sample', function() {
        // Render the component and assert the return
        return render(App).assert('Hello world', function() {
            let self = this;
            return self.component.el.textContent;
        })
    });

});