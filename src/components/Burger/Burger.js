import React from 'react'
import classes from './Burger.css';
import BurgerIngrtedient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngrtedient type= "bread-top"/>
            <BurgerIngrtedient type= "meat"/>
            <BurgerIngrtedient type= "cheese"/>
            <BurgerIngrtedient type= "bread-bottom"/>
        </div>
    )
}

export default Burger;
