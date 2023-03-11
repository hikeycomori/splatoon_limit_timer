export const useTimer = (endtime: string) => {
    const timerId = ref<number>(0);
    const diff = ref<number | null>(null);
    const hour = ref<string | null>(null);
    const munites = ref<string | null>(null);
    const seconds = ref<string | null>(null);
    const isShowTimer = computed(() => hour.value !== null && munites.value !== null && seconds.value != null);

    const pad = (val: number) => String(val).padStart(2, '0');

    const calcTime = () => {
        diff.value = new Date(endtime).getTime() - new Date().getTime();
        hour.value = pad(Math.trunc(diff.value / (1000 * 60 * 60)));
        munites.value = pad(Math.trunc((diff.value / (1000 * 60))) % 60);
        seconds.value = pad(Math.trunc(diff.value / 1000) % 60);
    }

    onMounted(async () => {
        calcTime()
        timerId.value = window.setInterval(calcTime, 1000)
    })

    onBeforeUnmount(() => {
        window.clearInterval(timerId.value);
    })

    return {
        hour,
        munites,
        seconds,
        isShowTimer
    }
}