import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: 70%;
    margin-left: 15%;
    margin-top:5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
 `;

 const StyledA = styled.a`
    color: white;	    
    text-decoration: none;
    `;	


  function Nav() {

      return <StyledNav >
        <StyledA href='#'>Home</StyledA>	        
        <StyledA href='#'>Services</StyledA>	        
        <StyledA href='#'>About</StyledA>	        
        <StyledA href='#'>Contact</StyledA>	        
    </StyledNav>	    
}	
export default Nav