import React from 'react';


export default function CartColumns() {
	return (
         <div className="container-fluid text-center d-none d-lg-block" >
            <div className="row">

            <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">sản phẩm</p>
           </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">tên sản phẩm</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">giá</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">số lượng</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">xóa</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">tổng tiền</p>
          </div>

          </div>
         </div>
         );

}