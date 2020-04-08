import config from '../config'
import TokenService from './token-service'

const ForumService = {
  getThreads() {
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
  getReplies() {
    return fetch(`${config.API_ENDPOINT}/replies`, {
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
  postReply(threadid, author, content) {
    const item = {
      threadid, author, content
    }
    return fetch(`${config.API_ENDPOINT}/replies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(item),
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
  postThread(author, name, op) {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
  deleteReply(id) {
    return fetch(`${config.API_ENDPOINT}/replies/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .catch(error => {
        console.error(error)
      })
  },
  deleteThread(id) {
    return fetch(`${config.API_ENDPOINT}/threads/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .catch(error => {
        console.error(error)
      })
  },
  editReply(id, content) {
    return fetch(`${config.API_ENDPOINT}/replies/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ content }),
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
  editThread(id, author, name, op) {
    return fetch(`${config.API_ENDPOINT}/threads/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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

export default ForumService