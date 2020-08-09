import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/46379117?s=460&u=7c05e2f6fd1c5d7dc13ac74bf497e272bbaa252f&v=4" alt="Fernanda Caramico" />
                <div>
                    <strong>Fernanda Caramico</strong>
                    <span>Front-end</span>
                </div>
            </header>

            <p>
                Protagonista das melhores novidades das tecnlogoias do Front-end
                <br /><br />
                Desde muito cedo apaixonado por conceitos de UX/UI, se tornou protagonistas
                nas inovações oriúndas de Página Web utilizando seu instinto natural de Design,
                tornando o ambiente muito mais intuitivo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                        Entrar em contato.
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;