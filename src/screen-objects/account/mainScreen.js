
class MainPage{
 
//define elements from the main screen

  get PT_text(){return $('~Public transport')};

  get PT_main_icon(){return $('~icon_sign_post_public_transport')};

  get scooters_text(){return $('~Scooters')};

  get scooters_main_icon(){return $('~icon_sign_post_scooter')};

  get parking_text(){return $('~Parking')};

  get parking_main_icon(){return $('~icon_sing_post_parking')};
  
  get cars_text(){return $('~Cars')};

  get cars_main_icon(){return $('~icon_sign_post_car')};

  get charging_stations_text(){return $('~Charging stations')};

  get charging_stations_main_icon(){return $('~icon_sign_post_charging_stations')};

  get covid_text(){return $('~COVID testing points')};

  get covid_main_icon(){return $('~icon_sign_post_covid_center')};

  /** Tab Bar */
  get profile_main_icon(){return $('~HOME_PROFILE_TAB_BUTTON')};

  get messages_main_icon(){return $('~HOME_MESSAGES_TAB_BUTTON')};

  get myActivity_main_icon(){return $('~HOME_MY_ACTIVITY_TAB_BUTTON')};

  get tickets_main_icon(){return $('~HOME_TICKETS_TAB_BUTTON')};

  get search_main_icon(){return $('~HOME_SEARCH_TAB_BUTTON')};

  /** main get home/work links */
  get get_home_main_link(){return $('~HOME_GET_ME_HOME_LINK')};

  get get_me_home_text(){return $('~Get me home')};

  get get_work_main_link(){return $('~HOME_WORK_LINK')};

  get get_me_work_text(){return $('~Work')};

  /*** define or overwrite page methods*/
  async clickOnGetHomeLink(){
   await this.get_home_main_link.click();
  }

  async clickOnGetWorkButton(){
    await this.get_work_main_link.click();
  }

  async clickOnPTIcon(){
    await this.PT_main_icon.click();
  }
C
  async clickOnCovidIcon(){
    await this.covid_main_icon.click();
  }

  async clickOnChargingStIcon(){
    await this.charging_stations_main_icon.click();
  }

  async clickOnCarsIcon(){
    await this.cars_main_icon.click();
  }

  async clickOnParkingIcon(){
    await this.parking_main_icon.click();
  }

  async clickOnScootersIcon(){
    await this.scooters_main_icon.click();
  }

  /** Tab bar icons */
  async clickOnProfileIcon(){
    await this.profile_main_icon.click();
  }

  async clickOnMessagesIcon(){
    await this.messages_main_icon.click();
  }

  async clickOnMyActivitiesIcon(){
    await this.myActivity_main_icon.click();
  }

  async clickOnTicketsIcon(){
    await this.tickets_main_icon.click();
  }

  async clickOnSearchIcon(){
    await this.search_main_icon.click();
  }
}

export default new MainPage()