import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Topbar, Content, Strong, Img, Subtitulo} from './PageHeader.style';

import LogoImg from '../../assets/images/LogoTeste_2.png';
import backIcon from '../../assets/images/icons/back.svg';


// import './syles.css'

interface PageHeaderProps  {
    title: string;
    description?: string;
    color: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <Header color={props.color}>
            
                <Topbar>
                    <Link to="/">
                        <Img src={backIcon} alt="voltar"/>
                    </Link>
                    <Img className="logo" src={LogoImg} alt="Elementary" />
                </Topbar>

                <Content>
                    <Strong>{props.title}</Strong>
                    { props.description ? <Subtitulo>{props.description}</Subtitulo>: null}
                    {props.children}
                </Content>
            </Header>
    );
}

export default PageHeader;