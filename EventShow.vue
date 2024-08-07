<template>
    <h2>show event #{{ id }}</h2>
    <p>{{ event.title }}</p>
</template>

<script>
import EventService from "@/axiosCalls/EventService.js"

export default {
    props: ['id'],
    data() {
        return {
            event: {}
        }
    },
    mounted() {
        EventService.getEvent(this.id)
        .then(r => {
            this.event = r.data
        })
        .catch(e => {
            console.log(e.r)
        })
    }
}
</script>