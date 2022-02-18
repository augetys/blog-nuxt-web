<template>
  <!--  http://dplayer.js.org/zh/guide.html#%E5%AE%89%E8%A3%85-->
  <div>
    <div id="dplayer"></div>
  </div>
</template>

<script>
  import DPlayer from 'dplayer'
  export default {
    layout: 'center',
    mounted() {
      const dp=new DPlayer({
        container:document.getElementById('dplayer'),
        playbackSpeed:[0.5, 0.75, 1, 1.25, 1.5, 2],
        autoplay:true,
        video:{
          url:'https://photo.choot.top/mv/4uhoy-jo3yh.mp4'
        }
      })
    }
  }
</script>

<style lang="scss">

</style>
