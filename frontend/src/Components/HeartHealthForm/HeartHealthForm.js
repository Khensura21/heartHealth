import React, { Component } from 'react';

import './HeartHealthForm.css';

class HeartHealthForm extends Component  {
    static defaultProps = {
        submitUserData(){}
    }
    constructor(props)  {
        super(props);
        this.state = {
            name:'',
            age:'',
            sex:'',
            chestPainVal:'',
            restbps:'',
            cholesterol:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    

    handleSubmit(e){
        e.preventDefault();
        this.props.submitUserData({...this.state});
        //make sure you update the state 
        this.setState({
            name:'',
            age:'',
            sex:'',
            chestPainVal:'',
            restbps:'',
            cholesterol:''
        })
    }



    render(){
  
        const placeholders = ["Khensu-Ra Love El", "50", "M", "95", "122","293"];
        const formLabels = ["Name", "Age", "Sex", "Chest Pain (1 - 4)", "Resting Blood Pressure", "Cholesterol"]

        const formFields = Object.keys(this.state).map((key, ndx) => (
                <div>
                    <label className="labels" htmlFor={key}>{formLabels[ndx]}:</label>
                    <input key={ndx} type="text" value={this.state[key]} placeholder={placeholders[ndx]} id={key} name={key} onChange={this.handleChange} />
                </div>
        ));

        
        return (
            <div id="form-outer">
                <form onSubmit={this.handleSubmit}>
                    { formFields }
                    {/* <label className="labels" htmlFor="name">Name: </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                   placeholder="Khensu-Ra Love El"
                    onChange={this.handleChange}
                    />
                    <label className="labels" htmlFor="age">Age: </label>
                    <input 
                    type="text"
                    value={age}
                    id="age"
                    name="age"
                   placeholder='45'
                    onChange={this.handleChange}
                    />
                    <label className="labels" htmlFor="sex">Sex: </label>
                    <input 
                    type="text"
                    value={sex}
                    id="sex"
                    name="sex"
                   placeholder="M"
                    onChange={this.handleChange}
                    />
                    <label className="labels" htmlFor="restbps">Resting Blood Pressure: </label>
                    <input 
                    type="text"
                    value={restbps}
                    id="restbps"
                    name="restbps"
                   placeholder="95"
                    onChange={this.handleChange}
                    />
                    <label className="labels" htmlFor="chol">Cholesterol: </label>
                    <input 
                    type="text"
                    value={cholesterol}
                    id="cholesterol"
                    name="cholesterol"
                    placeholder='122'
                    onChange={this.handleChange}
                    />
                     <label className="labels" htmlFor="chestPainVal">Chest Pain Value (1-4): </label>
                    <input 
                    className='labels-input-fields'
                    type="text"
                    value={chestPainVal}
                    id="chestPainVal"
                    name="chestPainVal"
                    placeholder='1'
                    onChange={this.handleChange}
                    /> */}
                    <button id="submit"type="submit">Submit</button> 
                </form>
            </div>
        )
    }
}

export default HeartHealthForm;