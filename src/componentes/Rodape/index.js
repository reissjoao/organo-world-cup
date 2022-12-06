import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Logo Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="Logo Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="Logo Instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo-brasil.png' alt='Logo Brasil' />
            </section>
            <section>
                <p>
                    Desenvolvimento por Alura
                </p>
            </section>
        </footer>
    )
}

export default Rodape;