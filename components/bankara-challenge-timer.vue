<template>
    <div class="container" v-if="isShowTimer" ref="container">
        <div class="stage"><img :src="firstStageImgUrl" /><img :src="secondStageImgUrl" /></div>
        <div class="overlay"></div>
        <div class="timer">
            {{ `${hour}:${munites}:${seconds}` }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTimer } from '~~/compositions/useTimer';

const res = ref<any>(null);
const container = ref<HTMLElement | null>(null);

const firstStageImgUrl = computed(() => res.value?.results[0].stages[0].image)
const secondStageImgUrl = computed(() => res.value?.results[0].stages[1].image)

const url = "https://spla3.yuu26.com/api/bankara-challenge/now";
const raw = await fetch(url)
res.value = await raw.json()

const { hour, munites, seconds, isShowTimer } = useTimer(res.value.results[0].end_time)

const diff = new Date(res.value.results[0].end_time).getTime() - new Date().getTime();

if (diff <= 0 && process.client) {
    location.reload();
}

</script>

<style scoped lang="scss">
.container {
    position: relative;
    height: 160px;
    width: 900px;
}

.stage {
    display: flex;
    height: 100%;

    img {
        flex: 1;
        height: 100%;
        object-fit: cover;
        filter: grayscale(15%);

    }
}

.timer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Orbitron', sans-serif;
    color: #fff;
    text-shadow: 2px 2px 5px rgb(0, 0, 0, 0.25), -2px 2px 5px rgb(0, 0, 0, 0.25), 2px -2px 5px rgb(0, 0, 0, 0.25), -2px -2px 5px rgb(0, 0, 0, 0.25);
    font-size: 60px;
}
</style>