import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}`

async function createContract(contract) {
  return await fetch(`${BASE_URL}/contracts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(contract)
  })
  .then(res => res.json())
}

export {
  createContract
}