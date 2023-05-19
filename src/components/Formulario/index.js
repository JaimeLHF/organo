import Input from '../Input'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [status, setStatus] = useState('')
    const [imagem, setImg] = useState('')
    const [time, setTime] = useState('')

    const saveForm = (event) => {
        event.preventDefault()       

        props.colaboradorCadastrado({
            nome,
            status: status,
            imagem,
            time
        })

        setNome('');
        // setStatus('');
        setImg('');
        setTime('');       

    }

    return (
        <section className='formulario'>
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para cadastrar um novo curso</h2>
                <Input obrigatorio={false} label="Curso" placeholder="Digite o curso" valor={nome} evento_input={valor => setNome(valor)} />
                <p>Status</p>
                <div className='status'>
                    <Input
                        type='radio'
                        radio='radio'
                        label="Concluído"
                        valor='Concluído'
                        
                        evento_input={valor => setStatus(valor)}
                    />
                    <Input
                        type='radio'
                        radio='radio'
                        label="Cursando"
                        valor='Cursando'                        
                        evento_input={valor => setStatus(valor)}
                    />
                    <Input
                        type='radio'
                        radio='radio'
                        label="Cancelado"
                        valor='Cancelado'
                       
                        evento_input={valor => setStatus(valor)}
                    />
                </div>
                <Input label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} evento_input={valor => setImg(valor)} />
                <ListaSuspensa obrigatorio={false} label='Área' itens={props.times} valor={time} evento_input={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario