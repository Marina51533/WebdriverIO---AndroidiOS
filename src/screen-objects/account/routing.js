
class Routing{

  /*** define elements */
  get search_field(){return $('~HOME_SEARCH_FIELD')};
  
  get home_routing_icon(){return $('~Home')};

  // NO SUCH LOCATOR!!! get work_routing_icon(){return $('~Work')};

  get choice_from_map_routing_icon(){return $('~Choose from map')};

  get arrow_back(){return $('~ArrowBack')}
  
  /**actions with elements */

async clickOnSearchField(){
  await this.search_field.click()
}

async clickOnArrowBack(){
  await this.arrow_back.click()
}

}

export default new Routing()