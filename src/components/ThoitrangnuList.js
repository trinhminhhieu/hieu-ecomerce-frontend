import React from 'react';
import Thoitrangnu from './Thoitrangnu';
import {ProductConsumer} from '../context';

class ThoitrangnuList extends React.Component{


 render(){
  return(
   <div className="dib">
    <h1>thoi trang nu</h1>
    <div>
      <ProductConsumer>
               { bien =>{
                 	  return bien.productwomens.map(( productwomen, index) =>{
                 		return <Thoitrangnu key={index} productwomen={productwomen} />
                 	});
                 }}
          </ProductConsumer>
      </div>
      </div>
  );
 }
}

export default ThoitrangnuList;