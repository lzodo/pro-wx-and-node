<template>
    <div class="bar-home">
        <Header></Header>
        <LyTab></LyTab>
        <Swiper></Swiper>
        <TabBar pagePath="/home"></TabBar>
    </div>
</template>

<script>
import TabBar from "@/components/TabBar/index.vue";
import Header from "@/components/Header/index.vue";
import LyTab from "@/components/LyTab/index.vue";
import Swiper from "@/components/Swiper/Swiper.vue"
export default {
    name: "Home",
    components: {
        TabBar,
        Header,
        LyTab,
        Swiper
    },
    mounted(){
      console.log(this.mindate)
    }
};
</script>

<style lang="scss"></style>
