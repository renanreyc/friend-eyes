import './styles.css';
import ImgLogin from "../../imgs/Picture4.svg"

export function Login() {
    return (
        <div className='container'>
            <h3>E-mail</h3>
            <input type= "text" placeholder="email@email.com"/>
            <h3>Senha</h3>
            <input type= "text" placeholder="*********"/>

            <button type="button">Entrar</button>

            <img src= {ImgLogin} alt="Login Friend Eye"/>
            
        </div>
    )
}