import React from 'react';
import Laptop from './Laptop';
import { Link } from "react-router-dom";
import {ProductConsumer} from '../context';
import styled from "styled-components";


class ThoitrangnuList extends React.Component{
 render(){
  return(
   <div className="py-3">
    <h1>LaptopList</h1>
       <div>
         <LogoCase className="brtent nav" >
            <Link to="/detailslaptop" className="ml-1 pl5  pr4">
               <h2> Hãng: </h2>
             </Link>
             <Link to="/detailslaptop" className="ml-1 ">
               <img src='./logocomputer/Macbook.png' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
             <Link to="/" className="ml-1 ">
               <img src='./logocomputer/Dell44.jpg' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
             <Link to="/detailslaptop" className="ml-1 ">
               <img src='./logocomputer/HP-Compaq.jpg' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
             <Link to="/detailslaptop" className="ml-1 ">
               <img src='./logocomputer/Asus44.jpg' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
              <Link to="/detailslaptop" className="ml-1 ">
               <img src='./logocomputer/Lenovo.jpg' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
             <Link to="/detailslaptop" className="ml-1 ">
               <img src='./logocomputer/Acer437.jpg' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
              <Link to="/detailslaptop" className="ml-1 ">
               <img src='./logocomputer/MSI44.png' alt="laptop" className="card-img-top" style={{width: 100, height: 40}}/>
             </Link>
</LogoCase>
        
        <div className="pl5">
    <br/>
    <TosCase className="brte nav" >
    <p>Nhu cầu: </p>
            <Link to="/detailslaptop" className=" ml-2 pl2 ">
               <p>Đồ họa-kỹ thuật |</p>
             </Link>

             <Link to="/detailslaptop" className="ml-2 ">
               <p>Gaming |</p>
             </Link>
             
             <Link to="/detailslaptop" className="ml-2 ">
               <p>Học tập |</p>
             </Link>
             
             <Link to="/detailslaptop" className="ml-2 ">
               <p>Laptop doanh nhân</p>
             </Link>

             <div className="bnes nav pl4">
             <p >Mức giá: </p>
            <Link to="/detailslaptop" className=" ml-2 pl2 ">
               <p>Dưới 10triệu |</p>
             </Link>

             <Link to="/detailslaptop" className="ml-2 ">
               <p>10-15triệu |</p>
             </Link>
             
             <Link to="/detailslaptop" className="ml-2 ">
               <p>15-25triệu |</p>
             </Link>
             
             <Link to="/detailslaptop" className="ml-2 ">
               <p>25-50triệu</p>
             </Link>
             </div>
            
              <div className="bnes nav pl4">
             <p >Ram: </p>
            <Link to="/detailslaptop" className=" ml-2 pl2 ">
               <p>core i3 |</p>
             </Link>

             <Link to="/detailslaptop" className="ml-2 ">
               <p>core i5 |</p>
             </Link>
             
             <Link to="/detailslaptop" className="ml-2 ">
               <p>core i7 |</p>
             </Link>
             </div>
             </TosCase>
        </div>
        </div>
        <div className="container mt2">
    <div className="row">
      <ProductConsumer className="pv2 pa3">
       { bien =>{
                    return bien.productlaptops.map(( productlaptop, index) =>{
                    return <Laptop key={index} productlaptop={productlaptop} />
                  });
                 }}
     </ProductConsumer>
     
      </div>
      </div>
      </div>

  );
 }
}
const TosCase = styled.nav`

  .brte {
  text-align: left;
  float: left;
  padding: 30px;
  width: 100%;
  display:block;
}
`;
const LogoCase = styled.nav`

  .brtent {
  text-align: left;
  float: left;
}
 .bnes {
  text-align: left;
  float: left;
 
}

`;

export default ThoitrangnuList;