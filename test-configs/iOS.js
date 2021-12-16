const {config} = require('./main')
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
config.services=[[TimelineService]];
config.reporters=[ 'spec',[
  'timeline',
  {
    fileName: 'index.html',
    outputDir: 'results_iOS',
    screenshotStrategy: 'on:error',
  },
],];
config.capabilities = [{
   
    "platformName": "iOS",
    "platformVersion": "15.0",
    "deviceName": "iPhone 13",
    "app": "/Users/marina/Desktop/autTesting/appsAn&iOS/apps/citymove.app",
    "noReset": 'true',
    "automationName": 'XCUITest',
    //"autoAcceptAlerts": 'true'
  }]
 

exports.config= config;

 