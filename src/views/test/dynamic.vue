<template>
    <div>
        <div>动态路由</div>
        <div>
            路由定义通过冒号定义参数名，访问路径设置值，页面通过 $route.params
            获取值
        </div>
        <br />
        $route.params.id => {{ $route.params.id }}
        <br />
        $route.params.name => {{ $route.params.name }}
        <br />
        <br />
        问题
        <br />
        参数改变不会调用生命周期钩子，需要 $watch 监听

        <br>
        通过 事件跳转 ,这里的 name 有id name两个参数的那个路由 name
        <br>
        router.push({ name: 'Dynamic', params: { id: 'par1',name:'par2' } })
        <br>
        <br>
        <br>
        <br>
        默认视图
        <br>
        <router-view></router-view>
        <br>
        视图名-viewName
        <br>
        <router-view name="viewName"></router-view>
        <br>
        prop {{keyxxx}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            params: "无",
        };
    },
    props:{
        keyxxx(){
            type:String
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log("$watch 下 created")
            }
        );
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
};
</script>
