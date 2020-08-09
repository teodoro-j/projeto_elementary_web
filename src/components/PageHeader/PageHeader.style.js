import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);

    @media (min-width: 700px) {
        height: 340px;
    }
`

export const Topbar = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-base);
    padding: 1.6rem 0;

    @media (min-width: 700px) {
        max-width: 1100px;
    }    
`

export const a =styled.div`
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover{
        opacity: 0.6; 
   }
`

export const Img = styled.img`
    height: 1.6rem;
    color: var(--color-base);
`
//Esta funcionando, quando dixei como strong, perdeu as props
export const Strong = styled.strong`
    max-width: 30rem;
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: var(--color-base);
    margin-top:2.6rem;

    @media (min-width: 700px) {
        max-width: 450px;
    }
`

export const Subtitulo = styled.p`
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-base);
    margin-top:2.6rem;
`

export const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    @media (min-width: 700px) {
        flex: 1;
        max-width: 740px;
        margin: 0 auto;
        padding-bottom: 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`

