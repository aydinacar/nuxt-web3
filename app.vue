<template>
  <div>
    <AppHeader />
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
export default defineComponent({
  components: {
    AppHeader,
  },
  setup() {},
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
