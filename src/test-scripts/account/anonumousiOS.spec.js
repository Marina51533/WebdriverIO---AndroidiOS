 import Onboarding from "../../screen-objects/account/onboarding.iOS"
 import MainScreen from "../../screen-objects/account/mainScreen"
 import Routing from "../../screen-objects/account/routing"
 import Covid from '../../screen-objects/account/covid'
 import Charging from '../../screen-objects/account/chargingStations'
 import Cars from '../../screen-objects/account/cars'
 import Parking from '../../screen-objects/account/parking'
 import PublicTransport from '../../screen-objects/account/publicTransport'
 import Profile from '../../screen-objects/profile/profile'
 import Tickets from '../../screen-objects/account/tickets'
 import Login from '../../screen-objects/account/login'
 import Registration from '../../screen-objects/account/registration.page'


 describe('Smoke testing in anonumous mode', ()=>{

  /** Onboarding positive testing */

  it('Onboarding - verification of the first page:links and the Accept button', async()=>{
    
    /**Presence of the radio button block */
    const text_radio_button_block = Onboarding.textVerificationRadioButtonBlock();
    let token_radio_button_block = await text_radio_button_block;
   
    /** Block is not null/empty/undefined */
    await expect(token_radio_button_block).toContain('Radio btn block is not null/empty/undefined');
    await expect(Onboarding.marketing_radio_button).toExist();
    
    /** The button has name in CZ or Eng */
    await expect(Onboarding.accept_button).toHaveText(['Accept','Souhlasím']);

    await Onboarding.clickOnRadioButton();
    await Onboarding.clickOnAcceptButton();
    
  })

it('Onboarding - verification of the 2 page (text verification,click on its button)', async()=>{

    await expect(Onboarding.skip_button).toExist();
    await expect(Onboarding.continue_button).toExist(); 
    await Onboarding.clickOnContinueButton();
    await driver.pause(4000);

  })

  it('Onboarding - click on "Allow once" of module, verification of module"s text',async()=>{
    //await expect(Onboarding.allow_location_using_app_btn.getText()).toExist(); 
    //await expect(Onboarding.allow_dont_app_btn.getText()).toBeDisplayed(); 
    await expect(await Onboarding.allow_location_btn.getText()).toContain('Allow Once'); 
    await Onboarding.clickOnAllowOnceLocation();
   
  })

  it('Onboarding - Dont forget to pay for parking page (text verification,click on Continue)', async()=>{
    await expect(await Onboarding.skip_button).toExist();
    await expect(await Onboarding.allow_motion_continue_button).toExist();
    await Onboarding.clickOnAllowMotionContinueBtn();
    await driver.pause(3000);
  })

  it('Onboarding - click on Allow permission, verification of module"s text', async()=>{

    //await expect(await Onboarding.allow_permission_btn.getText()).toEqual('OK'); 
    //await expect(await Onboarding.allow_dont_app_btn.getText()).toEqual('Don’t Allow'); 
    await Onboarding.clickOnAllowPermissionButton();
    await driver.pause(3000);

  })

  it('Onboarding - text verification, click on Continue button of the next page', async()=>{

    await expect(Onboarding.allow_motion_continue_button).toExist(); 
    await expect(Onboarding.skip_button).toExist();
    await Onboarding.clickOnAllowMotionContinueBtn();
    
    await driver.pause(4000);
  })

  it('Onboarding - click on Allow Notifications',async()=>{
    //await expect(await Onboarding.allow_notifications_button.getText()).toEqual('Allow'); 
    await Onboarding.clickOnAllowNotificationsButton();
    await driver.pause(3000);
  })

  it('Registration page - text verification,click on Skip and Allow track to go to the anonimous mode', async()=>{
    await expect(await Registration.logo_pictures).toExist();
    await expect(await Registration.auth_skip_button).toExist();
    await Registration.clickOnAuthSkipButton();
 
  })

 it('Main page - click on Allow button of a module, verefication of its text', async()=>{
   // await expect(await Onboarding.allow_notifications_button.getText()).toEqual('Allow'); 
    await Onboarding.clickOnAllowNotificationsButton();
    await driver.pause(9000);
  })

  //***  Smoke testing of the app */

/**cheking presence of elements of the main screen */

it('Main page - titles of 6 sections are displayed correctly',async()=>{

  await driver.pause(4000);
  await expect(await MainScreen.parking_text.getText()).toEqual('Parking'); 
  await expect(await MainScreen.PT_text.getText()).toEqual('Public transport'); 
  await expect(await MainScreen.scooters_text.getText()).toEqual('Scooters');
  await expect(await MainScreen.cars_text.getText()).toEqual('Cars');
  await expect(await MainScreen.charging_stations_text.getText()).toEqual('Charging stations');
  await expect(await MainScreen.covid_text.getText()).toEqual('COVID testing points');
})

it('Main page - titles of the Tab Bar are displayed correctly', async()=>{

  await driver.pause(7000)
  //await expect(await MainScreen.profile_main_icon.getText()).toEqual('Profile');
  await expect(await MainScreen.messages_main_icon.getText()).toEqual('Messages');
  await expect(await MainScreen.myActivity_main_icon.getText()).toEqual('My activity');
  await expect(await MainScreen.tickets_main_icon.getText()).toEqual('Tickets');
  await expect(await MainScreen.search_main_icon.getText()).toEqual('1');
})

it('Main page - verification of get to Home button and field', async()=>{

  await expect(await MainScreen.get_me_home_text.getText()).toEqual('Get me home');
 
 });
 
 it('Main page - verification of get to Work button',async()=>{
 
   await expect(await MainScreen.get_me_work_text.getText()).toEqual('Work');
 })
  
/** cheking of the routing and home/work destination*/

it('Click on the search field and input an address', async()=>{

  await Routing.clickOnSearchField();
  await Routing.search_field.addValue('Delnicka 4');
  await browser.pause(4000)
  await expect(await Routing.home_routing_icon.getText()).toEqual('Home');
  await expect(await Routing.choice_from_map_routing_icon.getText()).toEqual('Choose from map');
  await Routing.clickOnArrowBack();

})

/** Verification 6 sectors:PT,Scooters,Parking,Cars,Charging stations, Covid */
it('Verification of the Covid section',async()=>{
  
  await MainScreen.clickOnCovidIcon();
  await expect(await Covid.covid_title.getText()).toEqual('COVID-19 testing points');
  await Covid.clickOnCovidBackButton();
  await expect(await MainScreen.covid_text.getText()).toEqual('COVID testing points');
})

it('Verification of the Charging stations section',async()=>{

  await MainScreen.clickOnChargingStIcon();
  await expect(await Charging.charging_stations_title.getText()).toEqual('Charging stations');
  await Charging.clickOnChargingBackButton();
  await expect(await MainScreen.charging_stations_text.getText()).toEqual('Charging stations');
})

it('Verification of the Cars section',async()=>{
  
  await MainScreen.clickOnCarsIcon();
  await expect(await Cars.cars_text_title.getText()).toEqual('Cars');
  await Cars.clickOnCarsBackButton();
  await expect(await MainScreen.cars_text.getText()).toEqual('Cars');
})

it('Verification of the Parking section',async()=>{
  
  await MainScreen.clickOnParkingIcon();
  await expect(await Parking.parking_text_title.getText()).toEqual('Parking');
  await Parking.clickOnParkingBackButton();
  await expect(await MainScreen.parking_text.getText()).toEqual('Parking'); 
})

it('Verification of the Scooters section',async()=>{
  await driver.pause(4000);
})

it('Verification of the PT section',async()=>{

  await MainScreen.clickOnPTIcon();
  await expect(await PublicTransport.publicTransport_text_title.getText()).toEqual('Public transport');
  await PublicTransport.clickOnPTBackButton();
  await expect(await MainScreen.PT_text.getText()).toEqual('Public transport'); 
  await driver.pause(4000);

})

/** Tab Bar testing */

it('Profile section in anonumous mode - all sectors are displayed',async()=>{

  await MainScreen.clickOnProfileIcon();
  await browser.pause(4000)
  await expect(await Profile.profile_home_address_text_title.getText()).toEqual('Home address'); 
  await expect(await Profile.profile_work_address_text_title.getText()).toEqual('Work address'); 
  await expect(await Profile.profile_advanced_features_text_title.getText()).toEqual('Advanced features'); 
  await expect(await Profile.profile_help_contact_text_title.getText()).toEqual('Help & Contact'); 
  await MainScreen.clickOnSearchIcon();
  await expect(await MainScreen.get_me_home_text.getText()).toEqual('Get me home');
  await driver.pause(4000);


})

it('Tickets section in anonumous mode - all tickets are displayed',async ()=>{

  await MainScreen.clickOnTicketsIcon();
  await expect(await Tickets.ticket_thirty_minutes_text.getText()).toEqual('30 minutes'); 
  await expect(await Tickets.ticket_ninety_minutes_text.getText()).toEqual('90 minutes'); 
  await expect(await Tickets.ticket_twentyfour_hours_text.getText()).toEqual('24 hours'); 
  await expect(await Tickets.ticket_seventytwo_hours_text.getText()).toEqual('72 hours'); 
  await MainScreen.clickOnSearchIcon();
  await expect(await MainScreen.get_me_home_text.getText()).toEqual('Get me home');
})


})
