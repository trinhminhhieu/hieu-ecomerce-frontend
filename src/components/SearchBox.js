import React from 'react';
import styled from 'styled-components';


const SearchBox = ({ searchFiled ,updateSearch}) => {
	return (
    <Seach className="nav">
		<div className="pa2">
         <input 
          className="pa2  bg-lighttest-blue "
         type='search'
          placeholder='Tìm kiếm sản phẩm....'
         onChange={updateSearch}
          
              />
         
         </div>
        </Seach>
		);
}

const Seach = styled.nav`
.pa2{
  width:380px;
  height:35px;
  padding-top:2px;
 
}

`;

export default SearchBox;