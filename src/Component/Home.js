
import React from "react";
import { Card, Col, Container, Row ,Button} from "react-bootstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <div className="banner">
                            <h2>{this.props.title}</h2>
                        </div>
                    </Col>
                </Row>
                <div className="card-section">
                    <Container>
                        <div className="card-section-heading">
                            <h2>More Than just a tool</h2>
                        </div>
                        <Row>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={require("../assets/images/card_dummy.png")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/card_dummy.png")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/card_dummy.png")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}


export default Home;