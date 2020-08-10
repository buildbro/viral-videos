<template>
<div>
  <NavBar />
    <main class="page catalog-page">
        <section class="clean-block clean-catalog dark">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-md-12 text-center" style="font-size: 50px">
                          Coming soon...<br>
                          If you like this site or have any suggestion, Kindly drop a feedback
                          <a target="_blank" href="https://bit.ly/2CXY7BF">https://bit.ly/2CXY7BF</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
   <Foot />
</div>
</template>

<script>
import NavBar from './NavBar'
import Foot from './Foot'
export default {
  name: 'Feedback',
  components: {NavBar, Foot}
}
</script>
