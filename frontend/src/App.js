import React, { Component } from 'react';
import HeartHealthForm from './Components/HeartHealthForm/HeartHealthForm';
import HeartHealthResults from './Components/HeartHealthResults/HeartHealthResults';
import PopUpModal from './Components/PopUpModal/PopUpModal';
import './App.css';
import * as apiCalls from './api'




class App extends Component {
  constructor(props) {
    super(props);

    this.submitUserData = this.submitUserData.bind(this)
  }


  async submitUserData(data) {
    await apiCalls.saveData(data);
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar/> */}
        <PopUpModal/>
        <HeartHealthResults />
        <HeartHealthForm submitUserData={this.submitUserData} />
      </div>
    );
  }

}

export default App;
