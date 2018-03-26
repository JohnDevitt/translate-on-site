<template>
  <div>
    <titleSection />
    <info />
  </div>
</template>

<script>
  import { styled, injectGlobal } from 'vue-styled-components'
  import titleSection from './components/titleSection.vue'
  import info from './components/info.vue'

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

    hr {
      background: #8B92A6;
      border: none;
      height: 1px;
    }
  `

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      titleSection,
      info,
    }
  }
</script>

<style lang="scss" scoped>
</style>
