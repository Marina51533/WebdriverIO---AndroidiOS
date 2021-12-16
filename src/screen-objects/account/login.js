class Login{

  get register_page_login_button(){return $('~AUTH_CREATE_ACCOUNT_BUTTON')};

  get register_page_login_text_title(){return $('~Login')};

  //get anonumous_dropup_module_login(){return $('~Login')}
 
  /** Login page of Registration */
  get login_field_registration(){return $('~LOGIN_EMAIL_TEXTFIELD')};

  get password_field_registration(){return $('~LOGIN_PASSWORD_TEXTFIELD')};

  get button_login_field_registration(){return $('~LOGIN_ACTION_BUTTON')};

  /*** define or overwrite page methods*/
  async clickOnRegisterPageLoginButton(){
   await this.register_page_login_button.click();
  }

  async clickOnAnonumousModeLoginButton(){
    await this.anonumous_dropup_module_login.click();
   }
  

}

export default new Login()