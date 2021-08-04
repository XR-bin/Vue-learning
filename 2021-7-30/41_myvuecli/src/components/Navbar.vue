<template>
  <div>
    Navbar
    <button @click="clickHandler">按键</button>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">

export default {
  methods: {
    clickHandler() {
      this.$emit("myevent")
    }
  }
}

</script>
