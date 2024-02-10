
<template>
    <li>
        {{ title }}
    </li>
</template>

<script>
export default {

    /**
     * Options
     */
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
