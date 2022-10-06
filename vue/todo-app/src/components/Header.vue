<template>
    <header class="header">
        <div class="container">
            <div class="headerLogo">
                <a href="javascript:void(0);">
                    <h2>ToDoList</h2>
                </a>
            </div>
            <nav class="navigation">
                <ul>
                    <li>
                        <a href="#" class="nav-link">About Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    name: "homeHeader",
}
</script>
<style scoped>
    header{
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        top: 0;
        padding: 15px 0;
        background-color: #f0f0f0;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    }
    header .container{
        max-width: 1200px;
        width: 100%;
        padding: 0 15px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    header h2,
    header a{
        display: inline-block;
        color: #333333;
    }
    header nav ul{
        list-style-type: none;
    }
    header nav ul .nav-link{
        text-decoration: none;
    }
</style>