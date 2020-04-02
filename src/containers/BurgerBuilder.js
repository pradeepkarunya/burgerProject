import React, { Component } from 'react';
import Aux from '../hoc/Aux1';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

    state ={
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 1,
            bacon: 3
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;
