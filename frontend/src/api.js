const APIURL = 'http://localhost:3000/api/processData'


export async function saveData(data) {
    return fetch(APIURL, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ data: data })
    })
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    return res.json().then(data => {
                        let err = { errMessage: data.message };
                        throw err;
                    })
                } else {
                    let err = { errorMessage: 'Please try again later, server is tweaking!' };
                    throw err;
                }
            }
            return res.json()
        })
}
