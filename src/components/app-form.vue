<template>
  <form class="app-form">
    <div class="app-form-col">
      <div class="app-controls-title">I have</div>
      <div class="app-controls">
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <input type="text">
      </div>
    </div>
    <div class="app-form-col">
      <div class="app-controls-title">I want to buy</div>
      <div class="app-controls">
        <input type="text">
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
  .app-form {
    display: flex;
  }

  .app-form-col {
    flex: 1;
  }
</style>