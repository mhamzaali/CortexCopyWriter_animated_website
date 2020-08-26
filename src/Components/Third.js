import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #570192 30%, #6E1AAD 80%)',
      height:'auto',
      paddingTop:'40px',
      paddingBottom:'20px',
    },
    title: {
        margin: 0,
        fontFamily: 'Montserrat',
        fontSize: '32px',
        fontWeight:'regular', 
        color:'white',
        paddingLeft:'20px',
        textAlign:'left',
        background: 'linear-gradient(45deg, #570192 30%, #6E1AAD 80%)',
        width:'150px',
        height:'60px',
        paddingTop :'10px',
        marginTop:'10px',
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
  tag: {
    marginTop: '40px',
    fontFamily: 'Montserrat',
    textAlign:'center',
    fontSize: '12px',
    fontWeight:'regular', 
    color:'white',
},
    image:{
      width:'250px',
      height:'auto',
      marginTop:'20px',
      border:'4px solid white',
      borderRadius:'50%'
    },
  }));

const Third = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Container>
                    <Row>
                      <Col sm={6}>
                          <img className={classes.image} src="https://www.svgrepo.com/show/84395/man.svg" alt="face" />
                          <p className={classes.tag}><b>Nathan Mudaliar</b>, the Cortex Copywriter</p>
                      </Col>
                      <Col sm={6}>
                      <h6 className={classes.title}>About</h6>
                      <p className={classes.subtext}>My copywriting and UX writing draws on abilities developed in the psychological sciences.</p>
                      <p className={classes.subtext}>Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.</p>
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default Third
