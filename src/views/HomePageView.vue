<script setup>
import { ref, onMounted } from 'vue'
import { isMobileUse } from '@/utils/utils'
import HomePage from '../components/HomePage.vue'
import HomePageMobile from '../components/HomePageMobile.vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = isMobileUse().value
})
</script>

<template>
  <main>
    <component :is="isMobile ? HomePageMobile : HomePage" />
  </main>
</template>
