import React from "react";



const Dashboard = () =>{
    const Logout = () =>{
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    return(
        <div>
            <h1>Welcome to dashboard</h1>
            <a href="#" onClick={Logout}>Logout</a>
        </div>
    )
}

export default Dashboard;