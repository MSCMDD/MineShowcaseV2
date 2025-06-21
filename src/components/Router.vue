<script setup>

const TABLE = {
    home: {display: "首页", link: "/"},
    list: {display: "服务器列表", link: "/servers.html"}
}

defineProps({
    path: Array,
    customLink: String
})

function display(id) {
    if (TABLE[id] === null || TABLE[id] === undefined) {
        return id;
    }

    return TABLE[id].display;
}

function link(id) {
    if (TABLE[id] === null || TABLE[id] === undefined) {
        return this.prop;
    }

    return TABLE[id].link;
}

</script>

<template>
    <nav class="router">
        <span style="color: #efefef">当前位置 >> </span>
        <template v-for="(name,idx) in path">
            <a class="link-item" v-if="idx!==path.length-1" :href="link(name)">{{ display(name) }}</a>
            <a class="link-item-active" v-if="idx===path.length-1" :href="link(name)">{{ display(name) }}</a>
            <span v-if="idx!==path.length-1"> / </span>
        </template>
    </nav>
</template>

<style scoped>
.link-item{
    color: #bbbbbb;
}

.link-item-active{
    color: #FFFFFF;
}

.router{
    margin-bottom: 15px;
}
</style>