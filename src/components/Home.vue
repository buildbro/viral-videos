<template>
<div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container"><a class="navbar-brand logo" href="#">Viral Videos</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#categories">Categories</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="page catalog-page">
        <section class="clean-block clean-catalog dark">
            <div class="container">
                <div class="block-heading">
                    <!-- <h2 class="text-info">Catalog Page</h2> -->
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p> -->
                    <!-- slider starts here -->
                    <!-- <section class="clean-block slider"> -->
                        <div class="container">
                            <div class="carousel slide" data-ride="carousel" id="carousel-1">
                                <div class="carousel-inner" role="listbox" style="width: 100%;height: 400px;">
                                    <div class="carousel-item active"><img class="img-responsive" src="../../static/assets/img/1.jpg" alt="Slide Image"></div>
                                    <div class="carousel-item"><img class="img-responsive" src="../../static/assets/img/2.jpg" alt="Slide Image"></div>
                                    <div class="carousel-item"><img class="img-responsive" src="../../static/assets/img/scenery/image6.jpg" alt="Slide Image"></div>
                                    <div class="carousel-item"><img class="img-responsive" src="../../static/assets/img/avatars/avatar1.jpg" alt="Slide Image"></div>
                                </div>
                                <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button"
                                        data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-1" data-slide-to="1"></li>
                                    <li data-target="#carousel-1" data-slide-to="2"></li>
                                    <li data-target="#carousel-1" data-slide-to="3"></li>
                                </ol>
                            </div>
                        </div>
                    <!-- </section> -->
                    <!-- slider stops here -->
                </div>
                <div class="content" id="categories">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="d-none d-md-block">
                                <div class="filters">
                                    <div class="filter-item">
                                        <h3>Categories</h3>
                                        <div class="form-group">
                                            <div class="col-sm-10">
                                                <select name="Category" id="inputCategory" class="form-control">
                                                    <option value="">All</option>
                                                    <option>Comedy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Laptops</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3"><label class="form-check-label" for="formCheck-3">PC</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"><label class="form-check-label" for="formCheck-4">Tablets</label></div>
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
                                                    <select name="Category" id="inputCategory" class="form-control">
                                                        <option value="">All</option>
                                                        <option>Comedy</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Laptops</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3"><label class="form-check-label" for="formCheck-3">PC</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"><label class="form-check-label" for="formCheck-4">Tablets</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="products">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar1.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Tasiu</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar1.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Title</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar1.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Title</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar1.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Title</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar1.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Title</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar2.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Title</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="card clean-card text-center"><img class="card-img-top w-100 d-block"
                                                src="../../static/assets/img/avatars/avatar3.jpg">
                                            <div class="card-body info">
                                                <h6 class="card-title">Title</h6>
                                                <i class="fa fa-download" aria-hidden="true"></i>
                                                HD <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                                <i class="fa fa-share" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <nav>
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="page-footer dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>&copy; 2020 Copyright Text</p>
        </div>
    </footer>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
