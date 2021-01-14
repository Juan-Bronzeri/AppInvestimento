import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
`;