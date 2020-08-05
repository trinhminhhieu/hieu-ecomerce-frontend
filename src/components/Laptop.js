import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Laptop extends React.Component {
	render(){
    const { id, title, price, imgs, inCart } = this.props.productlaptop;
  return (
    
    <ProductWrapper className=" col-9 mx-auto col-md-6 col-lg-3
            my-3">
            <div className="card">

             <ProductConsumer>
             {(value) => (
              <div className="img-container p-5" 
             onClick={() => 
              value.handleDetail(id)

               }
              > 
        {/*anh san pham*/}
             <Link to='/detailslaptop'>
               <img src={imgs} alt="sanpham" className="card-img-top" />
             </Link>
         {/*nut them vao gio hang */}
             <button className="cart-btn" 
                disabled={inCart ? true : false} 
                onClick={()=> {
                 value.addToCart(id);
                 value.openModal(id);
                 }} >
                 {inCart ? (
                   <p className="text-capitalize mb-0" disabled>
                       {""}
                       in cart
                   </p>
                  ):(<i className="fas fa-cart-plus" />

                  )
                 }
                  </button>
             </div>

              )}
             
             </ProductConsumer>
         {/*chan gio hang modal + tieu de san pham+ gia san pham*/}
             <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">{title}</p>
                <h5 className="text-blue font-italic mb-0">
                  <span className="mr-1"><strike>{price}</strike>
                    
                    </span>
                  đ
                    <br/>
                     2000$

                </h5>
             </div>
            </div>
            
            </ProductWrapper>
  );
}
}

const ProductWrapper = styled.div`
.card{
  broder-color:transparent;
  transition:all 1s linear;

}
.card-footer{
  background:transparent;
  broder-top:transparent;
  transition all 1s linear;
}&:hover{
     .card{
    broder:0.004rem solid rgba(0,0,0,0.2)
    box-shadow:2px 2px 5px 0 rgba(0,0,0.2)
      }
  .card-footer{
    background: rgba(247, 247, 247);
  }
}
.img-container{
    position: relative;
       overflow: hidden;
  }
.card-img-top{
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}
.cart-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: #ff0000;
  broder: none;
  color: var(--mainWhite);
  front-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%)

}
.img-container:hover .cart-btn{
  transform:translate(0, 0);
}
.cart-btn:hover{
  color: var(--mainBlue);
  cursor: pointer;
}
`;

export default Laptop;