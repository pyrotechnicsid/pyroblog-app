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
            fetch(`http://localhost:5001/api/posts/${e.target.id}`) 
            .then((res) => res.json())
            .then((data) => {this.props.addEditPosts(data)})
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
                    <center><h3 key="{elem.entry_id}">{elem.entry_title}</h3></center>
                    <p><b>Author:</b> <Link to='/userentries' onClick={handleViewUser} id={elem.entry_user}>{elem.entry_user}</Link></p>
                    <p><b>Date: </b>{elem.entry_date}</p>
                    <p>{elem.entry_text}</p>
                    <center><Link to='/entry' className="View-Button" onClick={handleViewPost} id={elem.entry_id}>Read More</Link></center>
                    <Link to='/editpost' onClick={handleEditPost} id={elem.entry_id} className="Edit-Button">Edit</Link>
                    <button onClick={handleDeletePost} id={elem.entry_id} className="Delete-Button">Delete</button>
                    <br></br>
                    </div>
                    
                    )
                })}
            </div>    
        )

    }
}

export default BlogEntries;