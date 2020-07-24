export const signup=(user)=> {
    console.log(process.env.API)
    return fetch('https://reqres.in/api/register',{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body:JSON.stringify(user)

    })
      .then((res)=>{
          console.log(res.data)
        return res.json();
      })
      .catch(err=>console.log(err))
}

export const signin = user => {
    return fetch('https://reqres.in/api/login', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

