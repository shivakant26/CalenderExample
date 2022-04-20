import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showData } from "../Redux/Action/userAction";

const UserTable = () => {
    const dispactch = useDispatch();
    const list = useSelector((state) => state.userReaducer.data);
    console.log("list", list)

    useEffect(() => {
        dispactch(showData());
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="table-heading">
                            <h2>Employee Table</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="table">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Employee Age</th>
                                    <th>Employee Sallary</th>
                                    <th>Employee City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item,i)=>
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{item.Emp_name}</td>
                                        <td>{item.Emp_age}</td>
                                        <td>{item.Emp_sallary}</td>
                                        <td>{item.Emp_city}</td>
                                    </tr>
                                    )
                                
                                }
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default UserTable;