import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementNumber, incrementNum, deleteNum } from '../../actions/numbersAction'
import { Grid, Button, Typography } from '@material-ui/core'
const NumbersList = (props) => {
    const listNumbers = useSelector((state) => state.numbers)
    const dispatch = useDispatch()
    const handleDecrement = (id) => {
        dispatch(decrementNumber(id))
    }
    const handleIncrement = (id) => {
        dispatch(incrementNum(id))
    }
    const handleDelete = (id) => {
        dispatch(deleteNum(id))
    }
    return (
        <Grid container direction='column' spacing={5} alignItems='center' justifyContent='center' >
            {
                listNumbers.map((num) => {
                    return (
                        <Grid item ms={12} container key={num.id} spacing={2} alignItems='center' justifyContent='center'>
                            <Grid item >
                                <Typography align='center' variant="h5">{num.value}</Typography>
                            </Grid>
                            <Grid item >
                                <Button color='secondary' variant="contained" onClick={() => handleDecrement(num.id)}>-</Button>
                            </Grid>
                            <Grid item>
                                <Button color='secondary' variant="contained" onClick={() => handleIncrement(num.id)}>+</Button>
                            </Grid>
                            <Grid item>
                                <Button color='secondary' variant="contained" onClick={() => handleDelete(num.id)}>*</Button>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
export default NumbersList