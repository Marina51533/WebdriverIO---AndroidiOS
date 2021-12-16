class Tickets{

 

  get ticket_thirty_minutes_text(){return $('~30 minutes')};

  get ticket_ninety_minutes_text(){return $('~90 minutes')};
  
  get ticket_twentyfour_hours_text(){return $('~24 hours')};

  get ticket_seventytwo_hours_text(){return $('~72 hours')};


  /*** define or overwrite page methods*/
  async clickOnRadioButton(){
   await this.marketing_radio_button.click();
  }

  

}

export default new Tickets()