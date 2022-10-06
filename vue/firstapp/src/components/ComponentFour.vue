<template>
    <div>
        <h2>Component 4 - Events</h2>
        <button v-on:click="getData()"> Click Me1 </button>
        <button v-on:click="getName('santosh kumar')" v-on:dblclick="getName('double click')"> Click Me2 </button>
        <button v-on:click="increaseNumber()">Increment</button>
        <button v-on:click="decreaseNumber()">Decrement</button>
        <h3>{{number}}</h3>
    </div>
</template>
<script>
export default{
    name: "ComponentFour",
    data(){
        return{
            name: "santosh kumar",
            email: "santosh@carzso.com",
            number:0
        }
    },
    methods: {
        getData(){
            alert(this.name+ " " +this.email)
        },
        getName(a){
            alert(a);
        },
        increaseNumber(){
            this.number = this.number + 1;
        },
        decreaseNumber(){
            this.number = this.number - 1;
        },
    },
}
</script>