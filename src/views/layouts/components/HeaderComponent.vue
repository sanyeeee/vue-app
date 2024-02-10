
<template>
    <ul>
        <MenuItem :title="'Homepage'" :url="'/'" />
        <MenuItem :title="'Sign up'" :url="'/sign-up'" />
        <MenuItem :title="'Sign in'" :url="'/sign-in'" />
    </ul>
</template>

<script>
import MenuItem from './MenuItemComponent.vue'

export default {

    components: {
        MenuItem
    }
}
</script>
