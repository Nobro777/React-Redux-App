import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
align-content: center; 
background: skyblue;
position: relative;
bottom: 25px;
`
const ItemContainer = styled.div`
border-radius: 5px;
border: 2px solid black;
margin: 1.5% 0 0 0;
width: 30%;
`

const Item = props => {
    return (
    <CardContainer> 
        <ItemContainer>
            <img style={{width: "100%"}} src={props.character.image}/> 
            <h2>{props.character.name}</h2>
            <h3>{props.character.status}</h3>
            <button style={{borderRadius: "5px", width: "30%", fontWeight: "bold", margin: "0 0 2% 0"}}>Kill!</button>
        </ItemContainer> 
    </CardContainer>
    )
}


export default Item;