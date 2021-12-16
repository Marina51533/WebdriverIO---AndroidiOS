class MyActivity{

 

  get skip_button_page(){return $('~ONBOARDING_SKIP_BUTTON')}

  

  /*** define or overwrite page methods*/
  async clickOnRadioButton(){
   await this.marketing_radio_button.click();
  }

  

}

export default new MyActivity()