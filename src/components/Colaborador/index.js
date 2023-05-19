import './Colaborador.css'
import { AiFillCheckCircle, AiOutlineBook } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

const Colaborador = (props) => {

    const statusText =
        props.status === 'Concluído' ? <AiFillCheckCircle style={{ color: 'green' }} />
            : props.status === 'Cursando' ? <AiOutlineBook />
                : props.status === 'Cancelado' ? <GiCancel style={{ color: 'red' }} />
                    : '';


    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo, }}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{`${props.status}`} {statusText}</h5>
            </div>
        </div>
    )
}

export default Colaborador;