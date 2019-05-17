<template>
  <div class="ui container">
    <h1 class="ui header">The To-do List</h1>
    <TodoHeader
      v-bind:showfinished="showfinished"
      v-bind:length="todos.length"
      v-bind:finlength="todos.filter(item => item.finished).length"
      v-on:toggle-show-finished="toggleFinished"
      v-on:archive-finished="archiveFinished"
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
    <TodoAdd id="todoAdd" v-on:add-todo="addTodo"></TodoAdd>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoAdd from "./TodoAdd.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import { getFromLocalStorage, saveToLocalStorage, tsTodoItem } from "./tsUtils";

@Component({
  components: { TodoItem, TodoAdd, TodoHeader }
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

  public archiveFinished() {
    this.todos = this.todos.filter(item => !item.finished)
  }

  public addTodo(item: tsTodoItem) {
    this.todos.push(item);
  }

  private showList() {
    return this.todos.filter(item => this.showfinished || !item.finished);
  }

  @Watch('todos', { deep: true })
  onTodoChange(val: tsTodoItem[], oldval: tsTodoItem[]) {
    saveToLocalStorage(val);
  }

  constructor() {
    super();
    this.todos = getFromLocalStorage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin-top: 24px !important;
}

#todoAdd {
  margin-top: 10px;
}
</style>
