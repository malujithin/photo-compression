import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';
import Timer from './components/CountDown';
import Header from './components/materialUIExamples/header'
import TemporaryDrawer from './components/materialUIExamples/drawer'
let base64imagestring;
class App extends Component {
    constructor(props) {
        super(props);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }
  state = {
    base64imagestring:""
  }
    fileChangedHandler(event) {
        var fileInput = false
        if(event.target.files[0]) {
            fileInput = true
        }
        if(fileInput) {
            Resizer.imageFileResizer(
                event.target.files[0],
                500,
                500,
                'PNG',
                90,
                0,
                uri => {
                  base64imagestring= uri ;
                  this.setState({base64imagestring:uri})
                  console.log(base64imagestring)              
                 },
                'base64'
            );
        }
    }

    render() {
        return (
            <div className="App">
                {/* <button><input type="file" onChange={this.fileChangedHandler}/></button>
                {!!this.state.base64imagestring && <div><img src={this.state.base64imagestring} alt ="text" /></div>} */}
            {/* <Timer/> */}
            <Header/>
            <TemporaryDrawer/>
            </div>
        );
    }
}

export default App;