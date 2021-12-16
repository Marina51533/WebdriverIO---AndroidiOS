
class Cars{

 

  get cars_text_title(){return $('~Cars')};

  get cars_back_button(){return $('~CARS_BACK_BUTTON')};

  

  /*** define or overwrite page methods*/
  async clickOnCarsBackButton(){
   await this.cars_back_button.click();
  }

  

}

export default new Cars()