<template>
    <div>
        <h2>List</h2>

        <EventCard 
        v-for="event in events"
        :key="event.id"
        :event="event" />

        <input type="text" v-model.number="incrementBy" />

        <button 
        type="button" 
        @click="increasecounter">
        increase</button>

        <p>{{ counter }}</p>
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from "@/axiosCalls/EventService.js";
import { mapState } from 'vuex';

export default {
    data() {
        return {
            events: [],
            incrementBy: 0
        }
    },
    components: {
        EventCard,
        ..mapState['counter']
    },
    methodes: {
        increasecounter() {
            this.$store.commit('INCREASE_COUNTER' , this.incrementBy)
        }
    },
    mounted() {
        EventService.getEvents()
        .then(r => {
            this.events = r.data
        })
        .catch(e => {
            console.log(e.r)
        })
    }
}
</script>

<style lang="scss" scoped>

</style>