import React, { Component } from 'react';
import Content from './Content';
import './PopUpModal.css'

import PopUp from 'reactjs-popup';

// const PopUpModal = props => (

// <div className="modal"> 
// <h1>Hold Ya' Horses ✋🏾</h1>
// {props.message} 
// <button>Continue</button>
// </div>

// )

// export default PopUpModal
// ;




class PopUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    // openModal() {
    //     this.setState({
    //         visible : true
    //     });
    // }

    // closeModal() {
    //     this.setState({
    //         visible : false
    //     });
    // }

    render() {
        return (
            <div>
                <PopUp modal trigger={<button>Start Here</button>}>
                    {close => <Content close ={close} />}
                </PopUp>
            </div>

        );
    }
}

export default PopUpModal;