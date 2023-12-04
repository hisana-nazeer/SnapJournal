import React from 'react'
import { Container, AppBar, Typography, Grow,Grid} from '@material-ui/core';
import memories from './images/memories.jpeg'
import Posts from './components/Posts/Posts';
import Forms from './components/Forms/Forms'
import useStyles from './style'
// useStyles is a custom hook

//This function returns a hook, which is conventionally named useStyles.

//classes: By invoking the useStyles hook, you get an object where each property corresponds to a CSS class name. Y

const App = () => {
    const classes = useStyles()
    return (
        <Container maxWidth ='lg'>
            <AppBar className= {classes.appBar} position ="static" color = 'inherit'>
                <Typography className={classes.heading} variant ='h2' align ='center' >Snap Journal</Typography>
                <img className={classes.image} src={memories} alt="memories" height='60' />

            </AppBar>
            <Grow in>
                <Container>
                <Grid container justifyContent= "space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                       <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Forms />
                    </Grid>
                    
                    
                </Grid>
                </Container>

             </Grow>

        </Container>
    )
  };
  export default App;