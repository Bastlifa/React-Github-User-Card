import React from "react"
import { StyledForm } from '../StyledComps'

const Form = (props) =>
{
    const { handleText, currentText, handleSubmit } = props
    return (
        <StyledForm onSubmit={handleSubmit}>
            <input type="text" onChange={handleText} value={currentText} placeholder="GitHub Username"/>
        </StyledForm>
    )
}

export default Form