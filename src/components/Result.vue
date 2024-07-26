<template>
    <div class="flex flex-col gap-5 justify-center items-center h-full">
        <h1 class="text-2xl font-semibold">correct-Answers:-{{correctAnswers}}</h1>
        <router-link to="/" class="px-2 py-1 bg-orange-300">Go Back</router-link>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps(['correctAnswers'])
</script>

<style>

</style>