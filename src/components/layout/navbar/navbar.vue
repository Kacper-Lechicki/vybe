<template>
  <header class="header">
    <div class="header-content container">
      <h1>VYBE.</h1>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'app-layout-navbar',
};
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;
@use '@styles/colors' as c;

.header {
  position: fixed;
  top: $zero;
  left: $zero;
  padding: 15px 30px;
  width: $full;
  background: c.$bg-dark;
  backdrop-filter: blur(15px);
  z-index: 3000;
}
</style>
