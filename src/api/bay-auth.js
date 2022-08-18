import apiUrl from '../apiConfig'
import axios from 'axios'

export const bayIndex = () => {
  return axios({
    url: apiUrl + '/bays',
    method: 'GET'
  })
}

export const bayCreate = (bay, user) => {
  return axios({
    url: apiUrl + '/bays',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      bay
    }
  })
}
export const viewBay = (id) => {
  return axios({
    url: apiUrl + '/bay/' + id,
    method: 'GET'
  })
}

export const bayUpdate = (id, bay, user) => {
  return axios({
    url: apiUrl + '/bay/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      bay: bay
    }
  })
}
