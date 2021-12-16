class Registration{

  /*** define elements */
  get logo_pictures(){return $('~Citymove logo')};
  
  get auth_skip_button(){return $('~AUTH_SKIP_BUTTON')};
  
  
  /**actions with elements */


async clickOnArrowBack(){
  await this.arrow_back.click()
}

async clickOnAuthSkipButton(){
  await this.auth_skip_button.click();
}

}

export default new Registration()