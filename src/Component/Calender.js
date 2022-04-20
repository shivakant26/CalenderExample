import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import moment from 'moment';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import "@fullcalendar/core/main.css";  
import "@fullcalendar/daygrid/main.css";

const events = [{ title: "Today", date: new Date() }];
const Calender = (props) => {



    return (
        <div>
            <Row>
                <Col>
                    <div className="banner">
                        <h2>{props.title}</h2>
                    </div>
                </Col>
            </Row>
            <div className="container">
                <div className="row title" style={{ marginTop: "20px" }} >
                    <div class="col-sm-12 btn btn-info">
                        FullCalendar In React Application
                    </div>
                </div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={events}
                />
            </div>
        </div>
    )
}

export default Calender;