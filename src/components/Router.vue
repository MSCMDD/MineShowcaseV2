<script setup>
const TABLE = {
  home: { display: "首页", name: "home" },
  list: { display: "服务器列表", name: "servers" },
  servers: { display: "服务器列表", name: "servers" },
};

defineProps({
  path: Array,
  customLink: String,
});

function display(id) {
  if (TABLE[id] === null || TABLE[id] === undefined) {
    return id;
  }

  return TABLE[id].display;
}

function getRouteName(id) {
  if (TABLE[id] === null || TABLE[id] === undefined) {
    return null;
  }

  return TABLE[id].name;
}
</script>

<template>
  <nav class="router">
    <span style="color: #efefef">当前位置 >> </span>
    <template v-for="(name, idx) in path" :key="idx">
      <router-link
        v-if="idx !== path.length - 1 && getRouteName(name)"
        class="link-item"
        :to="{ name: getRouteName(name) }"
      >
        {{ display(name) }}
      </router-link>
      <span v-else-if="idx !== path.length - 1" class="link-item">
        {{ display(name) }}
      </span>
      <span v-if="idx === path.length - 1" class="link-item-active">
        {{ display(name) }}
      </span>
      <span v-if="idx !== path.length - 1"> / </span>
    </template>
  </nav>
</template>

<style scoped>
.link-item {
  color: #bbbbbb;
}

.link-item-active {
  color: #ffffff;
}

.router {
  margin-bottom: 15px;
}
</style>
