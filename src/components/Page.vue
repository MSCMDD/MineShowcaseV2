<script setup>

import Navbar from "./Header.vue";
import FooterBar from "./FooterBar.vue";

import '../assets/css/oreui.css'
import '../style.css'
import "../assets/fonts/fa/css/fa-all.min.css"
import {onMounted} from "vue";
import {sound} from "../assets/common.js";

onMounted(() => {
    for (const b of document.getElementsByClassName('oreui-button')) {
        b.addEventListener('click', () => sound())
    }

    for (const b of document.getElementsByClassName('oreui-tab-button')) {
        b.addEventListener('click', () => sound())
    }
})

</script>

<template>
    <Navbar></Navbar>
    <div class="bg"></div>

    <div style="height: 80px"></div>

    <div class="oreui-banner-area">
        <div class="oreui-banner oreui-bg-info">
            当前页面为预览版本，不保证与最终发布效果一致。
            出现任何问题请反馈：

            <a href="https://github.com/MSCPO/MineShowcaseV2/issues" style="display:inline;;text-decoration: underline" target="_blank">
                [点击此处]
            </a>

        </div>
    </div>

    <slot></slot>
    <FooterBar></FooterBar>


</template>

<style scoped>

</style>