import './Header.css'


const Header = () => {

    return (
        <header className='header'>
            <a className='link' target='blank' href='https://cursos.alura.com.br/vitrinedev/jaimehansenfilho'><img className='avatar_img' src='https://github.com/JaimeLHF.png' /></a>
            <div>
                <h1>Jaime Luiz Hansen Filho</h1>
                <p>Aluno Alura</p>
            </div>
        </header>
    )
}

export default Header;