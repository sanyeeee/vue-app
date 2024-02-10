
<template>
    <div>
        Homepage works!
        <div>
            <button class="btn btn-primary"
                @click.prevent="shareData()"
                :class="{}"
            >Share data</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    /**
     * Data
     */
    data() {
        return {
            characters: []
        };
    },

    /**
     * Created event
     */
    created() {
        this.initialize();
    },

    methods: {

        /**
         * Initialize data
         */
        initialize() {
            axios.get('https://rickandmortyapi.com/api/character')
                .then((response) => {
                    this.characters = response.data.results
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        /**
         * Share data
         */
        shareData() {
            this.$emit('shareData_', {});
        }
    }
}
</script>
