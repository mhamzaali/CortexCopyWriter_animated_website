import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #4D06C1 30%, #CD02BD 80%)',
      height:'auto',
      paddingTop:'90px',
      paddingBottom:'40px',
    },
    title: {
        marginTop: '-20px',
        fontFamily: 'Montserrat',
        fontSize: '36px',
        fontWeight:'regular', 
        color:'white',
        paddingRight:'105px',
        textAlign:'left',
    },
    subtext: {
      marginTop: '40px',
      marginLeft:'10px',
      fontFamily: 'Montserrat',
      textAlign:'left',
      fontSize: '14px',
      fontWeight:'regular', 
      color:'white',
      paddingRight:'75px',
  },
  list:{
    float:'left',
    marginTop: '20px',
    marginLeft:'10px',
    fontFamily: 'Montserrat',
    textAlign:'left',
    fontSize: '12px',
    fontWeight:'regular', 
    color:'white',
  },
  row:{
    marginBottom:'100px',
  },
    image1:{
      width:'450px',
      height:'auto',
      marginTop:'25px'
    },
  }));

const Second = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Container>
                    <Row className={classes.row}>
                      <Col sm={6}>
                      <img className={classes.image1} src={'https://www.cortexcopywriter.com/img/services/services-6.svg'} alt="pciture1" />
                      </Col>
                      <Col sm={6}>
                        <h6 className={classes.title}>UX Writing</h6>
                        <p  className={classes.subtext}>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                        <ui >
                            <li className={classes.list}>Microcopy </li>
                            <li className={classes.list}>Taxonomy & Labeling</li>
                            <li className={classes.list}>Chatbots</li>
                            <li className={classes.list}>User Research</li>
                            <li className={classes.list}>Content Style Guide</li>
                            <li className={classes.list}>User Testing</li>
                            <li className={classes.list}>Design Principles</li>
                            <li className={classes.list}>Prototype</li>
                        </ui>
                      </Col>
                    </Row>
                    <Row className={classes.row}>
                      <Col sm={6}>
                        <h6 className={classes.title}>Website Copywriting</h6>
                        <p  className={classes.subtext}>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                        <ui >
                            <li className={classes.list}>Information Architecture</li>
                            <li className={classes.list}>Wireframes</li>
                            <li className={classes.list}>Competitor Analysis</li>
                            <li className={classes.list}>On-page SEO</li>
                            <li className={classes.list}>Content Style Guide</li>
                            <li className={classes.list}>USP/UVP</li>
                            <li className={classes.list}>Landing Page</li>
                            <li className={classes.list}>Sales Letter</li>
                        </ui>
                      </Col>
                      <Col sm={6}>
                      <img className={classes.image1} src={'https://www.cortexcopywriter.com/img/services/services-7.svg'} alt="pciture2" />
                      </Col>
                    </Row>
                    <Row className={classes.row}>
                      <Col sm={6}>
                      <img className={classes.image1} src={'https://www.cortexcopywriter.com/img/services/services-5.svg'} alt="pciture3" />
                      </Col>
                      <Col sm={6}>
                        <h6 className={classes.title}>Content Writing</h6>
                        <p  className={classes.subtext}>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
                        <ui >
                            <li className={classes.list}>Headlines & Taglines</li>
                            <li className={classes.list}>Content Strategy</li>
                            <li className={classes.list}>Blogs & Articles</li>
                            <li className={classes.list}>Social Media Content</li>
                            <li className={classes.list}>Video Scripts</li>
                            <li className={classes.list}>eDMs & Newsletters</li>
                            <li className={classes.list}>Case Studies</li>
                            <li className={classes.list}>Whitepapers</li>
                        </ui>
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default Second
