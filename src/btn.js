import React from 'react'
import { increment } from './actions/countActions'
import {useDispatch} from 'react-redux'

const Btn = () => {
    const dispatch = useDispatch()

    return (

        <button onClick={() => dispatch(increment())}>+1 increase</button>
    )

}

export default Btn 