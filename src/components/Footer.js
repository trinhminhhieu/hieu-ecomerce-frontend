import React from 'react';
import styled from 'styled-components';




const Footer = () => {
	
		return(
            <Footerstyle className=" navbar navbar-expand-sm  navbar-dark px-sm-5">
             
            <div className="py-5">
            <p  className="pay pr5">
              Chấp nhận thanh toán:
              <br/>
              <img src="./payimg/visa.png" alt="visa" />
              <img src="./payimg/mastercard.png" alt="mastercard" />
              <img src="./payimg/paypal.png" alt="paypal" />
              <img src="./payimg/jcb.png" alt="jcb" />
             </p>
            <p>

              Công ty TNHH Hieu Creative Technologies Co.,Ltd. 
              <br />
              Giám đốc điều hành: Trịnh Minh Hiếu
              <br />
              Địa chỉ: Tòa nhà HCT Tower,Thành phố Bắc Ninh,Tỉnh Bắc Ninh,Việt Nam
              </p>

              <br/><br/>
              <p className="copy">
                <b> Copyright © 2019 Hieu Creative Technologies
                 <br/>
                 All right reserved. 
                 </b>
              </p>

            </div>

            
               
            </Footerstyle>
			);
	
}

const Footerstyle = styled.nav`
 background: var(--mainBlue);
 height:20px;
 margin-top:0;
 display:block;
 padding-top:1px solid #ff0000;
.pay{
  float: right;
}
.copy{
   text-align: center;

}
`;

export default Footer;