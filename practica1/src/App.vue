<template>
  <div id="app">
    <div class="hello-world-section">
      <Navbar />
    </div>
    <div class="app-container">
      <header></header>
      <main></main>
      <div class="messages">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/HelloWorld.vue";
import sidebar from "./components/TheWelcome.vue";
</script>

<style scoped>
.hello-world-section {
  margin-bottom: 20px;
}

.messages {
  margin-top: 60px;
}
</style>
