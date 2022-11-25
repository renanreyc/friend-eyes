import './styles.css';
import Img from "../../imgs/world.png"

export function Home() {
    return (
        <div className='containerHome'>
            
            <img src= {Img} alt="Início Friend Eye"/>
            <h1>João</h1>
            <h3>membro desde 19/04/2022</h3>
            <h4>Você irá receber uma notificação quando alguém precisar de sua ajuda.</h4>
            <button type="button">Saiba como atender uma chamada</button>
        </div>
        
    )
}