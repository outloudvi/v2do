// Component definition
Vue.component('Taskbtn', {
    props: ['index', 'finished'],
    template: `
    <button v-if="!finished" v-on:click='removeItem(index)' class='ui button mini onfinish red'> Close </button>
    <button v-else-if="finished" v-on:click='readdItem(index)' class='ui button mini onfinish green'> Reopen </button>
`.trim(),
    methods: {
        removeItem: function (index) {
            app.todos[index].finished = true
        },
        readdItem: function (index) {
            app.todos[index].finished = false
        }
    }
})

Vue.component('Taglist', {
    props: ['tags'],
    template: `
<span>
<span v-for="tag in tags">#{{ tag }} </span>
</span>
`.trim()
})

Vue.component('Todoitem', {
    props: ['index', 'item', 'createtime'],
    template: `
<div :class="{ todoDone: item.finished }">
<span class="todoTitle">{{ item.text }}</span>
<br />
#{{index}} - 
{{ createtime }} - 
<span v-if="item.tags.length"><Taglist v-bind:tags="item.tags"></Taglist> - </span>
<Taskbtn v-bind:index="index" v-bind:finished="item.finished"></Taskbtn>
</div>
`.trim()
})

Vue.component('Todoheader', {
    props: ['todos', 'showfinished'],
    template: `
    <h1 class="ui header">
            To-do list
            <div class="ui horizontal label"> {{ finishedCount }} / {{ todos.length }}</div>
            <div class="ui button small" v-show="showfinished === false" @click="showFin"> Show finished </div>
            <div class="ui button small" v-show="showfinished" @click="hideFin"> Hide finished </div>
    </h1>
`.trim(),
    computed: {
        finishedCount: function () {
            return this.todos.filter(x => !x.finished).length
        }
    },
    methods: {
        showFin: function () {
            app.showfinished = true
        },
        hideFin: function () {
            app.showfinished = false
        }
    }
})

Vue.component('Todolist', {
    props: ['todos', 'showfinished'],
    template: `
    <div id="todoList">
        <div v-for="(item, index) in todos" v-if="showfinished || !item.finished" :key="index">
            <Todoitem v-bind:index="index" v-bind:item="item"
                v-bind:createtime="new Date(item.createts).toLocaleString()"></Todoitem>
        </div>
    </div>
`.trim()
})

// Vueify
var app = new Vue({
    el: '#app',
    data: {
        showfinished: false,
        todos: [
            {
                text: "Something done",
                createts: new Date(),
                finished: true,
                tags: []
            }
        ]
    }
})

// Listeners
const $inpAdd = $('#inpAdd')
const $inpText = $('#inpText')

$inpAdd.click(() => {
    let val = $inpText.val();
    if (val === "") return;
    let tagList = []
    let untaggedStr = []
    for (i of val.split(' ')) {
        if (i[0] === '#') tagList.push(i.slice(1))
        else untaggedStr.push(i)
    }
    app.todos.push({
        text: untaggedStr.join(' '),
        createts: new Date(),
        finished: false,
        tags: tagList
    })
    $inpText.val("")
})
$('#inpText').keypress((e) => {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        $inpAdd.click()
    }
})