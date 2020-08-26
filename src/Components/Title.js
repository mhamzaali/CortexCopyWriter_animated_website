import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import useWebAnimations from "@wellyshen/use-web-animations";

import Business_Image from './../Images/Business_SVG.svg'
import Brain_Image from './../Images/Intro_Brain.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #4D06C1 30%, #CD02BD 80%)',
      height:'700px',
    },
    title: {
        margin: 0,
        fontFamily: 'Montserrat',
        fontSize: '102px',
        fontWeight:'regular', 
        color:'white',
        paddingTop:'90px',
        paddingRight:'120px',
    },
    title2: {
        marginTop: '-20px',
        fontFamily: 'Montserrat',
        fontSize: '60px',
        fontWeight:'regular', 
        color:'white',
        paddingRight:'105px',
    },
    subtext: {
      marginTop: '40px',
      marginLeft:'10px',
      fontFamily: 'Montserrat',
      textAlign:'left',
      fontSize: '18px',
      fontWeight:'regular', 
      color:'white',
      paddingRight:'75px',
  },
    button:{
        marginTop: '40px',
        marginRight:'80px',
        background: 'linear-gradient(to bottom, #23ffdb, #1b5dbf)',
        borderRadius:'30px',
        paddingTop:'10px',
        paddingBottom:'10px',
        paddingLeft:'40px',
        paddingRight:'40px',
    },
    image:{
      width:'450px',
      height:'auto',
      marginTop:'-150px'
    },
    image_brain:{
      marginTop:'-80px',
      width:'500px',
      height:'auto',
    },
  }));

const Title = () => {

    const classes = useStyles();


    const { ref, playState } = useWebAnimations({
      keyframes: 
      [{transform: 'translateY(0px)'},{transform: 'translateY(90px)'}],
      timing: {
        delay: 500, // Start with a 500ms delay
        duration: 1000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
  
      // More useful options...
    });


    return (
        <div className={classes.root}>
        <Container>
                    <Row>
                      <Col sm={6}>
                      <h5 className={classes.title}>CORTEX</h5>
                      <h6 className={classes.title2}>COPYWRITER</h6>
                      <p className={classes.subtext}>Enhance your communications with psychology-based copywriting and UX writing</p>
                      <Button className={classes.button} variant="primary">Send a message</Button>
                      </Col>
                      <Col sm={6}>
                        <img ref={ref} className={classes.image_brain} src={Brain_Image} alt="brain" />
                        <img className={classes.image} src={Business_Image} alt="business" />
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default Title
