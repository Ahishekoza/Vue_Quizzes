<template>
  <router-link :to="`/quiz/${quize?.id}`" class="w-[310px] overflow-hidden  cursor-pointer border border-red-500 p-2 rounded-md">
    <img class=" w-full h-[190px] object-cover" :src="quize?.img"/>
    <div>
       <h2>{{ quize?.name }}</h2>
       <p>{{ quize.questions.length }} questions</p> 
    </div>
  </router-link>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps(['quize'])
</script>

<style>

</style>