import React, { useState } from 'react';
import Cartao from "../../components/Cartao/Cartao";
import { ContainerListagem, TituloListagem } from "./style";

const predados = [
    {
        'titulo': 'ananais',
        'letra': 'z'
    },
    {
        'titulo': 'banana',
        'letra': 'w'
    },
    {
        'titulo': 'cenoura',
        'letra': 'y'
    },
    {
        'titulo': 'casa',
        'letra': 'a'
    },
    {
        'titulo': 'felpudo',
        'letra': 'k'
    }
]


const Listagem = () => {
    const [dados, setDados] = useState(predados);
    
    const filtrar = (entrada) => {
        const entradaMinuscula = entrada.toLowerCase();
        const resposta = predados.filter(
            (e) => {
                const tituloMinusculo = e.titulo.toLowerCase();
                const letraMinuscula = e.letra.toLowerCase();
                //const titulo = e.titulo.includes(entrada);
                //const letra = e.letra.includes(entrada);
                //return titulo || letra;
                return tituloMinusculo.includes(entradaMinuscula) || letraMinuscula.includes(entradaMinuscula);
            } 
        )
        setDados(resposta);
    }

    return (
        <>
            <TituloListagem>Listagem</TituloListagem>
            <input
                type='text'
                placeholder='Pesquisar por letra'
                onChange={(e) => filtrar(e.target.value)}
            />
            <ContainerListagem>
                {dados.map((el, i) => (
                    <Cartao
                        key={i}
                        titulo={el.titulo}
                        letra={el.letra}
                    />
                ))}
            </ContainerListagem>
        </>
    );
}

export default Listagem;