import styled from "styled-components";

export const InputContainer = styled.div`

    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 45px;
    width: 90%;
    max-width: 460px;

    margin: 20px;
    

    input {
        background: transparent;
        border: 0;

        width: calc(100% - 20px);
        height: 45px;
        padding: 0 10px;
        color: #FFFFFF;
        font-size: 20px;
        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

`