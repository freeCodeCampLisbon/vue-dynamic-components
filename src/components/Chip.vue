<template functional>
  <span class="chip" v-text="props.text" />
</template>
<script>
export default {
  props: {
    text: {
      required: false,
      type: String
    }
  }
};
</script>
<style scoped>
.chip {
  background: #090a23;
  color: white;
  text-transform: capitalize;
  padding: 5px 10px;
  margin: 5px;
  display: inline-block;
  border-radius: 3px;
}
</style>
