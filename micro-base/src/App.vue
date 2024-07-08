<script setup lang="ts">
</script>

<template>
  <div class="ssss">
    <nav>
      <RouterLink to="/vue-app">Go to vue</RouterLink>
      <RouterLink to="/react-app">Go to react</RouterLink>
      <RouterLink to="/umi-app">Go to umi</RouterLink>
    </nav>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
#content {
  width: 630px;
  display: flex;
  justify-content: space-around;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
