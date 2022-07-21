<script setup>
import Button from '../components/Button.vue';
</script>
 
<template>
    <div class="bg-home w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
        <div class="container mx-auto px-4 pt-16">
            <div class="flex flex-wrap-reverse justify-center items-center gap-3">
                <div class="flex flex-col gap-6 text-center">
                    <div class="typewriter-text">
                        <p
                            class="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-gray-900 font-black uppercase tracking-widest">
                            BURATSAKORN
                        </p>
                    </div>
                    <p
                        class="text-xl  xs:text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-normal tracking-normal">
                        welcome to my space <br />
                        think draft draw , and do it !
                    </p>
                    <router-link :to="{ name: 'about' }">
                        <Button text="View More →" btnType="primary" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style>
.typewriter-text {
    overflow: hidden;
    position: relative;
    width: 100%;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 38px;
    white-space: nowrap;

    animation: typewriter 2s steps(44) 1 normal both,
        blinkTextCursor 900ms steps(9) infinite normal;

}


@keyframes typewriter {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blinkTextCursor {

    from {
        border-right-color: rgba(0, 0, 0, 0.75);
    }

    to {
        border-right-color: transparent;
    }

}
</style>