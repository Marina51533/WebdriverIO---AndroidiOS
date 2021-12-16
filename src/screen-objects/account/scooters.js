class Scooters{

 

  get scooters_text_title(){return $('~ONBOARDING_SKIP_BUTTON')}

  

  /*** define or overwrite page methods*/
  async clickOnRadioButton(){
   await this.marketing_radio_button.click();
  }

  

}

export default new Scooters()