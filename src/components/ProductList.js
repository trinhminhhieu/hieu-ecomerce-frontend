import React, { Component } from 'react';
import Product from "./Product";
import Imgslideshow from './Imgslideshow';
import {ProductConsumer} from '../context';



class ProductList extends Component {

  render(){
        
		return(
             <React.Fragment>
               <div className="py-3">
               
               <div className="container mt2">
               {/*show anh*/}
                 <Imgslideshow />
               <div className="row">
               
            
               <ProductConsumer >

                 { value =>{
                 	  return value.products.map(( product, index) =>{
                 		return <Product key={index} product={product} />;
                 	})
                 }}

               </ProductConsumer>
               
               </div>
               </div>
               </div>
               
               
             </React.Fragment>
             //<Product dung ban do map/>
			);
	}
}

export default ProductList;