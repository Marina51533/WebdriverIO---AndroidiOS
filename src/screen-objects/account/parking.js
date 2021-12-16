class Parking{

 

  get parking_text_title(){return $('~Parking')};

  get parking_back_button(){return $('~PARKING_BACK_BUTTON')}

  

  /*** define or overwrite page methods*/
  async clickOnParkingBackButton(){
   await this.parking_back_button.click();
  }

  

}

export default new Parking()