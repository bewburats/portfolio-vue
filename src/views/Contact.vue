<script setup>

</script>
 
<template>
    <div class="bg-contact w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
        <div class="container mx-auto px-4 pt-16">

            <div class="flex flex-wrap-reverse justify-center items-center gap-3">

                <!-- <img class="hidden ig bounce-2 mr-10 object-cover xs:w-3/12 sm:w-3/12 lg:w-3/12 md:w-3/12 rounded-lg drop-shadow-2xl" src="/images/ig.png" /> -->
               <img class="m-4 hidden ig bounce-2 object-cover 2 sm:w-3/12 lg:w-3/12 md:w-3/12  md:block rounded-lg drop-shadow-2xl" src="/images/ig.png" />
                <div class="m-10 flex flex-col gap-6">
                    <p
                        class=" text-3xl  sm:text-5xl md:text-5xl lg:text-7xl text-balck font-black uppercase tracking-widest">
                        CONTACT
                    </p>

                    <a href="#"
                        class="m-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="font-normal text-gray-700 dark:text-gray-400">email</p>
                    </a>


                    <a href="#"
                        class="m-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="font-normal text-gray-700 dark:text-gray-400">github</p>
                    </a>


                    <a href="#"
                        class="m-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="font-normal text-gray-700 dark:text-gray-400">Instragram</p>
                    </a>

                    <a href="#"
                        class="m-2  block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="font-normal text-gray-700 dark:text-gray-400">facebook</p>
                    </a>

                    <a href="#"
                        class="m-2  block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="font-normal text-gray-700 dark:text-gray-400">Phone</p>
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