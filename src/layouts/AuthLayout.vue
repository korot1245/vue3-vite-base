<template>
    <AuthHeader />
    <slot />
    <AuthFooter />
</template>

<script setup lang="ts">
import { AuthFooter, AuthHeader } from "./parts"
</script>

<style scoped></style>