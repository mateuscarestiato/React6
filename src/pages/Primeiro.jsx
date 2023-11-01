import { Link } from "react-router-dom";
import LinkGenerico from "../components/LinkGenerico/LinkGenerico";
import LinkSegundo from "../components/LinkSegundo";


const Primeiro = () => {
    const dados = [
        ["https://www.ibmec.br/", "ibmec"],

        ["https://estude.ibmec.br/ibmec-hubs", "ibmec-hubs"],

        ["https://botafogo.com.br/", "botafogo"]
    ];

    const links = dados.map( (ele, i) => (
        <LinkGenerico
            key={i} 
            texto={ele[1]}
            endereco={ele[0]}
        />
    ))

 return (<div>
            <h5>mini título</h5>
            <p>Meu texto</p>
            {links}
            <Link to="listagem">Listagem</Link>
        </div>);
};

export default Primeiro;