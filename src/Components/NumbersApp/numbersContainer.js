import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumbersList from './numbersList'
import NumbersControl from './numbersControl'
import AddNumber from './addNumber'
import { Grid, Typography } from '@material-ui/core'
const NumbersContainer = (props) => {
    const numbers = useSelector((state) => state.numbers)
    const findSum = () => {
        let sum = 0
        numbers.forEach((num) => {
            sum = sum + num.value
        })
        return sum
    }
    return (
        <Grid container direction='column' spacing={5} justifyContent='center' alignItems='center' >
            <Grid item >
                <Typography variant="h3">Listing-{numbers.length}  , sum-{findSum()}</Typography>
            </Grid>
            <Grid item>
                <NumbersList />
            </Grid>
            <Grid item>
                <NumbersControl />
            </Grid>
            <Grid item>
                <AddNumber />
            </Grid>
        </Grid>
    )
}
export default NumbersContainer