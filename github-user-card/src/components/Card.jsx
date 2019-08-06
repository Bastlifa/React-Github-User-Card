import React from "react"
import { CardDiv } from '../StyledComps'
const Card = (props) =>
{
    console.log("userData", props.userData)
    const { login, name, followers, location, html_url, following } = props.userData
    return (
        <CardDiv>
            <p>Username: {login}</p>
            <p>{name ? `Name: ${name}` : null}</p>
            <p>Location: {location}</p>
            <a href={html_url} target="_blank" rel="noopener noreferrer">Profile Link</a>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
        </CardDiv>
    )   
}

export default Card