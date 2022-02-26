import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import downArrow from '../img/down-arrow.svg';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    // pass props and use as object or unpack individual
    return (
        <Wrap bgImages={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText &&
                            <RightButton>{rightBtnText}</RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src={downArrow}></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section


// Styled Components CSS
const Wrap = styled.div`
width:100vw;
height:100vh;
text-transform:capitalize;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column; 
justify-content:space-between;
align-items:center;
background-image:${props => `url("/images/${props.bgImages}")`};
z-index:-1;
`

const ItemText = styled.div`
padding-top:15vh;
text-align:center
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}
`

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
color:white;
heigth:40px;
width:256px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.8;
text-transform:capitalize;
font-size:20px;
cursor:pointer;
margin:8px;
padding:10px 0
`

const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`

const DownArrow = styled.img`
height:40px;
width:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`

const Buttons = styled.div`
`
