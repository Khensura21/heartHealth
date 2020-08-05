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

    this.submitUserData = this.submitUserData.bind(this)
  }

 
   async submitUserData(data) {
    console.log(data);
    const heartPrediction = await apiCalls.saveData(data);
    console.log(heartPrediction);

    //socket.io implementation attempt
    // const socket = socketIOClient('http://localhost:3000/');
    // socket.on('client_data', (data) => {
    //   //console.log('hi');
    //  // socket.emit('client_data', {message: 'hello world'})
    //  console.log(data);
    // })
    // socket.disconnect()
  }

  render() {
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
