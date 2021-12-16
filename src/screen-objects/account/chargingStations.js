
class ChargingStations{

 
/*** define or overwrite page methods*/
  get charging_stations_title(){return $('~Charging stations')};
  
  get charging_statins_back_button(){return $('~CHARGING_STATIONS_BACK_BUTTON')}

  

  /** actions with elements */
  async clickOnChargingBackButton(){
   await this.charging_statins_back_button.click();
  }

  

}

export default new ChargingStations()