
<template>
  <styledContainer class="titleSection">
    <styledHeaderOne>Translate</styledHeaderOne>
    <styledHeaderTwo>on sight.</styledHeaderTwo>
  </styledContainer>
</template>

<script>
  import styled from 'vue-styled-components'

  const styledContainer = styled.div`
    background-color: #3CA7D2;
    padding: 30px 35px 15px 35px;
    color: #FFFEFD;
  `

  const styledHeaderOne = styled.h1`
    font-family: 'leagueSpartan', Georgia, Times, serif;
    line-height: 30px;
    font-size: 38px;
  `

  const styledHeaderTwo = styled.h2`
    font-family: 'libreBaskervilleItalic', Georgia, Times, serif;
    font-size: 27px;
  `

  export default {
    name: 'titleSection',
    components: {
      styledContainer,
      styledHeaderOne,
      styledHeaderTwo
    }
  }
</script>
