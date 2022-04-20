import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";

class Header extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col md={4}>
                        <div className="logo">
                            <h5><span>Employee</span> Management system</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="menu">
                            <Menu />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Header;