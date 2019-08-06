import React from "react"
import { CardContainDiv } from '../StyledComps'
import Card from './Card'
const CardContainer = (props) =>
{
    const { aFollowers, selectedUser } = props
    return (
        <CardContainDiv>
            <Card userData={selectedUser} />
            {aFollowers.map((follower, index) => <Card key={index} userData={follower} />)}
        </CardContainDiv>
    )   
}

export default CardContainer