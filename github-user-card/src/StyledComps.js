import styled from "styled-components"

export const CardDiv = styled.div`
    width: 200px;
    /* height: 400px; */
    border: 5px solid green;
    border-radius: 10px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const CardContainDiv = styled.div`
    margin: 20px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;

export const AppContainDiv = styled.div`
    background: grey;
`;