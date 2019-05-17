<template>
  <div>
    <h1 class="ui header">The To-do List</h1>
    <TodoHeader
      v-bind:showfinished="showfinished"
      v-bind:length="todos.length"
      v-bind:finlength="todos.filter(item => item.finished).length"
      v-on:toggle-show-finished="toggleFinished"
    ></TodoHeader>
    <div id="todoList">
      <div v-for="(item, index) in showList()" :key="index">
        <TodoItem
          v-bind:index="todos.indexOf(item)"
          v-bind:item="item"
          v-on:toggle-item="toggleItem"
        ></TodoItem>
      </div>
    </div>
    <TodoAdd v-on:add-todo="addTodo"></TodoAdd>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import tsTodoItem from './tsTodoItem';
import TodoAdd from './TodoAdd.vue';
import TodoItem from './TodoItem.vue';
import TodoHeader from './TodoHeader.vue';

@Component({
  components: { TodoItem, TodoAdd, TodoHeader },
})
export default class TodoList extends Vue {
  public todos: tsTodoItem[] = [];
  public showfinished: boolean = false;

  public toggleItem(id: number) {
    this.todos[id].finished = !this.todos[id].finished;
  }

  public toggleFinished() {
    this.showfinished = !this.showfinished;
  }

  public addTodo(item: tsTodoItem) {
    this.todos.push(item);
  }

  private showList() {
    return this.todos.filter((item) => this.showfinished || !item.finished);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
