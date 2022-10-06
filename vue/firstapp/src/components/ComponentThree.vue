<template>
    <h2>Component 3 - Methods</h2>
    <h2>Name: {{name}}</h2>
    <h2>Email: {{email}}</h2>
    <h2>Get Name: {{getName("santosh.kumar")}}</h2>
    <h2>Get Name: {{getData().name}}</h2>
    <h2>Get Name: {{getData().email}}</h2>
</template>
<script>
export default{
    name: "ComponentThree",
    data(){
        return{
            name:"santosh kumar",
            email: "santosh@carzso.com"
        }
    },
    methods:{
        getName(a){
            return a;
        },
        getData(){
            return{
                name: "santosh",
                email: this.email
            }
        }
    },
}
</script>
