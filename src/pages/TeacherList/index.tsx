import React from 'react';
// import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Professores disponíveis." color={'#542058'}>
                <form id="search-teachers">
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
                    <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-feira'},
                        { value: '2', label: 'Terça-feira'},
                        { value: '3', label: 'Quarta-feira'},
                        { value: '4', label: 'Quinta-feira'},
                        { value: '5', label: 'Sexta-feira'},
                        { value: '6', label: 'Sábado'},
                    ]}
                    />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
};

export default TeacherList;