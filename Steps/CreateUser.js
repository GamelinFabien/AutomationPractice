
const { Before, Given, When, Then , After } = require('cucumber')
var assert = require('assert');
 
 
let driver;
 
// Setting Desired Capabilities.
var desiredCaps = {
    platformName: "Android",
    deviceName: "emulator-5554",
    app: "",
    appPackage: "",
    appActivity: "",
    browserName: 'Chrome',
        
};
 
// Before function for driver initialization
Before( {timeout: 6000 * 10000}, async function () {
    console.log('Before: Connecting to Device.....');  
    driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
    console.log('');  
     
})

Given(/^Go to the Home page$/, {timeout: 6000 * 1000}, async () => {
   driver.get("http://automationpractice.com/index.php");
}); 
 

After(async function() {
     
    console.log('Disconnecting.....');  
    console.log('');  
    await driver.quit();
  })