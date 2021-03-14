import React from 'react';

import { ReactComponent as Plus } from '../images/icon-plus.svg'
import { taskList } from '../static/tasks'
import { StyledSection, StyledDiv, StyledInput, StyledButton } from '../styles/addStyles'

// adds item to array
const addItem = () => {
    if (document.getElementById('text').value !== '')
        taskList.unshift({text: document.getElementById('text').value, isComplete: false})
    document.getElementById('text').value = ''
    console.log(taskList)
}

const Add = () => {
    return ( 
        <StyledSection>
            <StyledDiv> 
                <StyledButton type='submit' onClick = { addItem }>
                    <Plus/>
                </StyledButton>
                <StyledInput type="text" id='text' placeholder='Create a new todo'/>
            </StyledDiv>
        </StyledSection>
    );
}
 
export default Add;