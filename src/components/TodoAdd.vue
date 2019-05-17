<template>
  <div class="ui grid">
    <div class="thirteen wide column">
      <div id="divInput" class="ui input">
        <input
          type="text"
          id="inpText"
          v-on:keyup="checkSubmission"
          v-model="text"
          placeholder="New todo..."
        >
      </div>
    </div>
    <div class="three wide column">
      <input type="button" id="inpAdd" v-on:click="addItem" class="ui button primary" value="Add">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { procTodoText, tsTodoItem } from './tsUtils';

@Component
export default class TodoAdd extends Vue {
  private text: string = '';

  public addItem() {
    const sub = procTodoText(this.text);
    this.$emit('add-todo', new tsTodoItem(sub.text, Number(new Date()), sub.tags));
    this.text = '';
  }

  public checkSubmission(event: any) {
    if (event.key !== 'Enter' || this.text.trim() === '') { return; }
    this.addItem();
    event.preventDefault();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#divInput {
  width: 100%;
}
</style>
