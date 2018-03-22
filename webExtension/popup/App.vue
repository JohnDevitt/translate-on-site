<template>
  <div id="app">
    <div id="titleContainer">
      <div id="titleTranslate">
        TRANSLATE
      </div>
      <div id="titleOnSight">
        on site.
      </div>
    </div>

    <div id='contentContainer'>
      <div id="info">
        <span id='originLanguagePrompt'>
          Page language:
        </span>
        <span id='originLanguageValue'>
          German
        </span>
      </div>

      </hr>

      <div id="selectorContainer">
        <el-select v-model="value" placeholder="Select a target language">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>

      </hr>

      <div id="alwaysTranslate">
        <el-checkbox v-model="checked">Always translate {{value}}</el-checkbox>
      </div>

      </hr>

      <div id="actions">
        <span>
          <el-button type="success">Translate</el-button>
        </span>
        <span>
          <el-button type="primary">Original Translation</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {

  },
};
</script>

<style lang="scss">
</style>
