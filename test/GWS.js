var assert = require('assert');

describe('General Magento Test', function() {
    before(function() {
        browser.windowHandleMaximize();
    });

    it('Correct Title! @watch', function()  {
        browser.url('https://grandwesternsteaks.com');
    // browser.click('a');
    // expect(browser.getTitle()).to.contain('Grand Western Steaks Grand Western Steaks - The Steak of Steaks: Buy USDA Prime, Wagyu, Grass Fed, and Angus Beef');

        var title = browser.getTitle();
        assert.equal(title, 'Grand Western Steaks Grand Western Steaks - The Steak of Steaks: Buy USDA Prime, Wagyu, Grass Fed, and Angus Beef-test');
});


});
