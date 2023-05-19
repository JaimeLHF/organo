import './Rodape.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Rodape = () => {
    return (
        <div>
            <footer className="footer">
                <section>
                    <ul>
                        <div className='logos'>
                            <li><a href="https://github.com/JaimeLHF" target="_blank">
                                <AiFillGithub size={35} />
                            </a></li>
                            <li><a href="https://www.facebook.com/jaime.hansen.98" target="_blank">
                                <img src="/imgs/fb.png" alt="" />
                            </a></li>
                            <li>
                                <a href="https://www.linkedin.com/in/jaime-luiz-hansen-filho-5214a0168/" target="_blank">
                                    <AiFillLinkedin size={35} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/hansenjaime/" target="_blank">
                                    <img src="/imgs/ig.png" alt="" />
                                </a>
                            </li>
                        </div>
                        <li>
                            <a href="instagram.com" target="_blank">
                                <img src="/imgs/logo.png" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/hansenjaime/" target="_blank">
                                <p>Desenvolvido por Alura & Jaime Hansen</p><p />
                            </a>
                        </li>
                    </ul>
                </section>
            </footer>
        </div>

    )
}

export default Rodape