<template>
  <div>
    <div id="divInput" class="ui input">
      <input type="text" id="inpText" v-model="text" placeholder="New todo...">
    </div>
    <input type="button" id="inpAdd" v-on:click="addItem" class="ui button primary" value="Add">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import tsTodoItem from './tsTodoItem';

@Component
export default class TodoAdd extends Vue {
  private text: string = '';

  public addItem() {
    this.$emit('add-todo', new tsTodoItem(this.text, Number(new Date()), []));
    this.text = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
