const {config} = require('./main')
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
config.services=[[TimelineService]];
config.reporters=[ 'spec',[
  'timeline',
  {
    fileName: 'index.html',
    outputDir: 'results_Android',
    screenshotStrategy: 'on:error',
  },
],];

config.capabilities = [{
   
  "platformName": "Android",
  "platformVersion": "11",
   "deviceName": "Pixel 3A",
   "app": "/Users/marina/Desktop/autTesting/appsAn&iOS/apps/edk.apk",
   "appPackage": "cz.citymove",
   "appActivity": "cz.citymove.ui.router.RouterActivity",
   "automationName": "UiAutomator2",
   "androidInstallTimeout": "62000",
   
  }]

  exports.config = config