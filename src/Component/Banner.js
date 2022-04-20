import { render } from "@testing-library/react";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
    render(
        <div>
            <Row>
                <Col md={12}>
                    <div className="banner">
                        <h2>Banner</h2>    
                    </div>
                </Col>
            </Row>
        </div>
    )
}   

export default Banner;