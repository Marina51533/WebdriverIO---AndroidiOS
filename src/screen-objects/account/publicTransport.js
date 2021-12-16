

class PublicTransport{

 

  get publicTransport_text_title(){return $('~Public transport')}

  get publicTransport_back_button(){return $('~PUBLIC_TRANSPORT_BACK_BUTTON')}

  /*** define or overwrite page methods*/
  async clickOnPTBackButton(){
   await this.publicTransport_back_button.click();
  }

  

}

export default new PublicTransport()