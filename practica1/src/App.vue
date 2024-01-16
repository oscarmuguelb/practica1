<template>
  <div id="app">
    <div>
      <Navbar />
    </div>

    <div class="app-container">
      <header></header>
      <main>
        <div class="row mt-1">
          <div class="col-3">
            <router-view> </router-view>
          </div>
          <sidebar />
        </div>
      </main>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/HelloWorld.vue";
import sidebar from "./components/TheWelcome.vue";
</script>

<style scoped></style>
