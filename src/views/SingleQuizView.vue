<template>
  <div class="flex flex-col gap-10">
    <QuizHeader :question-status="questionStatus" :bar-percentage="barPercentage" />

    <div>
      <Questions
        v-if="!showResults"
        :question="quiz?.questions[currentQuestionIndex]"
        @update:option="handleOption"
      />
      

      <Result v-else :correct-answers="numberOfCorrectQuestions"/>
      
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import q from "@/data/quize.json";
import { ref } from "vue";
import { computed } from "vue";
import QuizHeader from "@/components/QuizHeader.vue";
import Questions from "@/components/Questions.vue";
import Result from '@/components/Result.vue'
const route = useRoute();

const quiz = q.find((quiz) => quiz.id === parseInt(route.params.id));

const currentQuestionIndex = ref(0);
const numberOfCorrectQuestions = ref(0);
const showResults = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz?.questions?.length}`
);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz?.questions?.length) * 100}%`
);

const handleOption = (isOptionCorrect) => {
  if (isOptionCorrect) {
    numberOfCorrectQuestions.value++;
  }
  if (currentQuestionIndex.value === quiz?.questions?.length - 1) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<style></style>
