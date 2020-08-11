import React, { Component } from 'react';
//import socketIOClient from "socket.io-client";
import './App.css';
import HeartHealthForm from './Components/HeartHealthForm/HeartHealthForm';
import HeartHealthResults from './Components/HeartHealthResults/HeartHealthResults';
import PopUpModal from './Components/PopUpModal/PopUpModal';
import * as apiCalls from './api';
//const APIURL = 'http://localhost:3000/api/processData';
//import useFetch from "./useFetch"




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartPrediction: null
    }
    this.submitUserData = this.submitUserData.bind(this)
  }

 
   async submitUserData(data) {
    const inference = await apiCalls.saveData(data);
    this.setState({
      heartPrediction: inference.heartPrediction
    });
  }

  render() {
    // this.state.heartPrediction == 1 ? alert("you should see a doctor") : alert("you're fine!");
    return (
      <div className="App">
        {/* <Navbar/> */}
        <PopUpModal />
        <HeartHealthResults />
        <HeartHealthForm submitUserData={this.submitUserData} />
      </div>
    );
  }

}

export default App;
