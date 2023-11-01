import { styled } from "styled-components";

const ContainerCartao = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    min-width: 100px;
    align-items: center;

    p{
        text-align: center;
        font-weight: bolder;
    }
`;

const Titulo = styled.h3`
    color: forestgreen;
`

export {ContainerCartao, Titulo}