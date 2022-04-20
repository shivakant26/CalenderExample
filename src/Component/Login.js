
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../Redux/Action/userAction";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[ AdminUsername , setAdminUsername ] = useState();
    const[ AdminPassword , setAdminPassword ] = useState();

    const login = () =>{
        const logindata = {AdminUsername,AdminPassword}
        dispatch(adminLogin(logindata))
        const token = localStorage.getItem("token");
        if(token){
            alert("login successfully")
            navigate("/dashboard")
        }else{
            alert("Invalid credential")
            navigate("/login")
        }
        
        
    }
    return (
        <div className="center">
            <Container>
                <Row>
                    <Col>
                        <div className="page-heading center">
                            <h2 style={{ "padding": "20px 0px" }}> Admin Login</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <div className="field">
                                <input type="text"
                                    placeholder="User_name"
                                    onChange={(e) => setAdminUsername(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input type="text"
                                    placeholder="Password"
                                    onChange={(e) => setAdminPassword(e.target.value)}
                                />
                            </div>
                            <div className="field ">
                                <Button variant="success" onClick={login} >Login</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}

export default Login;