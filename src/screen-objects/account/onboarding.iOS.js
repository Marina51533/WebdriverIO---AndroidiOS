
class Onboarding{

  
  /*** define elements - 1 page*/
  get marketing_radio_button(){return $('//*[@name="Unchecked"]')}

  get block_text_radio_button(){return $('~ONBOARDING_MARKETING_CONSENT_BUTTON')}

  get accept_button(){return $('~ONBOARDING_MARKETING_ACCEPT_BUTTON')}

  get skip_button_page(){return $('~ONBOARDING_SKIP_BUTTON')}

 

  /*** define elements - 2-3 page*/

  get skip_button(){return $('~ONBOARDING_SKIP_BUTTON')};

  get continue_button(){return $('~ONBOARDING_ALLOW_LOCATION_BUTTON')}

  get allow_location_btn(){return $('~Allow Once')}

  get allow_location_using_app_btn(){return $('~Allow While Using App')}

  get allow_dont_app_btn(){return $('~Don’t Allow')}

  get allow_permission_btn(){return $('~OK')}

  get allow_motion_continue_button(){return $('~ONBOARDING_ALLOW_MOTION_AND_FITNESS_BUTTON')}

  get allow_notifications_button(){ return $('~Allow')}

  get text_from_block(){return $('~ONBOARDING_MARKETING_CONSENT_BUTTON')}

  /*** define or overwrite page methods*/
  async clickOnRadioButton(){
   await this.marketing_radio_button.click();
  }

  async clickOnAcceptButton(){
   await this.accept_button.click();
  }

  async clickOnAllowOnceLocation(){
    await this.allow_location_btn.click();
  }
 
 async clickOnContinueButton(){
   await this.continue_button.click()
 }
async clickOnAllowMotionContinueBtn(){
  await this.allow_motion_continue_button.click();
}

 async clickOnAllowPermissionButton(){
  await this.allow_permission_btn.click()
}

async clickOnAllowNotificationsButton(){
  await this.allow_notifications_button.click()
}

async clickOnSkipButton(){
  await this.skip_button.click()
}

/** Verificstion of the presence of the Radio button block. It should be displayed on the screen */
async textVerificationRadioButtonBlock(){
 if(this.block_text_radio_button !== null && this.block_text_radio_button !== ''  && this.block_text_radio_button !==undefined){
    return ('Radio btn block is not null/empty/undefined');   
}
}


}

export default new Onboarding()