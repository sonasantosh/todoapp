<template>
    <h2>Component 2 - Interpolation and Data</h2>
    <h2>Name: {{name}}</h2>
    <h2>Email: {{email}}</h2>
    <h2>Get Name: {{getName("santosh-kumar")}}</h2>
</template>
<script>
export default{
    name: "ComponentTow",
    data(){
        return{
            name: "Santosh Kumar",
            email: "santosh.kumar@carzso.com",
            getName: function(a){
                return a;
            }
        }
    }
}
</script>