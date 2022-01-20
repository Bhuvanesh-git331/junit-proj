import React from 'react'
import {useSelector} from 'react-redux'

const Show=()=>{
    const data = useSelector(state => state.count)

    return(
        <h1>state updated-{data}</h1>
    )

}

export default Show