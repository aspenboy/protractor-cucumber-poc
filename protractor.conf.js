exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to this directory.
    specs: [
        'test/features/*.feature'
    ],

    // baseURL: 'http://localhost:8080/wicket-examples/',

    cucumberOpts: {
        require: ['test/features/step_definitions/*.steps.js',
            'test/features/support/handlers.js']
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }

};