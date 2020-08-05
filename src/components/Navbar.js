import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-mart.png';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import Dangki from './Dangki';
import SearchBox from './SearchBox';
import {storeProducts} from '../data';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




class Navbar extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      products: storeProducts,
      searchFiled: '',
      dropdownOpen: false
    }
  }

  updateSearch = (event) => {
    this.setState({searchFiled: event.target.value.substr(0, 20)});
  
   } 
        
///menu list
  toggle() {
    
    this.setState(prevState => ({
      
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
	render() {
        
      const filtContacts = this.state.products.filter(product => {
            return product.title.indexOf(this.state.searchFiled) !== -1;
          })
     //console.log(filtContacts);
    
		return(
      
            <NavWrapper className=" navbar navbar-expand-sm  navbar-dark px-sm-5">
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand" />
            </Link>
          {/*danh sach san phan thanh menu dieu huong ve to="/" qua link*/}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-4">

            
               <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
           <Link to="/" className="nav-link" >
                    Sản phẩm
                </Link>
        </DropdownToggle>
        <DropdownMenu className=" " style={{width: '200px', borderColor : 'coral'}} >
          <DropdownItem header>Công nghệ</DropdownItem>
          
          <DropdownItem>
          <Link to='/laptoplist'>
          Laptop
          </Link>
          </DropdownItem>
          
          <DropdownItem><Link to='/laptoplist'>Điện thoại</Link></DropdownItem>
          <DropdownItem><Link to="">Tablet</Link></DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Thời trang </DropdownItem>
          <DropdownItem><Link to='thoitrangnu'>Thời trang nữ</Link> </DropdownItem>
          <DropdownItem><Link to="">Áo</Link></DropdownItem>
          <DropdownItem><Link to="">Đồng hồ</Link></DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </Dropdown>
                </li>
                </ul>
          
               <div className="loginNav ml-auto  mr-1 center">
                   
                   <SearchBox updateSearch={this.updateSearch}  products={filtContacts}/>

                </div>
              <div className="mr-2 ml-3">
                         <Dangki />

                 </div>
                {/*thanh menu chua nut gio hang,link dieu huong gio hang to"/cart" */}
                <Link to="/cart" className="mt-1 center">
                  <ButtonContainer >
                    <span className="mr-2">
                       <i className="fas fa-cart-plus" />
                     </span>
                    Giỏ hàng
                  </ButtonContainer>
                </Link>

            </NavWrapper>
			);
	}
}

const NavWrapper = styled.nav`
 background: var(--mainBlue);
.nav-link {
 	color: var(--mainWhite) !important;
 	font-size: 1.3rem;
 	text-tranform: capitalize ;

}
`;

export default  Navbar;