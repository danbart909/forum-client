import config from '../config'

const ForumService = {
  getThreads() {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      headers: {
        'authorization': `bearer ${config.TOKEN_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReply(threadId, content) {
    let author = 'defaultuser'
    const item = {
      threadid: threadId, author, content
    }
    return fetch(`${config.API_ENDPOINT}/replies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer 0000`,
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
  postThread(name, op) {
    let author = 'defaultuser'
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer 0000`,
      },
      body: JSON.stringify({
        author: author,
        name: name,
        op: op,
      }),
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
        'authorization': `bearer 0000`,
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
        'authorization': `bearer 0000`,
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
        'authorization': `bearer 0000`,
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
        'authorization': `bearer 0000`,
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

// 24/44 'authorization': `bearer ${TokenService.getAuthToken()}`,