import styled from 'styled-components'

export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`;
export const StyledDiv = styled.div`
    width: 33.75rem;
    background: ${({ theme }) => theme.box};
    border-radius: .5rem;
`;
export const StyledBottomDiv = styled.div`
    font-size: var(--fs-small);
    color: ${({ theme }) => theme.text2};
    
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem 0 1rem;

    span:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.text};
    }
    > div  {
        > span {
            margin-right: .5rem;
        }
    }
`;
export const StyledList = styled.ul`
    list-style: none;
`;
export const StyledListItem = styled.li`
    width: 100%;
    height: 3rem;
    font-size: var(--fs-medium);
    font-weight: var(--fw-small);
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.line};

    > div {
        display: flex;
    }

    svg:nth-child(2) {
        display: none;
    }

    &:hover {
        svg:nth-child(2) {
            display: inherit;
            cursor: pointer;
        }
    }

    .completeText {
        text-decoration: line-through;
        color: ${({ theme }) => theme.text2};
    }

    .incomplete {
        svg {
            display: none;
        }

        height: 18px; 
        width: 18px;
        border-radius: 50%;
        border: 1.5px solid ${({ theme }) => theme.text2};
        margin-right: 1rem;

        &:hover {
            cursor: pointer;
            border: radius: 50;
            border: 1.5px solid;
            border-image: var(--c-lin-color) 1;
        }
    }

    .complete {
        svg {
            path {
               stroke: white; 
            }
        }

        display: flex;
        align-items: center;
        justify-content: center;
        height: 18px; 
        width: 18px;
        border-radius: 50%;
        border: none;
        margin-right: 1rem;
        background: var(--c-lin-color);

        &:hover {
            cursor: pointer;
        }
    }

`;
