import React from "react";
import Entry from "./Entry";
import { Link } from "react-router-dom";

class BlogEntries extends React.Component {
     render () {

        const handleDeletePost = (e)=> {

            fetch(`http://localhost:5001/api/posts/${e.target.id}`,{
                method: 'DELETE'
            })
            alert("Post Deleted!");
        }

        const handleViewPost = (e) => {
            
            fetch(`http://localhost:5001/api/posts/${e.target.id}`) 
            .then((res) => res.json())
            .then((data) => {this.props.addViewPost(data)
         });
        
      };
        const handleEditPost = (e) => {
            console.log(e.target.id)
        }

        const handleViewUser =(e) => {
            fetch(`http://localhost:5001/api/userentries/${e.target.id}`) 
            .then((res) => res.json())
            .then((data) => {this.props.addUserEntries(data)
         });
        }

        return (
            <div className="Entry-Container">
                {this.props.BlogEntriesData.map((elem) => {
                    return (
                    <div className="Post-Element">
                    <h3 key="{elem.entry_id}">{elem.entry_title}</h3>
                    <p><b>Author:</b> <Link to='/userentries' onClick={handleViewUser} id={elem.entry_user}>{elem.entry_user}</Link></p>
                    <p><b>Date: </b>{elem.entry_date}</p>
                    <p>{elem.entry_text}</p>
                    <center><Link to='/entry' className="View-Button" onClick={handleViewPost} id={elem.entry_id}>Read More</Link></center>
                    <button onClick={handleEditPost} id={elem.entry_id}>Edit</button>
                    <button onClick={handleDeletePost} id={elem.entry_id}>Delete</button>
                    <br></br>
                    </div>
                    
                    )
                })}
            </div>    
        )

    }
}

export default BlogEntries;