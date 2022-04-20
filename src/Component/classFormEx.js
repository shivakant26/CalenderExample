import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setData } from "../Redux/Action/userAction";

const ClassFormEx = (props) =>{
    const dispactch = useDispatch();
    const[Emp_name , setEmployeeName] = useState();
    const[Emp_age , setEmployeeAge] = useState();
    const[Emp_sallary , setEmployeeSallary] = useState();
    const[Emp_city , setEmployeeCity] = useState();

    const AddRecord = () =>{
        let data = {Emp_name,Emp_age,Emp_sallary,Emp_city}
        dispactch(setData(data))
        console.log("data",data)
    }
    return(
        <div>
            <Row>
                    <Col>
                        <div className="banner">
                            <h2>{props.title}</h2>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <div className="form center">
                                <div className="form-heading center">
                                    <h2>Employee AddForm</h2>
                                </div>
                                <div className="form-section">
                                    <form>
                                        <div className="field">
                                            <input type="text"
                                             placeholder="Enter_Emp_name"
                                             onChange={(e)=>setEmployeeName(e.target.value)}
                                             />
                                        </div>
                                        <div className="field">
                                            <input type="text"
                                             placeholder="Enter_Emp_Age"
                                             onChange={(e)=>setEmployeeAge(e.target.value)}
                                             />
                                        </div>
                                        <div className="field">
                                            <input type="text" 
                                            placeholder="Enter_Emp_Sallery"
                                            onChange={(e)=>setEmployeeSallary(e.target.value)}
                                            />
                                        </div>
                                        <div className="field">
                                            <input type="text" 
                                            placeholder="Enter_Emp_city"
                                            onChange={(e)=>setEmployeeCity(e.target.value)}
                                            />
                                        </div>
                                        <div className="field">
                                            <Button variant="success" onClick={AddRecord} >Submit</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default ClassFormEx;