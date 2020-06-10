const BASE_URL = `http://localhost:3001`;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const login = (email,password) => {

    const raw = JSON.stringify({"email":email,"password":password});

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
  return fetch(`${BASE_URL}/api/user/login`,requestOptions)
      .then(data =>{
          return data.json()
      })
      .then((data) => {
          return data
      })
      .catch(err => err);
};

module.exports = {
    login
};

