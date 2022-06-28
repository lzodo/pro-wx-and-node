<template>
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
                <img src="../../assets/images/banner1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/images/banner2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/images/banner3.jpg"/>
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
 // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

export default {
    data() {
        return {};
    },
    mounted() {
        const swiper = new Swiper(".swiper", {
            // Optional parameters
            loop: true,
            modules: [Navigation, Pagination],

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        });
    },
};
</script>

<style lang="scss" scoped>
.swiper {
    background: #eee;
    width: 100%;
    height: 300px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
