<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  btnType: {
    type: String,
    default: 'primary',
  },
});

const btnTypes = {
  primary: [' bg-gradient-to-br from-purple-300 to-pink-200','hover:bg-gradient-to-bl ', 'text-black', 'hover:text-white', 'border-white'],
  secondary: [' border-purple-400', 'text-black', 'hover:text-white','hover:bg-purple-500'],
};
</script>

<template>
  <div>
    <button
      type="button"
      class="font-medium border-2 focus:outline-none rounded-3xl text-base xs:text-base sm:text-base md:text-xl lg:text-xl px-10 py-2.5 text-center mr-2 mb-2 "
      :class="[btnTypes[btnType]]"
    >
      {{ text }}
    </button>
  </div>
</template>

<style scoped>
</style>
