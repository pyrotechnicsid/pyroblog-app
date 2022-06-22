import React from "react";
import BlogEntries from "./BlogEntries";
import { Link } from "react-router-dom";

class Entry extends React.Component {

render () {
    var elem = this.props.viewPostData; 
    return (
        <div className="Entry-Container">
                {this.props.viewPostData.map((elem) => {
                    return (
                    <div className="Post-Element">
                    <center><h3 key="{elem.entry_id}">{elem.entry_title}</h3></center>
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

export default Entry;