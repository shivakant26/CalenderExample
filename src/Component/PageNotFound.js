import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotFound = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },3000)

    },[])
    return(
        <div>
            <Row>
                    <Col>
                        <div className="banner">
                            <h2>404 PageNotFound Component</h2>
                            <p className="center" style={{"color":"red"}}>Please Wait Page Redirect in 3 second ....</p>
                        </div>
                    </Col>
                </Row>
            {/* <h1>404 PageNotFound Component</h1> */}
        </div>
    )
}
export default PageNotFound;