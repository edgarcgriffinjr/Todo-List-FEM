import React from 'react'

import { taskList } from '../static/tasks'
import { ReactComponent as Cross } from '../images/icon-cross.svg'
import { ReactComponent as Check } from '../images/icon-check.svg'
import {
    StyledSection, StyledDiv, StyledBottomDiv,
    StyledList, StyledListItem
} from '../styles/listStyles'


var filteredList = taskList

// clears all completed tasks
const clearCompleted = () => {
    taskList.map((item, index) => {
        if (item.isComplete === true)
            taskList.splice(index, 1)
        return 0
    })
    console.log(taskList)
}

// deletes selected item
const deleteItem = (key) => {
    taskList.splice(key, 1)
    console.log(taskList)
}

// marks selected item complete
const toggleComplete = (key) => {
    taskList[key].isComplete = !taskList[key].isComplete
    console.log(taskList)
}

// filters all tasks in array
const showAll = () => {
    filteredList = taskList
    console.log(filteredList)
}

// filters all incomplete tasks in array
const showActive = () => {
    filteredList = taskList.filter(item => item.isComplete === false)
    console.log(filteredList)
}

// filters all complete tasks in array
const showCompleted = () => {
    filteredList = taskList.filter(item => item.isComplete === true)
    console.log(filteredList)
}

const List = () => {
    return (
        <StyledSection>
            <StyledDiv>
                <StyledList>
                    {filteredList.map((item, index) => {
                        return (
                            <StyledListItem key={index}>
                                <div>
                                    <div
                                        className={taskList[index].isComplete ? 'complete' : 'incomplete'}
                                        onClick={() => toggleComplete(index)}
                                    > <Check /></div>
                                    <span
                                        className={taskList[index].isComplete ? 'completeText' : ''}>{item.text} </span>
                                </div>
                                <Cross onClick={() => deleteItem(index)} />
                            </StyledListItem>
                        )
                    })}
                </StyledList>
                <StyledBottomDiv>
                    <span> {taskList.length} items left </span>
                    <div>
                        <span onClick={showAll}> All </span>
                        <span onClick={showActive}> Active </span>
                        <span onClick={showCompleted}> Completed</span>
                    </div>
                    <span onClick={clearCompleted}> Clear Completed</span>
                </StyledBottomDiv>
            </StyledDiv>

        </StyledSection>

    );
}

export default List;