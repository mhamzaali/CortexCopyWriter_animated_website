import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop:'1px',
      paddingBottom:'1px',
      textAlign: 'center',
      background: 'linear-gradient(to right, #4D06C1 , #CD02BD)',
    },
    title: {
        margin: 0,
        paddingTop:'10px',
        paddingBottom:'10px',
        width:'195px',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        background: 'linear-gradient(to right, #fca311, #4988cd, #ffff00 , #02c39a, #e56b6f, #ee82ee)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        display: 'block',
        margin:'0 auto', 
    },
  }));

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h5 className={classes.title}>Switch experience</h5>
        </div>
    )
}

export default Header
