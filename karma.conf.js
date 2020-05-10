var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['src/**/*.+(ts|tsx)'],
        webpack: {
            ...webpackConfig,
            entry: null
        },
        webpackMiddleware: {
            stats: {
                colors: true,
            }
        },
        preprocessors: {
            '**/*.+(ts|tsx)': ['webpack', 'sourcemap', 'coverage'],
        },
        reporters: ['coverage-istanbul', 'spec'],
        coverageIstanbulReporter: {
            dir: 'reports',
            reports: ['text', 'html'],
            'report-config': {
                html: {
                    subdir: 'report-html'
                },
            },
        },

        thresholds: {
            global: {
                statements: 60,
                lines: 60,
                branches: 60,
                functions: 60,
            }
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
            }
        },
        singleRun: false,
        browserNoActivityTimeout: 120000,
        concurrency: Infinity,
    })
}