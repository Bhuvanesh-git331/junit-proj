import React, {useState} from 'react'
import {useDispatch } from 'react-redux'
import { addNumber } from '../../actions/numbersAction'
import TextField from '@mui/material/TextField';

const AddNumber=(props)=>{
    const [number, setNumber]=useState('')
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        setNumber(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        const num={
            id:Number(new Date()),
            value: Number(number)
        }
        dispatch(addNumber(num))
        setNumber('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField id="filled-basic" autoFocus={true} value={number} margin='dense' color='primary' variant="outlined"  onChange={handleChange} label='Input The Value'/>
        </form>
    )
}

export default AddNumber
