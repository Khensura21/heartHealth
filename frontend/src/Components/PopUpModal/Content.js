import React from 'react';


//functional component
export default ({ close }) =>  (
    <div className='modal'>
        <a className="close" onClick={close}>
            &times;
        </a>
        <div className="header"> ⚠️ Notice ⚠️  </div>
        <div className="content"> 
            {" "}
            Thanks for visiting my website, HeartHealth! 
            This project was made in my free time using <a>this</a> dataset on Kaggle. 
            If you’re genuinely concerned about your heart health, you should consult a <strong>medical professional! </strong>
            <br/>
        </div>
    </div>
);

