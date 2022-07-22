<script setup>
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const goHome = () => {
    router.push({ name: 'home' });
};
</script>
 
<template>
    <div class="bg-contact w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
        <div class="container mx-auto px-4 pt-16">
            <div class="flex flex-wrap justify-center items-center gap-3">
                <img class="calender bounce-2 object-cover w-5/12" src="../../public/images/404.png" alt="404" />
                <div class="flex flex-col gap-6">
                    <p class="text-3xl text-gray-800 font-black uppercase tracking-widest">
                        404 PAGE NOT FOUND
                    </p>
                    <p class="text-xl text-gray-800 font-medium tracking-wider">
                        It's an error .<br />
                        The request url was not found on this.
                    </p>
                    <div class="flex flex-row">
                        <Button text="Go Home" btnType="secondary" @click="goHome" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
 
<style>
</style>