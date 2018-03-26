<template>
  <div>
    <titleSection />
  </div>
</template>

<script>
  import { styled, injectGlobal } from 'vue-styled-components'
  import titleSection from './components/titleSection.vue'

  injectGlobal`
  	@font-face {
  	  font-family: 'leagueSpartan';
  	  src: url('../fonts/league-spartan-master/webfonts/leaguespartan-bold.woff');
  	}

    @font-face {
  	  font-family: 'libreBaskervilleItalic';
  	  src: url('../fonts/libre-baskerville/LibreBaskerville-Italic.ttf');
  	}

  	body {
      padding: 0;
      margin: 0;
      background-color: #FFFEFD;
  	}
  `

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: { titleSection }
  }
</script>

<style lang="scss" scoped>
</style>
