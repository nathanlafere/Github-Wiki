import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    .remover {
        font-weight: 600;
        text-decoration: none;
        margin-left: 25px;
        color: #ff0000;
        &:hover {
            cursor: pointer;
        }
    }

    a.seeRepo {
        font-weight: 600;
        text-decoration: none;
        color: #1789FC;
    }


    hr {
        color: #FAFAFA60;
        margin: 10px 0;
    }
`