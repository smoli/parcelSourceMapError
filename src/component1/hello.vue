<template>
  <div>Hello, {{  $store.state.who }} </div>
  <button @click="onClick1">Click EX1</button>
  <button @click="onClick2">Click EX2</button>
</template>

<script>
export default {
  name: "Hello",
  inject: ["ex1", "ex2"],

  methods: {
    async onClick1() {
      await this.ex1.doSome1();
    },
    onClick2() {
      this.ex2.doSome1();
    }
  }
}
</script>

<style scoped>

</style>