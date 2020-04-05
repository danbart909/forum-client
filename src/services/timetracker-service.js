import config from '../config'
import TokenService from './token-service'

const TimetrackerService = {
  getTime() {
    return fetch(`${config.API_ENDPOINT}/threads`, {
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
  postTime(author, name, op) {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ author, name, op }),
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
    return fetch(`${config.API_ENDPOINT}/threads/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .catch(error => {
        console.error(error)
      })
  },
  editTime(id, author, name, op) {
    return fetch(`${config.API_ENDPOINT}/threads/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ author, name, op }),
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