<template>
  <div :class="{ todoDone: item.finished }">
    <span class="todoTitle">{{ item.text }}</span>
    <br>
    #{{index}} -
    {{ new Date(item.createts) }} -
    <span v-if="item.tags.length">
      <Taglist v-bind:tags="item.tags"></Taglist>-
    </span>
    <TaskBtn v-bind:finished="item.finished" v-bind:index="index" v-on:toggle-item="toggleItem"></TaskBtn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import tsTodoItem from './tsTodoItem';
import TaskBtn from './TaskBtn.vue';
import TagList from './TagList.vue';

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
