import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
//create a functional component that'll handle fetch 
//request using react hooks 
//which allow you to mutate state w/o explictly using 'this.setState' method
export default function useFetch(url, userInfo) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ userInfo: userInfo })

        })
            .then(response => {
                if (!response.ok) {
                    if (response.status >= 400 && response.status < 500) {
                        return response.json().then(data => {
                            let err = { errMessage: data.message };
                            throw err;
                        })
                    } else {
                        let err = { errorMessage: 'Please try again later, server is tweaking!' };
                        throw err;
                    }
                }
                return response.json()
            })
    }, [])

}