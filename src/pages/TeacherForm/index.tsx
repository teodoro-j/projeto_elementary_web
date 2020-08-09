import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container" >

            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
                color={'#006975'}
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Banco de Dados', label: 'Banco de Dados' },
                            { value: 'Back-end', label: 'Back-end' },
                            { value: 'Engenharia de Software', label: 'Engenharia de Software' },
                            { value: 'Estrutura de Dados', label: 'Estrutura de Dados' },
                            { value: 'Front-end', label: 'Front-end' },
                            { value: 'Redes', label: 'Redes' },
                            { value: 'Sistemas Operacionais', label: 'Sistemas Operacionais' },
                        ]}
                    />
                    <Input name="cost" label="Custo da hora da sua aula" />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                   <button type="button">
                            + Novo horário
                   </button>
                    </legend>
                </fieldset>

                <div className="schedule-item">
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input name="from" label="Das" type="time"></Input>
                    <Input name="to" label="Até" type="time"></Input>
                </div>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                       Importante! < br />
                       Preencha todos os dados
                   </p>
                    <button type="button">
                        Salvar Cadastro
                   </button>
                </footer>
            </main>
        </div>
    )
};

export default TeacherForm;