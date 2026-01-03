import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);
    
  const bottles = use(bottlesPromise);
//   console.log(bottles);
  
    const handleAddToCart = (bottle) =>{
        // console.log('bottle will be added to the cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
    }


  return (
    <div>
        <h3>Bottles: {bottles.length}</h3>
        <p>Add to cart : {cart.length}</p>
        <div className="bottles-container">
            {
            bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
        </div>
    </div>
  );
};

export default Bottles;
