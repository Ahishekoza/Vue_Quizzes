<template>
  <div class="flex flex-col gap-10">
    <div>
        <h1>
            {{ question?.text }}
        </h1>
    </div>
    <div class="flex flex-col gap-2">
        <div v-for="(option , index) in question?.options" :key="index" @click="$emit('update:option', option?.isCorrect)" class="flex items-center w-[500px]  cursor-pointer bg-orange-200 gap-4">
            <p class=" bg-orange-300 p-2 h-full">{{ option.label }}</p>
            <h4>{{ option.text }}</h4>
        </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps,defineEmits} from 'vue'
 defineProps(['question'])
 defineEmits(['update:option'])

</script>

<style></style>
