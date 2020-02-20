import React from 'react'
import { connect } from 'react-redux'
import { getCharacter } from '../actions/index'
import styled from  'styled-components'
import Item from '../components/Item'

const Button = styled.button`
border-radius: 5px;
border: 3px solid black;
padding: 1%;
margin: 5% 0 0 0;
color: red;
background: skyblue; 
font-size: 2rem;
opacity: .6;
&:hover{
    cursor: pointer;
    opacity: 1;
}
`


const ItemList = props => {
    const fetchCharacter = e => {
        e.preventDefault();
        props.getCharacter()
    }

    return (
        <>
        <h1 style={{display: "flex", flexDirection: "column",color: "red", backgroundColor: "skyblue", padding: "5%"}}>Rick and Morty Database
        <Button onClick={fetchCharacter} style={{width: "30%", margin: "2% 0 0 35%"}}>Show Characters</Button>
        </h1>
        {props.characters.map( character => (
        console.log("my chars", character),
        <Item key={character.id} character={character} url={character.url} gender={character.gender}/>
        ))}
        </>
    )
}

const mapStateToProps = state => ({
    characters: state.characters,
    error: state.error, 
    isFetching: state.isFetching
})

export default connect(mapStateToProps,
    { getCharacter })(ItemList)