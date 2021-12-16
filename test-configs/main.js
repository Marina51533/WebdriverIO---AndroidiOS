exports.config = {
  runner: 'local',
  port: 4723,
  host: 'localhost',
  path: '/wd/hub',
  logLevel: 'info',
  framework: 'mocha',
  maxInstances: 1,
  mochaOpts: {
    ui: 'bdd',
    require: ['@babel/register'],
    timeout: 600000
  },
  
  //waitforTimeout: 18000,
  specs: ['./src/test-scripts/account/*'],
  
  //output Dir: './logs
  /*reporters: [
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableMochaHooks: true
    }]
  ],*/
  
    /*capabilities:[{
     
  "platformName": "Android",
   "platformVersion": "11",
    "deviceName": "Pixel 3A",
    "app": "/Users/marina/Desktop/autTesting/appsAn&iOS/apps/edk.apk",
    "appPackage": "cz.citymove",
    "appActivity": "cz.citymove.ui.router.RouterActivity",
    "automationName": "UiAutomator2",
    "androidInstallTimeout": "62000",
    /*'device' : 'Google Pixel 3',
    'os_version' : '10.0',
    'app' : 'bs://5a6325d8a62aa014acecefa052acd49ba917a396',*/
  
    //}],
  ///from webdriverio site
      /*user: process.env.citymove_JEBx9z,
      key: process.env.UHVzgteGhiRcPWQcLp6R,
      services: [
          ['browserstack', {
              browserstackLocal: true
          }]
      ],*/

      /*desiredCaps: [{
        // Set your BrowserStack access credentials
        'browserstack.user' : 'citymove_JEBx9z',
        'browserstack.key' : 'UHVzgteGhiRcPWQcLp6R',
      
        // Set URL of the application under test
        'app' : 'bs://5a6325d8a62aa014acecefa052acd49ba917a396',
      
        // Specify device and os_version for testing
        'device' : 'Google Pixel 3',
        'os_version' : '9.0',
      
        // Set other BrowserStack capabilities
        'project' : 'First NodeJS project',
        'build' : 'Node Android',
        'name': 'first_test'
      }]*/
  
  }