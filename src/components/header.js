import React from 'react';

import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
import { StyledHeader, Styled } from '../styles/headerStyles'

const Header = ({ theme, toggleTheme }) => {
    return (  
        <StyledHeader>
            <Styled>
                <h1> TODO</h1>
                <div onClick = { toggleTheme }> 
                    <img src={theme === 'light' ? moon : sun} alt=""/> 
                </div>
            </Styled>
        </StyledHeader>

    );
}
 
export default Header;