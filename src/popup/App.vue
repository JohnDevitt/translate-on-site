
<template>
  <container>
    <titleSection />
    <buttonSection />
  </container>
</template>

<script>
  import styled, { injectGlobal } from 'vue-styled-components'
  import titleSection from './components/titleSection.vue'
  import buttonSection from './components/buttonSection.vue'
  import 'element-ui/lib/theme-chalk/index.css';


  injectGlobal`
  	@font-face {
  	  font-family: leagueSpartan;
  	  src: url('../fonts/league-spartan-master/webfonts/leaguespartan-bold.woff');
  	}

    @font-face {
  	  font-family: libreBaskervilleItalic;
  	  src: url('../fonts/libre-baskerville/LibreBaskerville-Italic.ttf');
  	}

  	 @font-face {
  	  font-family: gotham;
  	  src: url('../fonts/gotham-cufonfonts/GothamBook.ttf');
  	}

  	body {
      padding: 0;
      margin: 0;
      background-color: #FFFEFD;
  	}
  `;

  const container = styled.div`
    width: 400px;
  `;

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: { titleSection, buttonSection, container }
  }
</script>