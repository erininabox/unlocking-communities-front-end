import * as tokenService from '../services/tokenService'


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/contracts`

// export const createContract = (formData) => {
//   axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/contracts`, formData).then((response) => {
//     console.log(response.status)
//   })
// }

export const createContract = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      }, 
      body: JSON.stringify(formData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

// async function createContract(contract) {
//   return await fetch(`${BASE_URL}/contracts`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       Authorization: `Bearer ${tokenService.getToken()}`
//     },
//     body: JSON.stringify(contract)
//   })
//   .then(res => res.json())
// }


export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json()
  } catch (err) {
    console.log(err)
    throw(err)
  }
}