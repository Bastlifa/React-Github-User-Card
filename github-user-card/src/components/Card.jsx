import React from "react"
import { CardDiv } from '../StyledComps'
const Card = (props) =>
{
    const { login, name, followers, location, html_url, following, avatar_url } = props.userData
    return (
        <CardDiv>
            <p>Username: {login}</p>
            {name ? <p>{`Name: ${name}`}</p> : null}
            <img src={avatar_url} alt={"avatar"} />
            {location ? <p>{`Location: ${location}`}</p> : null}
            <a href={html_url} target="_blank" rel="noopener noreferrer">Profile Link</a>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
        </CardDiv>
    )   
}

export default Card