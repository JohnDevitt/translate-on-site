
<template>
  <container>
    <topSection>
      <labelContainer>
        <styledLabel>TranslateOnSite is turned</styledLabel>
      </labelContainer>
      <vueSwitch
        style="display: block"
        v-model="isPluginActive"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="On"
        inactive-text="Off"
        @change="togglePlugin(isPluginActive)" />
    </topSection>
    <divider/>
    <middleSection>
      <labelContainer>
        <styledLabel>Looks like this page is in {{currentLanguage}}</styledLabel>
      </labelContainer>
    </middleSection>
    <middleSection>
      <labelContainer>
        <styledLabel>I want to read my pages in:</styledLabel>
      </labelContainer>
      <Select v-model="translateTo" placeholder="Translate to" @change="value => changeTargetLanguage(value)">
        <Option
          placeholder="Select language"
          v-for="item in languages"
          :key="item.value"
          :label="item.label"
          :value="item.locale">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.emoji }}</span>
        </Option>
      </Select>
    </middleSection>
    <divider/>
    <bottomSection>
      <labelContainer>
        <styledLabel>Should we disable for this site?</styledLabel>
      </labelContainer>
      <vueSwitch v-model="isPageActive" @change="togglePage(isPageActive)" />
    </bottomSection>
  </container>
</template>

<script>
  import { Select, Option, Switch } from 'element-ui';
  import styled from 'vue-styled-components';
  import 'element-ui/lib/theme-chalk/index.css';
  import languages from "./data"

  const container = styled.div`
    padding: 15px;
    font-family: gotham, Georgia, Times, serif;
  `;

  const spacedDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const topSection = styled.div`
    padding-bottom: 5%;
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const middleSection = styled.div`
    padding-bottom: 5%;
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const bottomSection = styled(spacedDiv)`
    padding-bottom: 5%;
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const styledLabel = styled.p`
    font-size: 17px;
    color: '#C0C0C0';
  `;

  const labelContainer = styled.div`
    padding-right: 15%;
  `;

  const divider = styled.div`
    height: 1px;
    background-color: #D3D3D3;
  `;

  export default {
    name: 'buttonSection',
    components: {
      Select,
      Option,
      vueSwitch: Switch,
      styledLabel,
      labelContainer,
      container,
      topSection,
      middleSection,
      bottomSection,
      divider
    },
    data: function() {
      return {
        languages,
        isPluginActive: true,
        isPageActive: true,
        translateToIndex: 0,
      }
    },
    mounted() {
      browser.storage.sync.get(["isPluginActive", "isPageActive", "translateToIndex"], (res) => {
        this.isPluginActive = res === null ? true : res.isPluginActive;
        this.isPageActive = res === null ? true : res.isPageActive;
        this.translateToIndex = res === null ? 0 : res.translateToIndex;
      });
    },
    computed: {
      currentLanguage: function() {
        return `${languages[5].label} ${languages[5].emoji}`
      },
      translateTo: function() {
        return `${languages[this.translateToIndex].label} ${languages[this.translateToIndex].emoji}`
      },
    },
    methods: {
      changeTargetLanguage: function(locale) {
        const languageIndex = languages.findIndex(function(language){
          if (language.locale === locale) {
            return true;
          }
          return false;
        });
        if(languageIndex) {
          this.translateToIndex = languageIndex;
          browser.storage.sync.set({ translateToIndex: languageIndex });
        }
      },
      togglePlugin() {
        browser.storage.sync.set({ isPluginActive: this.isPluginActive });
      },
      togglePage() {
        browser.storage.sync.set({ isPageActive: this.isPageActive });
      }
    }
  };
</script>