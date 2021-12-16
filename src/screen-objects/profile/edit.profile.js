class EditProfile{

  get edit_name_field(){return $('~PROFILE_EDIT_NAME_FIELD')};

  get edit_surname_field(){return $('~PROFILE_EDIT_SURNAME_FIELD')};

  get edit_email_field(){return $('~PROFILE_EDIT_EMAIL_FIELD')};

  get edit_save_button(){return $('~PROFILE_EDIT_SAVE_BUTTON')};

  get edit_delete_account_button(){return $('~PROFILE_EDIT_DELETE_ACCOUNT_BUTTON')};

  /*** define or overwrite page methods*/
  async clickOnRegisterPageLoginButton(){
   await this.register_page_login_button.click();
  }

  

}

export default new EditProfile()