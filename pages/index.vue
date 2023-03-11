<template>
    <div class="container" v-if="isShowTimer">
        <div class="timer">
            {{ `${hour}:${munites}:${seconds}` }}
        </div>
    </div>

    <nuxt-link to="./image-timer">To Image Timer</nuxt-link>
</template>

<script setup lang="ts">
import { useTimer } from '~~/compositions/useTimer';
const res = ref<any>(null);

const url = "https://spla3.yuu26.com/api/coop-grouping/schedule";
const raw = await fetch(url)
res.value = await raw.json()

const { hour, munites, seconds, isShowTimer } = useTimer(res.value.results[0].end_time)
</script>

<style scoped>
.container {
    height: 300px;
    width: 900px;
    padding: 24px;
    position: relative;
    display: flex;
    align-items: center;
    background: black;
}

.timer {
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Orbitron', sans-serif;
    color: white;
    font-size: 60px;
    z-index: 1;
}
</style>