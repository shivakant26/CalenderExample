
import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/dashboard";
import Calender from "./Calender";
import ClassFormEx from "./classFormEx";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import ReactCalender from "./reactCalender";
import UserTable from "./userTable";

const Routing = () =>{
    return(
        <>
        <div className='header'>
                <Container>
                  <Header />
                </Container>
              </div>
           <Routes>
            
                <Route path="/" exact={true} element={<Home title="Home Page"/>}/>
                <Route path="/classformex" exact={true} element={<ClassFormEx title="ClassFormEx Page"/>}/>
                <Route path="/usertable" exact={true} element={<UserTable title="UserTable Page"/>}/>
                <Route path="/login" exact={true} element={<Login title="UserTable Page"/>}/>
                <Route path="/calender" exact={true} element={<Calender title="Calender Page"/>}/>
                <Route path="/reactcalender" exact={true} element={<ReactCalender title="ReactCalender Page"/>}/>
                <Route path="/dashboard" exact={true} element={<Dashboard title="UserTable Page"/>}/>
                <Route path="*" exact={true} element={<PageNotFound />}/>
            </Routes> 
        </>
    )
}

export default Routing;