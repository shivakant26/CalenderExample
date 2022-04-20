import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class Footer extends React.Component{

    render(){
        return(
            <div className="footer">
                <Container>
                    <Row>
                        <Col>
                        <div>
                            <div className="footer-logo-style">
                                <h3>Style</h3>
                                <p>Getting dressed with style implicates elegance, and elegance is not a matter of taste it's a moral
                                     quality as well. Elegance comes from the inside. Style doesn't lie. It's a personal construction,
                                      the expression of our deep desire and taste.</p>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="office">
                            <strong>Office</strong>
                            <p>office no 117,<br/> 
                           Opposite Pransant Hotel,<br />
                            Saver Road,<br />
                            inodre,</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="Link">
                            <strong>Links</strong>Links
                            <p>Link 1</p>
                            <p>Link 2</p>
                            <p>Link 3</p>
                            <p>Link 4</p>
                        </div>
                        </Col>
                        <Col>
                        Column 4
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Footer;