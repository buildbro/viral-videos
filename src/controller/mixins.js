import vc from '../controller/viralvideo.js'
const env = require('../config')

export const mixin = {
  methods: {
    shortenName: (title) => {
      if (title.trim().length >= 20) {
        return title.substring(0, 19) + ' ...'
      } else {
        let spaces = ''
        for (let i = 0; i < (31 - title.length); i++) {
          spaces += ' '
        }
        return title + spaces
      }
    },
    picture: (picUrl = '') => {
      return vc.pictureUrl(picUrl)
    },
    convertToMB: (sizeInBytes) => {
      if (!sizeInBytes || isNaN(sizeInBytes)) {
        return '-'
      }
      let sizeInMB = sizeInBytes / 1000000
      return sizeInMB.toFixed(2) + 'mb'
    },
    sharableLink: (link) => {
      const newLink = (link.search('https://www.facebook.com/') === 0)
        ? link.substring(25)
        : `${link}`
      return newLink
    },
    shareButtons: function (title, url) {
      return `Share: <a class="share-icon" target="_blank" title="share on whatsapp" data-action="share/whatsapp/share"
      href="whatsapp://send?text=Check out this video: ${title}. https://viral-videos.netlify.app/%23/${this.sharableLink(url)}">
        <i class="fa fa-whatsapp" aria-hidden="true"></i>
    </a>
    <a class="share-icon" target="_blank" title="share video on twitter"
      href="https://twitter.com/intent/tweet?text=Check out this video: ${title}. https://viral-videos.netlify.app/%23/${this.sharableLink(url)}">
        <i class="fa fa-twitter" aria-hidden="true"></i>
    </a>
    <a class="share-icon" target="_blank" title="share video on facebook"
      href="http://www.facebook.com/sharer/sharer.php?u=https://viral-videos.netlify.app/%23/${this.sharableLink(url)}">
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>`
    },
    downloadLink: (link, title) => {
      return `${env.API_URL}/download/?url=${link}&redirect=${env.API_URL}&filename=${title}-viral-videos.netlify.app`
    }
  },
  watch: {
    selectedVideo: async function (video) {
      this.downloadLoading = true
      const downloadLinks = (video.url === undefined) ? null : await vc.getDownloadLinks(video.url)
      setTimeout(() => {
        // delay download button by 2 secs
        this.downloadLoading = (!downloadLinks)
      }, 2000)
      if (!downloadLinks.errored && typeof (downloadLinks.message) === 'object') {
        // console.log('found')
        this.selectedVideo['links'] = downloadLinks.message
        const data = downloadLinks.message
        const LQ_LINK = data['LQ_Link'] || {}
        const HQ_LINK = data['HQ_Link'] || {}
        // console.log(LQ_LINK.link)
        this.selectedVideoRaw = (data['LQ_Link'] || data['HQ_Link'])
          ? `<div class="embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" controls>
                <source src="${LQ_LINK.link || HQ_LINK.link}" type="video/mp4">
                  <source src="${LQ_LINK.link || HQ_LINK.link}" type="video/ogg">
                Your browser does not support the video tag.
              </video>
             </div>
             <hr>
            <div style="color:white;font-size: 20px;" class="row">
                <div class="col-sm-6 col-lg-6">
                  <label class="form-check-label">
                  <a class="btn-block btn btn-success"
                    href="${this.downloadLink(LQ_LINK.link, video.title)}"
                    target="_blank">
                  Low quality (${this.convertToMB(LQ_LINK.size) || '-'})
                  <i class="fa fa-download" aria-hidden="true"></i>
                  </a>
                  </label>
                </div>
                <div class="col-sm-6 col-lg-6">
                  <label class="form-check-label">
                  <a class="btn-block btn btn-success"
                    href="${this.downloadLink(HQ_LINK.link, video.title)}"
                    target="_blank">
                  High quality (${this.convertToMB(HQ_LINK.size) || '-'})
                  <i class="fa fa-download" aria-hidden="true"></i>
                  </a>
                  </label>
                </div>
                <div class="col-sm-12 col-lg-12 text-center" style="color: #000000">
                 ${this.shareButtons(video.title, video.url)}
                 <br>
                 <small>Got anything you want to tell the developer? Kindly send your feedback to:
                 <a target='_blank' href='https://bit.ly/2CXY7BF'>https://bit.ly/2CXY7BF</a>
                 </small>
                </div>
            </div>
            `
          : '<h1 class="text-center">An unknown error has occured</h1>'
      } else {
        this.selectedVideo.error = downloadLinks.message // an error has occured
      }
    }
  }
}
