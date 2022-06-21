import './App.css';
import React from 'react';
import BlogEntries from './components/BlogEntries';
import Entry from './components/Entry';
import AppTitle from './components/AppTitle'
import Menubar from './components/MenuBar'
import CreatePost from './components/CreatePost';
import UserEntries from './components/UserEntries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BlogEntriesData: [],
      viewPostData: [],
      viewUserEntries: []
    }

  }



  componentDidMount() {

    fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          BlogEntriesData: data
        });
      });
  }



  render() {
    const addViewPost = (data) => {
      {
        this.setState({
          viewPostData: data
        })
      }
      }

      const addUserEntries = (data) => {
        {
          this.setState({
            viewUserEntries: data
          })
        }
        }

      return (
        <Router>
          <AppTitle />
          <Menubar />
          <Routes>
            <Route exact path="/" element={
              <>
                <BlogEntries BlogEntriesData={this.state.BlogEntriesData} addViewPost={addViewPost} addUserEntries={addUserEntries} />
              </>
            }>
            </Route>
            <Route exact path="/create" element={
              <>
                <CreatePost />
              </>
            }>

            </Route>
            <Route exact path="/entry" element={
              <>
                <Entry viewPostData={this.state.viewPostData}/>
              </>
            }>

            </Route>
            <Route exact path="/userentries" element={
              <>
                <UserEntries viewUserEntries={this.state.viewUserEntries}/>
              </>
            }>

            </Route>
          </Routes>


        </Router>

      )}

    }

export default App;
