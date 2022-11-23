import ImgWelcome from "../../imgs/Picture2.svg"

import './styles.css';

const Welcome = () => {
    return(
        <div id ="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button>Iniciar</button>
            <img src= {ImgWelcome} alt="Início Friend Eye"/>
        </div>
        
    )
}

export default Welcome

