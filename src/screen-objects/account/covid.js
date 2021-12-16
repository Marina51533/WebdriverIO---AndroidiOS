

class Covid{

 
/*** define or overwrite page methods*/
  get covid_title(){return $('~COVID-19 testing points')};

  get covid_allow_back(){return $('~COVID_BACK_BUTTON')};

  

  /** actions with elements */
  async clickOnCovidBackButton(){
   await this.covid_allow_back.click();
  }

}

export default new Covid()