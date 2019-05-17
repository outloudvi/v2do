<template>
  <button v-if="!finished" v-on:click="toggleItem" class="ui button mini onfinish red">Close</button>
  <button v-else-if="finished" v-on:click="toggleItem" class="ui button mini onfinish green">Reopen</button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TaskBtn extends Vue {
  @Prop() public index!: number;
  @Prop() public finished!: number;

  @Emit('toggle-item')
  public toggleItem() {
    return this.index;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
