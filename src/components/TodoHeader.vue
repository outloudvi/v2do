<template>
  <h1 class="ui header">
    To-do list
    <div class="ui horizontal label">{{ finlength }} / {{ length }}</div>
    <div class="ui button small" v-show="showfinished === false" @click="toggleFinished">Show finished</div>
    <div class="ui button small" v-show="showfinished" @click="toggleFinished">Hide finished</div>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TodoHeader extends Vue {
  @Prop() public showfinished!: boolean;
  @Prop() private finlength!: number;
  @Prop() private length!: number;

  @Emit('toggle-show-finished')
  public toggleFinished() {
    return;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
