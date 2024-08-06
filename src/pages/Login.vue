<template>
    <AuthLayout>
        {{ $n(10000) }}
        <LoginForm />
    </AuthLayout>
</template>

<script setup lang="ts">

import { useDark, useToggle } from "@vueuse/core"
import { AuthLayout } from "@/layouts"
import { useHead } from '@unhead/vue'
import { LoginForm } from "@/components"

useHead({
    title: "Авторизация"
})

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<style scoped></style>