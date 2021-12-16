class Profile{

  get profile_edit_button(){return $('~PROFILE_EDIT_BUTTON')}

  get profile_vote_button(){return $('~PROFILE_ADVANCED_FEATURES_BUTTON')}
  
  get profile_home_address_button(){return $('~PROFILE_HOME_ADDRESS_BUTTON')};
  
  get profile_work_address_button(){return $('~PROFILE_WORK_ADDRESS_BUTTON')};

  get profile_licence_plate__button(){return $('~PROFILE_LICENSE_PLATES_BUTTON')};
  
  get profile_advanced_features_button(){return $('~PROFILE_PERMISSIONS_BUTTON')};

  get profile_settings__button(){return $('~PROFILE_SETTINGS_BUTTON')};
  
  get profile_help_contact_button(){return $('~PROFILE_HELP_CONTACT_BUTTON')};

  get profile_logout_button(){return $('~PROFILE_LOGOUT_BUTTON')};


  /*** define or overwrite page methods*/
  async clickOnVoteButton(){
   await this.profile_vote_button.click();
  }

  async clickOnHomeAddressButton(){
    await this.profile_home_address_button.click();
   }
  
   async clickOnWorkAdressButoon(){
    await this.profile_work_address_button.click();
   }

   async clickOnAdvancedFeatures(){
    await this.profile_advanced_features_button.click();
   }

   async clickOnHelpContact(){
    await this.profile_help_contact_button.click();
   }

}

export default new Profile()