import React from "react"

class MenuBar extends React.Component {
    render() {
      return (
      <div className="Menu-Bar">
          <a className="Home-Button" href="/">Home</a>
            <a className="Create-Button"href="/create">Create Post</a>

      </div>
       
      )
      
    }
}

export default MenuBar;