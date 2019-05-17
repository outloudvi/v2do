<template>
  <h1 class="ui header">
    To-do list
    <div class="ui horizontal label">{{ finlength }} / {{ length }}</div>
    <div class="ui button small" v-show="showfinished === false" @click="toggleFinished">Show finished</div>
    <div class="ui button small" v-show="showfinished" @click="toggleFinished">Hide finished</div>
    <div class="ui button small" v-show="finlength > 10" @click="cleanFinshed">Archive finished</div>
  </h1>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoHeader extends Vue {
  @Prop() public showfinished!: boolean;
  @Prop() private finlength!: number;
  @Prop() private length!: number;

  @Emit('toggle-show-finished')
  public toggleFinished() {
    return;
  }

  @Emit('archive-finished')
  public cleanFinshed() {
    return;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
