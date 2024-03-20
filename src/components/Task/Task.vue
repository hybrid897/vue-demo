<template>
  <p class="greeting">{{ greeting }}</p>
  <TestComponent v-model="checked1" inputId="primary" label="Primary" />
  <TestComponent v-model="checked2" inputId="accent" label="Accent" type="accent" />
</template>

<script setup>
import { ref } from 'vue'
import TestComponent from '../TestComponent/TestComponent.vue'
const greeting = ref('Hello World!')

const checked1 = ref(false)
const checked2 = ref(false)
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
