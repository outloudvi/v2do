<template>
  <div :class="{ todoDone: item.finished }">
    <span class="todoTitle">{{ item.text }}</span>
    <br>
    #{{index}} -
    {{ new Date(item.createts) }} -
    <span v-if="item.tags.length">
      <TagList v-bind:tags="item.tags"></TagList> -
    </span>
    <TaskBtn v-bind:finished="item.finished" v-bind:index="index" v-on:toggle-item="toggleItem"></TaskBtn>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import TagList from './TagList.vue';
import TaskBtn from './TaskBtn.vue';
import { tsTodoItem } from './tsUtils';

@Component({
  components: { TaskBtn, TagList },
})
export default class TodoItem extends Vue {
  @Prop() public index!: number;
  @Prop() public item!: tsTodoItem;

  @Emit('toggle-item')
  public toggleItem(index: number) {
    return index;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
