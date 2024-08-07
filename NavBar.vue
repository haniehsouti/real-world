<template>
    <div>
        <nav>
            <router-link :to="{ name: 'events' }">List</router-link> |
            <router-link :to="{ name: 'eventCreate' }">Create</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>