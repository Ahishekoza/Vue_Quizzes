<template>
  <div>
    <Header :search="search" @update:search="updateSearch"  />
    <div class="flex items-center gap-4 mt-20"><Card v-for="(quize,index) in quizes" :key="index" :quize="quize" /></div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import q from "@/data/quize.json";
import { ref  } from "vue";

const quizes = ref(q);
const search = ref("");

const handleSearch = () => {
  return quizes.value = q.filter(quize => quize.name.toLowerCase().includes(search.value.toLowerCase()))
}

const updateSearch =(searchValue)=>{
  search.value = searchValue
  handleSearch()
}

</script>

<style></style>
