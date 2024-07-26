<template>
  <div class="flex items-center gap-10 py-10">
    <h1 class="font-semibold text-3xl">Quizzes</h1>
    <input 
      type="text" 
      :value="search" 
      @input="$emit('update:search',$event.target.value)"
      class="border border-red-400 focus:border-none focus:border-transparent p-2" 
      placeholder="Search ..."
    />
  </div>
</template>

<script setup>
import { defineProps ,defineEmits} from 'vue'
defineEmits(['update:search'])

const props = defineProps({
  search: String,

  
})
</script>

<style>
/* Add your styles here if needed */
</style>
