import styled from 'styled-components'

export const StyledSection = styled.section`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const StyledDiv = styled.div `
    width: 33.75rem;
    background-color: ${({ theme }) => theme.box};
    height: 4rem;
    border-radius: .25rem;
    display: flex;
    justify-content: start;
    align-content: center;
`;

export const StyledInput = styled.input`
    font-size: var(--fs-medium);
    font-weight: var(--fw-small);
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    border: none;
    margin-left: 1rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.text2};
    }
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    margin-left: 1rem;
    svg {
        fill: ${({ theme }) => theme.text};
    }
    &:hover {
        cursor: pointer;
    }
`;