import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";


 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", sub:"World Wide Web"},
      contents: [
        {id:1, title:"HTML", desc:"HTML is no language."},
        {id:2, title:"CSS", desc:"CSS is beautiful"},
        {id:3, title:"JavaScript", desc:"JS is good"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title= {this.state.subject.title} sub = {this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;