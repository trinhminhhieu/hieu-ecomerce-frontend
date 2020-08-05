import React from 'react';
import { Link } from 'react-router-dom';

class Dangki extends React.Component {
	render() {
   return(
           <div className="ml5"> 
           
           <Link to="/login" style={{color: '#fff'}} >
              Đăng kí ngay
         
            </Link>
           </div>

   	        );

		}
	}
	export default Dangki;