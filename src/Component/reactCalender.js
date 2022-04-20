import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import DatePicker from 'react-date-picker';
import moment from "moment";

const ReactCalender = (props) => {
    const [state, setState] = useState({
        fromDate: '',
        toDate: "",
        year: "",
        month: "",
        total_days: ""
    });

    // var year, remaining_Days, month, total_days;
    const Diffrence = () => {

        var remaining_Days;
        var diff_days = moment(state.toDate).diff(state.fromDate, 'days');
        if (diff_days < 365) {
            state.month = Math.floor(diff_days / 30);
            setState({ ...state, month: state?.month })
            diff_days = diff_days - (state?.month * 30)
            if (diff_days < 30) {
                state.total_days = diff_days = diff_days - (state.month * 30);
                setState({ ...state, total_days: state.total_days })
            }
        }
        if (diff_days >= 365) {
            state.year = Math.floor(diff_days / 365);
            setState({...state,year:state.year})
            remaining_Days = diff_days - (state.year * 365);
            if (remaining_Days >= 30) {
                state.month = Math.floor(remaining_Days / 30);
                setState({ ...state, month: state.month })
                state.total_days = remaining_Days - (state.month * 30)
                setState({...state,total_days:state.total_days})
            }
        }
        console.log("Year", state.year ? state.year : 0);
        console.log("month", state.month ? state.month : 0);
        console.log("Days", state.total_days ? state.total_days : 0);
        console.log("remaining days", remaining_Days ? remaining_Days : 0);
        console.log("total days", diff_days);

    }
    return (

        <div>
            <Row>
                <Col>
                    <div className="banner">
                        <h2>{props.title}</h2>
                    </div>
                </Col>
            </Row>
            <Container>
                <div className="dateSection">
                    <h2>React Calender Component</h2>
                    <div className="apply_leave">
                        <Row>
                            <div class="fromdate left">
                                <div className="form-date-lable">
                                    <label>From:</label>
                                </div>
                                <DatePicker
                                    onChange={(date) => setState({ ...state, fromDate: date })}
                                    value={state.fromDate}
                                    minDate={moment().toDate()}
                                />
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <div class="fromdate left">
                                    <div className="form-date-lable">
                                        <label>To:</label>
                                    </div>
                                    <DatePicker
                                        onChange={(date) => setState({ ...state, toDate: date })}
                                        value={state.toDate}
                                        minDate={state.fromDate}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="leave_button left">
                                <Button variant="danger" onClick={Diffrence}>Difference</Button>
                            </div>

                        </Row>

                    </div>
                    <Row>
                        <div className="date-show">
                            <h3>Year : <span className="year">{state.year ? state.year : 0}</span>,
                                Month : <span className="month">{state.month ? state.month : 0}</span>,
                                Days : <sapn className="days">{state.total_days ? state.total_days : 0}</sapn>
                            </h3>
                        </div>

                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default ReactCalender;