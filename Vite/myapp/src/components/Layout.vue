<template>
  <div>
    <Sidebar v-if="myShow"></Sidebar>
    <Content></Content>
  </div>
</template>

<script>

import Content from './Content.vue'
import Sidebar from './Sidebar.vue'

export default {
  components:
  {
    Content,
    Sidebar
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
  },
  props:["myShow"]

}
</script>