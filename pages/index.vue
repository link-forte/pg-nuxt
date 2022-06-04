<template>
    <main>
        <h1 class="header">{{ title }}</h1>
        <NuxtLink to="/about">
            About
        </NuxtLink>
    </main>
</template>

<script>
export default {
    data () {
        return {
            title: 'Home',
        }
    }
}
</script>

<style scoped>
.header {
    color: red;
}
</style>

