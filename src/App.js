import React from 'react'
import NumbersContainer from './Components/NumbersApp/numbersContainer'
import { Grid, Typography } from '@material-ui/core'
import AppBar from '@mui/material/AppBar';
import './index.css'
function App(props) {
  return (
    <Grid container direction='column' alignItems='center' spacing={10} >
      <Grid item >
        <AppBar >
          <Typography style={{textAlign:'center'}}variant="h2">Random Number Generator</Typography>
        </AppBar>
      </Grid>
      <Grid item >
        <NumbersContainer />
      </Grid>
    </Grid>
  )
}
export default App;
// import Btn from './btn';
// import Show from './show';
// function App() {
//   const count=useSelector((state)=>{
//     return state.count
//   })
//   const dispatch=useDispatch()
//   return (
//     <div>
//       <h1>Random Number Generator</h1>
//      <h2>count-{count}</h2>
//      <Show />
//      <button onClick={()=>dispatch(increment())}>+1</button>
//      <Btn />
//     </div>
//   );
// }
// export default App;
