import React, { useEffect, useState } from "react";


const Cart = () => {
 
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(data);

  useEffect(() => {
    const getCart = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      setData(await response.clone().json());
      setCart(await response.json());
      console.log(response);
      console.log(cart);
    };
    getCart();
    console.log(getCart);
  }, []);

  const handleButton =(product)=>{
    setCart(product)
  }
  const ShowCart = () => {
    return (
      <>
        <h1>Gio hang</h1>
        {cart.map((product,index)=>{
          return(
            <div className="row" key={index}>
            <div className="col-md-4">
              <img src={product.image} alt={product.title}
               height="200px" width="180px"/>
              </div> 
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} =$
                  {product.qty * product.price}
                </p>
                <button className="btn btn-outline-dark me-4"
                onClick={()=>handleButton(product)}>
                  <i className="fa fa-minus"></i>
                </button>
                <button className="btn btn-outline-dark" 
                
                onClick={()=>handleButton(product)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
          </div>
          
          )
        })}
       
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{<ShowCart />}</div>
      </div>
    </div>
  );
};

export default Cart;
