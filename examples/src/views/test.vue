<template>
  <div id="home">
  	<div class="moor-item">
		  <label>Switch: </label>

		  <test-switch
		  v-model="lightSwitch">开关(开):</test-switch>

		  <test-switch
		  v-model="switchLight">开关(关):</test-switch>
		</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to test UI!',
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>
<style scoped>
.moor-switch {
  margin: 10px 6px;
}
.moor-item {
  display: flex;
  align-items: center;
}
.moor-item label {
  width: 100px;
  display: inline-block;
}
</style>