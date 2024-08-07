<template>
    <div class="container">
        <router-link
        :to="{ name: 'eventShow' , params: { id: event.id } }">
            <div class="card-wrapper">
                <p>@ {{ event.time }} on {{ event.date }}</p>
                <h4>{{ event.title }}</h4>
                <p>{{ event.attendess.length }} attendess</p>

            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            event: {
                type: Object
            }
        }
    }
</script>

<style>
.container {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.card-wrapper {
    text-decoration: none !important;
    padding: 10px 0;
    width: 400px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 10px;
    margin-bottom: 10px;
}
</style>