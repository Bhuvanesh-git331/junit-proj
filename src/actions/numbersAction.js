export const addNumber=(num)=>{

    return {
        type:'ADD_NUMBER',
        payload:num
    }
}

export const addPlusTwo=()=>{

    return {
        type: 'PLUS_TWO'
    }
}

export const removeAll=()=>{
    return {
        type: 'REMOVE_ALL'
    }
}

export const decrementNumber=(id)=>{
    return {
        type: 'DECREMENT_NUM',
        payload:id
    }
}

export const incrementNum=(id)=>{
    return {
        type: 'INCREMENT_NUM',
        payload: id
    }
}

export const deleteNum=(id)=>{
    return {
        type: 'DELETE_NUM',
        payload: id
    }
}
