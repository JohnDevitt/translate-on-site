<template>
  <styledContainer class="info">
    <styledLabel>
      This page is in <styledSpan class="current-language">{{ onPageLanguage }}</styledSpan>.
    </styledLabel>
    <br></br>
    <styledLabel>
      Always translate {{ onPageLanguage }} pages?
      <el-switch
        v-model="switchValue"
        active-color="#3CA7D2"
        inactive-color="#8B92A6"
        @change="switchChanged"
      >
      </el-switch>
    </styledLabel>
    <br></br>
    <el-tag
      v-for="(alwaysTranslated, index) in translatableLanguages"
      :key="index"
      closable
      :disable-transitions="false"
      @close="handleClose(alwaysTranslated)"
    >
      {{ alwaysTranslated }}
    </el-tag>
    <styledDiv>
      <hr />
    </styledDiv>
  </styledContainer>
</template>

<script>
import styled from 'vue-styled-components'

const styledContainer = styled.div`
  background-color: #FFFEFD;
  padding: 15px 35px 15px 20px;
  color: #000000;
`

const styledLabel = styled.label`
  font-family: 'Arial', Georgia, Times, serif;
  color: #8B92A6;
  line-height: 30px;
  font-size: 18px;
`
const styledSpan = styled.label`
  color: #3CA7D2;
`
const styledDiv = styled.div`
  padding: 5px 0;
`

export default {
  name: 'info',
  data() {
    return {
      onPageLanguage: 'English',
      switchValue: '',
      translatableLanguages: ['English', 'Spanish', 'German'],
      inputValue: '',
      inputVisible: false,
    }
  },
  components: {
    styledContainer,
    styledLabel,
    styledSpan,
    styledDiv,
  },
  methods: {
    switchChanged() {
      console.log('hey John');
    },
    handleClose(tag) {
      this.translatableLanguages.splice(this.translatableLanguages.indexOf(tag), 1);
    },
  },
}
</script>

<style lang="scss">
.info {
  font-family: 'Arial', Georgia, Times, serif;
  font-size: 18px;

  .el-tag {
    font-size: 18px;
  }
  
  .el-tag + .el-tag {
    margin-left: 10px;
  }

}
</style>
