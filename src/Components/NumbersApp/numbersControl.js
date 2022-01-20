import React from 'react'
import { addNumber, addPlusTwo, removeAll } from '../../actions/numbersAction'
import { useDispatch } from 'react-redux'
import { Grid, Button } from '@material-ui/core'
const NumbersControl = (props) => {
    const dispatch = useDispatch()
    const generateNum = () => {
        const randomNum = Math.round(Math.random() * 100)
        const num = {
            id: Number(new Date()),
            value: randomNum
        }
        dispatch(addNumber(num))
    }
    const handlePlusTwo = () => {
        dispatch(addPlusTwo())
    }
    const handleRemoveAll = () => {
        dispatch(removeAll())
    }
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Button color='primary' variant='contained' onClick={generateNum}>Generate</Button>
            </Grid>
            <Grid item>'
           <Button color='primary' variant='contained' onClick={handlePlusTwo}>+2</Button>
            </Grid>
            <Grid item>
                <Button color='primary' variant='contained' onClick={handleRemoveAll}>Remove All</Button>
            </Grid>
        </Grid>
    )
}
export default NumbersControl