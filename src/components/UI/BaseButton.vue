<template>
  <div>
    <button v-if="!link" @click="handleClick">
      <slot></slot>
    </button>
    <router-link v-else :to="to">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default{
  props: {
    link: {
      type: Boolean,
      default: false
    },
    to: {
    }
  },
  emits: ['click'],
  methods: {
    handleClick(){
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
button, a{
  border: 1px solid black;
  padding: 0.7rem 2rem; 
  cursor: pointer; 
  display: inline-block;
  box-shadow: 5px 2px 5px teal;
  text-decoration: none;
  color: #000;
}
</style>