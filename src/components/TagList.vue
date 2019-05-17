<template>
  <span>
    <span v-for="tag in tags" :key="tag">#{{ tag }} </span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TagList extends Vue {
  @Prop() public tags!: string[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
