import './Rodape.css'

const Rodape = () => {
    return (
        <div>
            <footer className="footer">
                <section>
                    <ul>
                        <div className='logos'>
                            <li><a href="facebook.com" target="_blank">
                                <img src="/imgs/fb.png" alt="" />
                            </a></li>
                            <li>
                                <a href="twitter.com" target="_blank">
                                    <img src="/imgs/tw.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="instagram.com" target="_blank">
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
                            <a href="instagram.com" target="_blank">
                                <p>Desenvolvido por Alura</p><p />
                            </a>
                        </li>
                    </ul>
                </section>
            </footer>
        </div>

    )
}

export default Rodape