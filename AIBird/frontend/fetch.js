const oldGetUsers = () => {
    fetch(`http://localhost:3000/users/`)
        .then(res => {
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(users => console.log(users))
        .catch(error => console.error(error))
    return "hello world"
}

const oldGetChirp = (id) => {
    fetch(`http://localhost:3000/chirps/${id}`)
        .then(res => {
            if(res.ok){
                return res.json(); 
            } else {
                throw res;
            }
        }).then(chirp => console.log(chirp))
        .catch(err => console.error(err.statusText))
} 

const postChirp = (chirpObj) => {
    fetch("http://localhost:3000/chirps",{
        method: "POST",
        body: JSON.stringify(chirpObj),
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then(res => {
        if (res.ok){
            return res.json();
        } else {
            throw res;
        }
    })
    .then(chirp => console.log(chirp))
    .catch(err => console.error(err))
}



// async await approach

const getUsers = async () => {
    const response = await fetch(`http://localhost:3000/users/`)
    if (!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    // do whatever we want with that data
    console.log(data)
    return data;
}
// getUsers()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const getChirp = async (id) => {
    try{
        const response = await fetch(`http://localhost:3000/chirps/${id}`)
        if (response.ok){
            const chirp = await response.json();
            console.log(chirp)
            return chirp;
        } else {
            throw response;
        }
    } catch (err) {
        console.error(err);
    }
}