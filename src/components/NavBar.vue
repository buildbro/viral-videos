<template>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container">
            <router-link class="navbar-brand logo" to="/">Viral Videos</router-link>
            <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation">
                        <router-link class="nav-link" to='/promote'>Promote your video</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a target="_blank" class="nav-link" href='https://bit.ly/2CXY7BF'>Feedback</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
