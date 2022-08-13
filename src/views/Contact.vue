<script setup>

</script>
 
<template>
  <div class="bg-contact w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
    <div class="container mx-auto px-4 pt-16">

      <div class="flex flex-wrap-reverse justify-center items-center gap-3">
        <img
          class="m-4 mr-10 hidden ig bounce-2 object-cover 2 sm:w-3/12 lg:w-3/12 md:w-3/12  md:block rounded-lg drop-shadow-2xl"
          src="../../public/images/element-home-1.png" alt="element-home" />
        <div class="m-14 flex flex-col gap-4">

          <p
            class="text-center text-2xl sm:text-5xl md:text-5xl lg:text-7xl text-gray-800 font-black uppercase tracking-widest">
            CONTACT
          </p>
          <p> personal account</p>

          <a href="mailto:bew25442@gmail.com"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-fit hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="flex md:block object-cover w-1/12 ml-3 m-2 sm:w-1/12" src="../../public/images/email.png"
              alt="email">
            <div class="flex flex-col justify-between m-3 leading-normal">
              <p class="font-semibold text-base sm:text-lg sm:font-semibold text-gray-700 dark:text-gray-400">
                buratsakorn.boon@gmail.com</p>
            </div>
          </a>


          <a href="https://www.instagram.com/_bburats_/"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-fit hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="flex md:block object-cover w-1/12 ml-3 m-2 sm:w-1/12" src="../../public/images/instragram.jpg"
              alt="instragram">
            <div class="flex flex-col justify-between m-3 leading-normal">
              <p class="font-semibold text-base sm:text-lg sm:font-semibold text-gray-700 dark:text-gray-400">@_bburats_
              </p>
            </div>
          </a>

          <p>work account</p>

          <a href="https://www.behance.net/buratsboonma"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-fit hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="flex md:block object-cover w-1/12 ml-3 m-2 sm:w-1/12 rounded"
              src="../../public/images/Behance.jpg" alt="Behance">
            <div class="flex flex-col justify-between m-3 leading-normal">
              <p class="font-semibold text-base sm:text-lg sm:font-semibold text-gray-700 dark:text-gray-400">
                Bursatsakorn Boonma</p>
            </div>
          </a>

          <a href="https://www.instagram.com/bewyour.concept/"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-fit hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="flex md:block object-cover w-1/12 ml-3 m-2 sm:w-1/12" src="../../public/images/instragram.jpg"
              alt="instragram">
            <div class="flex flex-col justify-between m-3 leading-normal">
              <p class="font-semibold text-base sm:text-lg sm:font-semibold text-gray-700 dark:text-gray-400">
                @bewyour.concept</p>
            </div>
          </a>

          <a href="https://github.com/bewburats"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-fit hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="flex md:block object-cover w-1/12 ml-3 m-2 sm:w-1/12" src="../../public/images/github.png"
              alt="github">
            <div class="flex flex-col justify-between m-3 leading-normal">
              <p class="font-semibold text-base sm:text-lg sm:font-semibold text-gray-700 dark:text-gray-400">
                bewburats</p>
            </div>
          </a>

        </div>

      </div>
    </div>
  </div>

</template>
 
<style>
.ig {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}

.bounce-2 {
  animation-name: bounce-2;
  animation-timing-function: ease;
}

@keyframes bounce-2 {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-5);
  }

  50% {
    transform: translateY(-10px);
  }

  75% {
    transform: translateY(-5);
  }

  100% {
    transform: translateY(0);
  }
}
</style>