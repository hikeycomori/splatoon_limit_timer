<template>
    <div class="container" v-if="isShowTimer" ref="container">
        <div class="bg" :style="{ 'background-image': `url(${stageImgUrl})` }"></div>
        <div class="overlay"></div>
        <div class="weapons">
            <figure class="weapon" v-for="weapon in weaponImgUrls">
                <img :src="weapon" />
            </figure>
        </div>
        <div class="timer">
            {{ `${hour}:${munites}:${seconds}` }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTimer } from '~~/compositions/useTimer';

const res = ref<any>(null);
const container = ref<HTMLElement | null>(null);

const stageImgUrl = computed(() => res.value?.results[0].stage.image)
const weaponImgUrls = computed(() => res.value?.results[0].weapons.map((v: any) => v.image))

const url = "https://spla3.yuu26.com/api/coop-grouping/schedule";
const raw = await fetch(url)
res.value = await raw.json()

const { hour, munites, seconds, isShowTimer } = useTimer(res.value.results[0].end_time)
</script>

<style scoped lang="scss">
.container {
    height: 160px;
    width: 900px;
    padding: 0px 24px;
    position: relative;
    display: flex;
    align-items: center;
}

.bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 1;
    background-size: cover;
    background-position: 0% 20%;
    background-repeat: no-repeat;
}

.overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}

.weapons {
    width: 50%;
    height: 60%;
    z-index: 1;
    display: flex;
    gap: 10px;

    .weapon {
        border-radius: 10px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        backdrop-filter: blur(3px);
        background: rgba(255, 255, 255, 0.9);
        opacity: 0.95;

        img {
            width: 100%;
            height: auto;
        }
    }
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