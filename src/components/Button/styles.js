import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 40px;
    width: 50%;
    max-width: 400px;

    margin: 8px;

    &:hover {
        background-color: #FAFAFA60;
        cursor: pointer;
    }
    &:active {
        background-color: #FAFAFA40;
        cursor: pointer;
    }
`