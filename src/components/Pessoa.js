import styles from './Pessoa.module.css'

function Pessoa({nome, idade, profissao, foto}) {
    return(
        <div className={styles.Container}>
            <img src={foto} alt={nome}></img>
            <h2 className={styles.Content}>Nome: {nome}</h2>
            <p className={styles.Content}>Idade: {idade} anos</p>
            <p className={styles.Content}>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa