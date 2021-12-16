 const email_txt_field = '//*[@text = "Email"]';
 const password_txt_field = '//*[@text = "Password"]';

 class CredentionalForm {

  get email_txt_Field(){
    $(email_txt_field).waitForDisplayed({timeout:10000})
    return $(email_txt_field)
  }

  get password_txt_Field(){
    $(password_txt_field).waitForDisplayed({timeout:10000})
    return $(password_txt_field)
  }

  input_email(email){
    $(email_txt_field).setValue(email);
    return this
  }

 input_password(password){
   $(password_txt_field).setValue(password);
   return this
 }

 verify_email_text_displayed(value){
  expect(this.email_txt_Field).toHaveText(value, {trim:true});
 }

 }
 export default CredentionalForm