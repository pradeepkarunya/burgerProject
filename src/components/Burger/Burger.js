import React from "react";
import "./Burger.scss";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const Burger = props => {
  //Here Map will iterate the Object of burger Ingredients
  //Reduce will club the various array into a Single array.
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])]
      .map((_, key) => {
        return <BurgerIngredients key={igKey + key} type={igKey} />;
      })
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  console.log(transformedIngredients);
  if(transformedIngredients.length===0){
      transformedIngredients = <p>Please Add Burger Ingredients</p>
  }
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
