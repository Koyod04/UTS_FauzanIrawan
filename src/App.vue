<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LeftNav from '@/components/navbar/LeftNav.vue'
</script>


<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="APLIKASI PENJADWALAN"></v-app-bar>


    <LeftNav></LeftNav>

    <v-main class style="min-height: 300px;">
      <RouterView></RouterView>
    </v-main>
  </v-layout>
</template>

