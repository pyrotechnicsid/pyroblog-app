import React from "react";
import BlogEntries from "./BlogEntries";
import { Link } from "react-router-dom";

class UserEntries extends React.Component {

render () {
    var element = this.props.viewUserEntries; 
    return (
        <div className="Entry-Container">
            <h1>Selected User's Posts:</h1>
                {this.props.viewUserEntries.map((elem) => {
                    return (
                    <div className="Post-Element">
                    <h3 key="{elem.entry_id}">{elem.entry_title}</h3>
                    <p><b>Author: </b>{elem.entry_user}</p>
                    <p><b>Date: </b>{elem.entry_date}</p>
                    <p>{elem.entry_text}</p>
                    <center><Link to='/' className="EntryBackButton">Back</Link></center>
                    <br></br>
                    </div>
                    )
                })}
            </div>  
    )
    }}

export default UserEntries;