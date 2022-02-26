import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a href='sdasda'>
                <img src='images/logo.svg' alt="company logo"></img>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu></CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose></CustomClose>
                </CloseWrapper>
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Test drive</a></li>
                <li><a href="#">utilities</a></li>
                <li><a href="#">charging</a></li>
                <li><a href="#">power</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
width:100%;
z-index:1;
`

const Menu = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
justify-content:center;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background:white;
width:320px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;

li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
    font-weight:600;
    text-transform:capitalize;
    }
}
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`