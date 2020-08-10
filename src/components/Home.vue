<template>
<div>
    <NavBar/>
    <main class="page catalog-page">
        <section class="clean-block clean-catalog dark">
            <div class="container">
                <div class="block-heading">
                        <div class="container">
                            <div class="carousel slide" data-ride="carousel" id="carousel-1">
                                <div class="carousel-inner embed-responsive embed-responsive-16by9" role="listbox" style="width: 100%;height: 400px;">
                                    <div class="carousel-item active embed-responsive-item">
                                        <img class="img-responsive" src="../../static/assets/img/1.jpg" alt="Slide Image">
                                    </div>
                                    <div v-for="image in images" :key="image.id" class="carousel-item embed-responsive-item">
                                        <img class="img-responsive" :src="picture(image)" :alt="picture(image)">
                                    </div>
                                </div>
                                <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button"
                                        data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-1" data-slide-to="1"></li>
                                    <li data-target="#carousel-1" data-slide-to="2"></li>
                                    <li data-target="#carousel-1" data-slide-to="3"></li>
                                    <li data-target="#carousel-1" data-slide-to="4"></li>
                                </ol>
                            </div>
                        </div>
                </div>
                <div class="content" id="categories">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="d-none d-md-block">
                                <div class="filters">
                                    <div class="filter-item">
                                        <h3>Choose category</h3>
                                        <div class="form-group">
                                            <div class="col-sm-10">
                                                <select name="Category" v-model="videosToDisplay.category" class="form-control">
                                                    <option value="">All</option>
                                                    <option v-for="catg in Object.keys(categories)" :key="catg.id">{{catg}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-check" v-if="categories[videosToDisplay.category]">
                                            <div v-for="subcat in categories[videosToDisplay.category]" :key="subcat.id">
                                                <label>
                                                  <input type="checkbox">&nbsp;&nbsp;{{subcat}}
                                                </label><br>
                                            </div>
                                        </div>
                                        <div class="form-check" v-else>
                                        <small>⬆<em>Showing all videos. Select a category to view</em></small>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div class="d-md-none"><a class="btn btn-link d-md-none filter-collapse" data-toggle="collapse" aria-expanded="false" aria-controls="filters" href="#filters" role="button">Filters<i class="icon-arrow-down filter-caret"></i></a>
                                <div class="collapse"
                                    id="filters">
                                    <div class="filters">
                                        <div class="filter-item">
                                            <h3>Categories</h3>
                                            <div class="form-group">
                                                <div class="col-sm-10">
                                                    <select name="Category" v-model="videosToDisplay.category" class="form-control">
                                                        <option value="">All</option>
                                                        <option v-for="catg in Object.keys(categories)" :key="catg.id">{{catg}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                             <div class="form-check" v-if="categories[videosToDisplay.category]">
                                                 <div v-for="subcat in categories[videosToDisplay.category]" :key="subcat.id">
                                                    <label>
                                                    <input type="checkbox">&nbsp;&nbsp;{{subcat}}
                                                    </label><br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="products">
                                <div v-if="errored" class="row">
                                    <div class="col-sm-12 col-lg-12">
                                        <div class="text-center alert alert-danger" role="alert">
                                            <p style="font-size: 100px;" class="text-center">
                                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                            </p>
                                            <strong>Error:</strong> {{videos}}
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="row">
                                    <div v-if="loading" class="col-sm-12 col-lg-12">
                                        <div class="text-center" style="font-size:50px">
                                            Please wait...<br>
                                            <i class="fa fa-refresh fa-spin" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div v-else class="col-sm-6 col-lg-4" :key="video.id" v-for="(video, i) in videos">
                                        <div class="card clean-card text-center" v-if="i < videosToDisplay.count">
                                            <div style="font-size: 80px"
                                             class="embed-responsive embed-responsive-16by9">
                                              <img :src="picture(video.image_src)"
                                               :alt="video.title"
                                               class="embed-responsive-item "/>
                                               <div :title="video.attempt_download+' watched this video so far'" style="border-radius: 15px 50px 30px;font-size:24px;background-color: #ffffff" class="bottom-right vid-img">
                                                   {{video.attempt_download}}<i class="fa fa-eye" aria-hidden="true"></i>
                                               </div>
                                              <div @click="selectedVideo = video" class="centered" data-toggle="modal" data-target="#modelId">
                                                    <i class="fa fa-play-circle-o vid-img" title="click to play video" aria-hidden="true"></i>
                                              </div>
                                            </div>
                                            <div class="card-body info">
                                                <h6 class="card-title" :title="video.title">{{shortenName(video.title)}}</h6>
                                                <button type="button" @click="selectedVideo = video" class="btn btn-success" data-toggle="modal" data-target="#modelId">
                                                    Download <i class="fa fa-download" aria-hidden="true"></i>
                                                </button>
                                                <br><small>{{convertToMB(video.lq_size) || convertToMB(video.hq_size) || '-'}}</small>
                                                <div v-html="shareButtons(video.title, video.url)"></div>
                                                <a target="_blank" title="Play video on facebook" :href="video.url">
                                                    Play on facebook <i class="fa fa-external-link" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="pagination" v-if="videos.length > videosToDisplay.count" v-show="typeof(videos) === 'object'">
                                        <li class="page-item active">
                                            <button type="button" @click="videosToDisplay.count += 3" class="btn btn-primary btn-lg">Show more</button>
                                        </li>
                                    </ul>
                                    <ul class="pagination" v-else v-show="typeof(videos) === 'object'">
                                        <li class="page-item active">
                                            <em>That's all we have. We're glad you came this far 😊...</em>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{selectedVideo.title}}</h5>
                        <button type="button"  class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <div class="form-check" v-if="selectedVideo.links">
                    <div
                      v-show="selectedVideoRaw.length > 10"
                      v-html="selectedVideoRaw"></div>
                    </div>
                    <div v-else>
                        <div class="form-check" v-if="downloadLoading">
                            Opening video player. Please wait....
                            <i class="fa fa-refresh fa-spin" aria-hidden="true"></i>
                            <!-- selectedVideoProp(selectedVideo.url) -->
                        </div>
                        <div class="row form-check" v-else>
                            <div class="alert alert-danger text-center" role="alert">
                                <i style="color:red; font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i><br>
                                <strong>Error: </strong> {{selectedVideo.error}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <!-- <button type="button" v-show="selectedVideo.links" class="btn btn-success">Download now <i class="fa fa-download" aria-hidden="true"></i> </button> -->
                </div>
            </div>
        </div>
    </div>
<Foot />
</div>
</template>

<script>
import vc from '../controller/viralvideo.js'
import {mixin} from '../controller/mixins'
import NavBar from './NavBar'
import Foot from './Foot'
export default {
  name: 'Home',
  data () {
    return {
      errored: false,
      loading: true,
      videos: [],
      selectedVideo: {},
      downloadLoading: false,
      selectedVideoRaw: '',
      videosToDisplay: {
        count: 9,
        category: ''
      },
      images: [],
      categories: {}
    }
  },
  mixins: [mixin],
  components: {NavBar, Foot},
  mounted: async function () {
    // before component loads
    const data = await vc.getVideos()
    this.loading = (data === undefined)
    this.errored = data.errored
    this.videos = data.message
    if (typeof (this.videos) === 'object') {
      this.videos.forEach((d) => {
        if (d.image_src.length >= 5 && this.images.length < 5) this.images.push(d.image_src)
        if (d.sub_linked.length >= 1) {
          // if video category has sub category
          (this.categories[d.category] === undefined)
            ? this.categories[d.category] = [d.sub_linked]
            : this.categories[d.category].push(d.sub_linked)
        } else {
          if (this.categories[d.category] === undefined) this.categories[d.category] = []
        }
      })
    }
  }
}
</script>
