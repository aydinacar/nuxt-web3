<script setup lang="ts">
import { ref } from "vue";
import { useEthers } from "../composables/useEthers";
const address = ref("");
const { connect } = useEthers();
const connectHandler = async () => {
  address.value = await connect();
};
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <button @click="connectHandler">Connect</button>
    <p>{{ address }}</p>
  </div>
</template>
