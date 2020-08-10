const axios = require('axios')
const env = require('../config')

const pictureUrl = (absoultePath) => {
  return `${env.API_URL}${absoultePath}`
}
const getVideos = () => {
  // make a post call to url
  return axios.get(`${env.API_URL}?req=videos`)
    .then(function (response) {
      return (response.status === 200)
        ? {errored: response.data.errored, message: response.data.message}
        : {errored: true, message: 'Unable to fetch videos. try again later'}
    })
    .catch(function () {
      return {
        errored: true, message: 'Unable to fetch videos at the moment. kindly check back in  a bit'
      }
    })
}

const getDownloadLinks = (url) => {
  // get download links and video sizes
  return axios.get(`${env.API_URL}?req=downloadlink&url=${url}`)
    .then(function (response) {
      return (response.status === 200)
        ? {errored: response.data.errored, message: response.data.message}
        : {errored: false, message: 'Download links unavailable at the moment'}
    })
    .catch(function () {
      return {
        errored: true, message: 'Unable to get video download links at the moment. kindly check back in  a bit'
      }
    })
}

module.exports = { getVideos, getDownloadLinks, pictureUrl }
