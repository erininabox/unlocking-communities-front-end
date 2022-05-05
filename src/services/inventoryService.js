import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/inventory`

export const addInventory = async(formData) => {
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
    throw (error)
  }
}

export const getAll = async () => {
  try {
    const res = await fetch (`${BASE_URL}`, {
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