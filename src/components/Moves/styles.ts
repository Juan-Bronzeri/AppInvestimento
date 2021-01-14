import styled, { css } from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
  
`;

export const Form = styled.div`
    width: 400px;
    height: 700px;

    padding: 30px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.tertiary};
`;
export const FormTitle = styled.div<ITitleContainerProps>`
    > h1 {
        text-align: center;
        justify-content: center;
        color: ${props => props.theme.colors.white};
        margin-bottom: 40px;
        &::after{
            content: '';
            display: block;
            margin: auto;
            width: 40%;
            border-bottom: 10px solid ${props => props.lineColor};
        }  
    }
`;

export const FormActiveCounter = styled.div`
    width: 100%;
    height: 50%;

    display: relative;

    padding: 10px 20px;
    background-color: transparent;
    > h3 {
        text-align: center;
        margin-top: 20px;
    }
`;

export const NameActive = styled.div`
    margin-bottom: 25px;
    > h1 {
        font-size: 40px;
    }
`;

export const Valuebroker = styled.div`
    display: flex;

    margin-top: 10px;

    > input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        
    }
    > input {
        border-radius: 5px;
        padding-left: 5px;
        margin-left: 10px;
        width: 10%;
}
`;

export const ValueB3 = styled.div`
    display: flex;

    margin-top: 10px;

    > input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        
    }
    > input {
        border-radius: 5px;
        padding-left: 5px;
        margin-left: 10px;
        width: 10%;
    }
`;

export const ValueActive = styled.div`
    display: flex;
    margin-top: 10px;

    > input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        
    }
    > input {
        border-radius: 5px;
        padding-left: 5px;
        margin-left: 10px;
        width: 10%;
}
`;
export const Active = styled.div`
    display: flex;
    margin-top: 10px;

    > input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        
    }
    > input {
        border-radius: 5px;
        padding-left: 5px;
        margin-left: 10px;
        width: 100%;
}
`;

export const CounterActive = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 30px 10px 30px;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    > span {
        justify-content: center;
    }
    > input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        
    }
    > input {
        font-size: 45px;
        text-align: center;
        width: 100%;
        background-color:transparent;
    }
`;

const iconCSS = css`
    color: ${props => props.theme.colors.info};
    width: 30px;
    height: 30px;
`;
export const PlusActive = styled(AiOutlinePlus)`
    ${iconCSS};
`;
export const MinusActive = styled(AiOutlineMinus)`
    ${iconCSS};
`;

export const PlusButton = styled.button`
    background: none;

    transition: opacity .3s;

    &:hover {
       opacity: .7;
    }
`;
export const MinusButton = styled.button`
    background: none;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;