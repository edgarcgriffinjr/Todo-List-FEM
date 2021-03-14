import styled from 'styled-components'

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    font-size: var(--fs-small);
    color: ${({ theme }) => theme.text};
    a {
        color: var(--c-blue);
        text-decoration: none;
        &:nth-child(1) {
            margin-right: 1rem;
        }
    }

`;