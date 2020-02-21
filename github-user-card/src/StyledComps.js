import styled from "styled-components"

export const CardDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    width: 300px;
    /* height: 400px; */
    border: 5px solid green;
    border-radius: 10px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: bold;
    p
    {
        margin: 10px auto;
    }
    a
    {
        margin: 10px auto;
        text-decoration: none;
        color: skyblue;
    }
    img
    {
        width: 150px;
        height: 150px;
    }
`;

export const CardContainDiv = styled.div`
    padding-top: 20px;
    margin: 0px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    
    
`;

export const AppContainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: grey;
    min-height: 100%;
    margin: 0;
`;

export const StyledForm = styled.form`
    padding-top: 20px;
    input
    {
        font-size: 2rem;
        border-radius: 6px;
        text-align: center;
    }
`;