<template>
    <div class="HomeIcons">
        <ul class="list">
            <li class="item" v-for="item in iconList" :key="item.id">
                <div class="img">
                    <img :src="item.src" />
                </div>
                <span class="font">{{ item.font }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    naem: "HomeIcons",
    data() {
        return {
            iconList: [
                { id: 1, src: "./static/images/ico2.png", font: "自饮茶" },
                { id: 2, src: "./static/images/ico2.png", font: "品牌差" },
                { id: 3, src: "./static/images/ico3.png", font: "茶具" },
                { id: 4, src: "./static/images/ico4.png", font: "领福利" },
                {
                    id: 5,
                    src: "./static/images/ico5.png",
                    font: "官方验证",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.HomeIcons{
    height: 200px;
    width: 100%;
    .list{
        height: 100%;
        display: flex;
        padding: 30px;
        li{
            height: 100%;
            .img{
                width: 100%;
                display: flex;
                margin-bottom: 10px;
                img{
                    width: 70%;
                    margin: 0 auto;
                }
            }
            .font{
                text-align: center;
                display: block;
                color:#222
                
            }
        }
    }
}
</style>
