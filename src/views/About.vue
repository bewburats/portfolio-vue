<script setup>
import Button from '../components/Button.vue';
</script>
 
<template>
  <div class="bg-about w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
    <div class="bg-element w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
            <div class="container mx-auto px-4 pt-16">
              <div class="flex flex-wrap justify-center items-center gap-3">
                <img class="m-10 object-cover rounded-full w-3/12" src="../../public/images/about-img.png" />
                <div class="pl-10 flex flex-col gap-6">
                  <p
                    class="text-slide text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-bslck font-black uppercase tracking-widest">
                    Hi , I'm Bew !
                  </p>
                  <p
                    class="text-2xl  text-balck font-light tracking-normal">

                    I want to be a Ux/Ui designer so I designed and <br />
                    developed this website to improve my skill and <br />
                    show my works . Hope you love it!
                  </p>
                  <router-link :to="{ name: 'work' }">
                        <Button text="Work →" btnType="secondary" />
                    </router-link>
                    
                </div>

              </div>
            </div>
          </div>
  </div>
</template>

<style>
.text-slide {
  animation:slide-up 2s;
}
@keyframes slide-up {
  from {
    opacity: 0.2;
    line-height: 200px;
  }
  to {
    opacity: 1;
     line-height: 70px;
  }
}

</style>