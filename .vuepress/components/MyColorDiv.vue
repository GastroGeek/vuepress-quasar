<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "MyColorDiv"
};
</script>

<style lang="stylus" scoped>
@import '~@variables';

div {
  color: $primary;
}
</style>