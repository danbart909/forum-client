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
      .then(res =>
        console.log(res)
      )
  }
}

export default ForumService