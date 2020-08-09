import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Topbar, Content, Strong, Img, Desc} from './PageHeader.style'

import LogoImg from '../../assets/images/LogoTeste_2.png';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps  {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <Header>
            
                <Topbar>
                    <Link to="/">
                        <Img src={backIcon} alt="voltar"/>
                    </Link>
                    <Img className="logo" src={LogoImg} alt="Elementary" />
                </Topbar>

                <Content>
                    <Strong>{props.title}</Strong>
                    { props.description ? <Desc>{props.description}</Desc>: null}
                    {/* { props.background ? <p>{props.background}</p>: null} */}
                    {props.children}
                </Content>
            </Header>
    );
}

export default PageHeader;