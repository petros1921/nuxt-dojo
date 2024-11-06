<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 font-bold" style="font-size: 5rem;">{{ error.statusCode }}</p>
        <p class="mt-7" style="font-size: 3rem;">Ooops.</p>
        <p class="mt-7 text-xl">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>