import React, { Component } from "react";
import Aux from "../../hoc/Aux";

import Burger from '../../components/Burger/Burger';

export class BurgerBuilder extends Component {

  render() {
    return (
      <Aux>
        <Burger></Burger>
        <div>burger controls</div>
      </Aux> 
    );
  }
}

export default BurgerBuilder;
