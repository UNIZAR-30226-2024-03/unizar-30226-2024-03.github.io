<script setup>
import { useStore } from '@/globalState/playerState'

const bears = useStore(state => state.bears)
</script>

<template>
  <h1>{{ bears }} around here ...</h1>
</template>