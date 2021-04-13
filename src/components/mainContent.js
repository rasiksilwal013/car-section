import React from 'react';
import product_card from "../data/product-data";


const Maincontent =()=>{
    console.log(product_card);
    const listItems= product_card.map((item)=>
    <div className="card" key={item.id}>

        <div className="card_img">
            <img src={item.thumb}/>
        </div>
       <div className="card_header">
           <h2>
               {item.product_name}
           </h2>
           <p>
               {item.description}
           </p>

           <p className="price">
               {item.currency}<span>{item.price}</span>
           </p>

           
           
           
       </div>
       <div className="btn">Book Now</div>
    </div>
    );

    return(
        <div className="main_content">
         <h3>Available Cars</h3>

            {
                listItems
            }
        </div>
    )
}
export default Maincontent;
