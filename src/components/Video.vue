<template>
<div>
  <NavBar />
    <main class="page catalog-page">
        <section class="clean-block clean-catalog dark">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-md-12 text-center" style="font-size: 50px" v-if="loading">
                          <br>
                          Loading video. Please wait <i class="fa fa-refresh fa-spin" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-12" v-else>
                          <br>
                          <div class="card clean-card text-center" v-show="link">
                                            <div style="font-size: 80px"
                                             class="embed-responsive embed-responsive-16by9">
                                              <div class="embed-responsive-item" :title="link">
                                                <video width="320" height="240" controls>
                                                  <source :src="LQ_LINK.link || '#'" type="video/mp4">
                                                  <source :src="HQ_LINK.link || '#'" type="video/ogg">
                                                  Your browser does not support the video tag
                                                </video>
                                              </div>
                                            </div>
                                            <div class="card-body info">
                                              <div class="row">
                                              <div class="col-sm-6 col-lg-6">
                                                <a :href="downloadLink(LQ_LINK.link, '')" v-if="LQ_LINK" class="btn btn-success">
                                                    Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    <small>{{convertToMB(LQ_LINK.size)}}</small>
                                                </a>
                                              </div>
                                              <div class="col-sm-6 col-lg-6">
                                               <a :href="downloadLink(HQ_LINK.link, '')" v-if="HQ_LINK" class="btn btn-success">
                                                    Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    <small>{{convertToMB(HQ_LINK.size)}}</small>
                                                </a>
                                              </div>
                                              </div>
                                              <div v-html="shareButtons('', link)"></div>
                                                <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errored">
                                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    <span class="sr-only">Close</span>
                                                  </button>
                                                  <strong>Note:</strong> {{errorMessage}}
                                                </div>
                                                <br>
                                                <a target="_blank" title="Play video on facebook" :href="link">
                                                    Play on facebook <i class="fa fa-external-link" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
</template>

<script>
import vc from '../controller/viralvideo.js'
import {mixin} from '../controller/mixins'
import NavBar from './NavBar'
import Foot from './Foot'
export default {
  name: 'Video',
  data () {
    return {
      loading: true,
      errored: false,
      errorMessage: 'Video unavailable..!!',
      link: '',
      LQ_LINK: undefined,
      HQ_LINK: undefined
    }
  },
  mixins: [mixin],
  components: {NavBar, Foot},
  methods: {
    videoOriginalURL: () => {
      const currentOrigin = window.location.origin
      const fullLink = window.location.href
      return 'https://www.facebook.com/' + fullLink.substring(currentOrigin.length + 3)
    }
  },
  created: async function () {
    this.link = this.videoOriginalURL()
    const dowloadLinks = await vc.getDownloadLinks(this.link)
    this.errored = dowloadLinks.errored
    this.errorMessage = (this.errored) ? dowloadLinks.message : ''
    this.HQ_LINK = dowloadLinks.message.HQ_Link
    this.LQ_LINK = dowloadLinks.message.LQ_Link
    console.log(dowloadLinks.message.LQ_Link)
    this.loading = !(this.HQ_LINK || this.LQ_LINK)
  }
}
</script>
