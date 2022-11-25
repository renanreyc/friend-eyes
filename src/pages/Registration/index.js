import './styles.css';

export function Registration() {
    return (
        <div className='container'>
            <h1>Queremos saber um pouco mais sobre você. Preencha os dados abaixo:</h1>
            <h3>Nome</h3>
            <input type= "text" placeholder="Digite o nome..."/>
            <h3>E-mail</h3>
            <input type= "text" placeholder="email@email.com"/>
            <h3>Telefone</h3>
            <input type= "text" placeholder="(00)00000-0000"/>
            <h3>Endereço</h3>
            <input type= "text" placeholder="ex.: Vila do chaves, número 0"/>
            
            <button type="button">Eu preciso de assistência visual</button>
            <button type="button">Eu gostaria de ser voluntário</button>
            
        </div>
    )
}