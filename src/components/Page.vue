<script setup>

import Navbar from "./Navbar.vue";
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

    for (const b of document.getElementsByClassName('tab_bar_btn')) {
        b.addEventListener('click', () => sound())
    }
})

</script>

<template>
    <Navbar></Navbar>
    <div class="bg"></div>
    <slot></slot>
    <FooterBar></FooterBar>


</template>

<style scoped>

</style>