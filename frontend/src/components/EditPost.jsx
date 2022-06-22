import React from "react";
import BlogEntries from "./BlogEntries";

class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitleE: this.props.editPostEntries.entry_title,
            postUsernameE: "",
            postIdE: "",
            postTextContentE: "",
    }
    }



    render() {
        // console.log(this.props.editPostEntries)
        
        const handleTitleChange = (e) => {
            this.setState({postTitle: e.target.value})
        }

        const handleNameChange = (e) => {
            this.setState({postUsername: e.target.value})
        }

        const handleTextContentChange = (e) => {
            this.setState({postTextContent: e.target.value})
        }

        const handleEditPost = (e) => {
            e.preventDefault();
            var obj = { 'entry_title':this.state.postTitleE,
                        'entry_date':this.state.postDateE,
                        'entry_user':this.state.postUsernameE,
                        'entry_text':this.state.postTextContentE,
                        'entry_id': this.state.postIdE

            }
            fetch(`http://localhost:5001/api/edit/${obj.entry_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
    })

    alert('Post has been edited!');

        }
        
        return(
            <div className="Form-Container">
                <form onSubmit={handleEditPost} className="Post-Form">
                <label><center>Title:</center></label>
                <input value={this.state.postTitleE} type="text" onChange={handleTitleChange} className="Post-Title" maxLength = "100"></input>
                <label><center>Your Name:</center></label>
                <input value={this.state.postUsernameE} type="text" onChange={handleNameChange} className="Post-UserName" maxLength = "40"></input>
                <label><center>Content:</center></label>
                <textarea value={this.state.postTextContentE} type="text" onChange={handleTextContentChange} className="Post-TextContent"></textarea>
                <button className="Post-Submit">Edit</button>
                <br></br>

            </form>
            </div>
            
        )
    }
}

export default EditPost;