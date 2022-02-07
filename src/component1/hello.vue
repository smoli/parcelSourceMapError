<template>
  <div>Hello, {{  $store.state.who }} </div>
  <button @click="onClick">Click me</button>
</template>

<script>
export default {
  name: "Hello",
  inject: ["ex1"],

  methods: {
    async onClick() {
      await this.ex1.doSome1();
    }
  }
}
</script>

<style scoped>

</style>