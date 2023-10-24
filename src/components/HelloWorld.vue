<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore,useMsgStore } from '../store/index';
defineProps<{ msg: string }>()
const counter=useCounterStore()
const useMsg=useMsgStore()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <h2>{{ useMsg.msg }}</h2>
    <button type="button" @click="counter.increment">count is {{ counter.count }}</button>
    
  </div>

</template>

<style scoped>
</style>
