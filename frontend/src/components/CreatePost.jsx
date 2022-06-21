import React from "react";
class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle:"",
            postUsername:"",
            postTextContent:"",
            postDate: ""
        }
    }

    render() {

        const handleTitleChange = (e) => {
            this.setState({postTitle: e.target.value})
        }

        const handleNameChange = (e) => {
            this.setState({postUsername: e.target.value})
        }

        const handleTextContentChange = (e) => {
            this.setState({postTextContent: e.target.value})
        }

        const handleAddPost = (e) => {
            e.preventDefault();
            this.setState({postDate: new Date()})
            var obj = { 'entry_title': this.state.postTitle,
                        'entry_date':this.state.postDate,
                        'entry_user':this.state.postUsername,
                        'entry_text':this.state.postTextContent

            }
            fetch('http://localhost:5001/api/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
    })

    alert('A new post has been submitted!');

        }
        
        return(
            <div className="Form-Container">
                <form onSubmit={handleAddPost} className="Post-Form">
                <label><center>Title:</center></label>
                <input value={this.state.postTitle} type="text" onChange={handleTitleChange} className="Post-Title" maxLength = "100"></input>
                <label><center>Your Name:</center></label>
                <input value={this.state.postUsername} type="text" onChange={handleNameChange} className="Post-UserName" maxLength = "40"></input>
                <label><center>Content:</center></label>
                <textarea value={this.state.postTextContent} type="text" onChange={handleTextContentChange} className="Post-TextContent"></textarea>
                <button className="Post-Submit">Submit</button>
                <br></br>

            </form>
            </div>
            
        )
    }
}









export default CreatePost;