<template>
    <section class="todolist-section">
        <div class="container">
            <h2>This is Todo List</h2>
            <form action="#" method="get" v-on:submit="consoleNow()">
                <label for="title">
                    Title :
                </label>
                <br/>
                <input type="text" id="title" placeholder="Enter Title" required v-model="title"/>
                <br/>
                <br/>
                <label for="desc">
                    Description :
                </label>
                <br/>
                <textarea row="10" cols="30" id="desc" placeholder="Enter Description" v-model="desc"></textarea>
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    name: "TodoList",
    data(){
        return{
            name: "santosh kumar",
            email: "santosh@carzso.com",
            title: null,
            desc: null,
            todoList: [{
                title:null,
                desc:null
            }]
        }
    },
    methods: {
        consoleNow(){
            
            event.preventDefault();
            console.log("Title : ", this.title);
            console.log("Desc : ",this.desc);
        }
    },
}
</script>
<style scoped>
    .todolist-section{
        padding: 100px 0;
        height: 50vh;
    }
    .todolist-section h2{
        margin-bottom: 15px;
    }
    .todolist-section h2,
    .todolist-section form{
        text-align: left;
    }
</style>