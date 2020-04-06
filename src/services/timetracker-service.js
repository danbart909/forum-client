import config from '../config'
import TokenService from './token-service'

const TimetrackerService = {
  getTime() {
    return fetch(`${config.API_ENDPOINT}/time`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postTime(id, stuff) {
    return fetch(`${config.API_ENDPOINT}/time`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id, stuff }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(error => {
        console.error(error)
      })
  },
  deleteTime(id) {
    return fetch(`${config.API_ENDPOINT}/time/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .catch(error => {
        console.error(error)
      })
  },
  editTime(id, stuff) {
    return fetch(`${config.API_ENDPOINT}/time/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ stuff }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(error => {
        console.error(error)
      })
  }
}

export default TimetrackerService