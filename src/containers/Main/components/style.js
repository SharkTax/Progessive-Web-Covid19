import styled from 'styled-components'
import {Card} from '../../../components'

export const LabelStyled= styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`

export const ValueStyled= styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:400;
    font-size: 2.5rem;

`

export const CardContentStyled = styled(Card)`
    border-left: 8px solid ${({color})=> color || '#5d78ff'};
`
export const CardPanelContentStyled = styled(Card)`
    justify-content: space-between;
    padding: 25px;
`

export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    flex-direction: column;
    color: black;
`
