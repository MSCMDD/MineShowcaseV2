<script setup>
import {sound, validate} from "../assets/common.js";

defineProps({
  server: {},
});

import "../style.css";
</script>

<template>
  <div class="oreui-dark-card oreui-card" style="position: relative">
    <div
      class="server-image"
      :style="{ backgroundImage: `url(${server.cover_url})` }"
    >
      <div class="server-badges" v-if="server.is_member">
        <div class="server-badge member">
          <i class="fas fa-check"></i>成员服
        </div>
      </div>
    </div>

    <div class="server-content" style="padding-bottom: 100px">
      <div class="server-header">
        <h3>{{ server.name }}</h3>
        <span
          v-if="server.auth_mode === 'OFFICIAL'"
          class="server-status online"
          ><i class="fas fa-circle"></i>正版</span
        >
        <span
          v-if="server.auth_mode === 'OFFLINE'"
          class="server-status offline"
          ><i class="fas fa-circle"></i>离线登录</span
        >
        <span
          v-if="server.auth_mode === 'YGGDRASIL'"
          class="server-status third-party"
          ><i class="fas fa-circle"></i>第三方登录</span
        >
      </div>

      <div class="server-meta">
        <div class="meta-item">
          <span>延迟</span>
          <span v-if="validate(server.status)">{{
            parseInt(server.status.delay)
          }}</span>
          <span v-else>(离线)</span>
        </div>
        <div class="meta-item player-count">
          <span>玩家</span>
          <span v-if="validate(server.status)"
            >{{ server.status.players.online }}/{{
              server.status.players.max
            }}</span
          >
          <span v-else>(离线)</span>
        </div>
        <div class="meta-item">
          <span>IP</span>
          <span>{{ server.ip }}</span>
        </div>
      </div>

      <!-- 标签 -->
      <div class="server-tags">
        <template v-for="tag in server.tags">
          <span class="server-tag"><i class="fas fa-tag"></i>#{{ tag }}</span>
        </template>
      </div>

      <!--
            <div class="server-tags">
                <span class="server-tag version"><i class="fas fa-code-branch"></i>1.21.4</span>

                <template v-for="tag in server.gameplay">
                    <span class="server-tag version"><i class="fas fa-code-branch"></i>{{tag}}</span>
                </template>

                <template v-for="tag in server.tags">
                    <span class="server-tag version"><i class="fas fa-code-branch"></i>{{tag}}</span>
                </template>

                <span class="server-tag version"><i class="fas fa-code-branch"></i>1.21.4</span>
                <span class="server-tag survival"><i class="fas fa-tree"></i>生存</span>
                <span class="server-tag creative"><i class="fas fa-hammer"></i>创造</span>
                <span class="server-tag creative"><i class="fas fa-hammer"></i>建筑</span>
                <span class="server-tag custom"><i class="fas fa-tag"></i>Java版</span>
                <span class="server-tag custom"><i class="fas fa-tag"></i>纯净</span>
                <span class="server-tag custom"><i class="fas fa-tag"></i>友好社区</span>
            </div>
            -->
    </div>

    <div
      class="modal_button_area"
      style="position: absolute; bottom: 0; left: 0; right: 0"
    >
      <a
        :href="server.link"
        target="_blank"
        class="oreui-button modal_btn oreui-important-btn"
        >前往官网</a
      >
      <router-link
        :to="{ name: 'server-detail', params: { id: server.id } }"
        class="oreui-button modal_btn oreui-btn-normal"
        @click="sound()"
        >查看详情</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
