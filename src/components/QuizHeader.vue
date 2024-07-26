<template>
  <div class="flex flex-col mt-20 gap-2 ">
    <h4>Question {{ questionStatus }}</h4>
    <div class=" w-[300px] h-[50px] border border-orange-200">
        <div class="h-full w-0  bg-orange-200" :style="{width:barPercentage}">
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps(['questionStatus','barPercentage'])
</script>

<style></style>
