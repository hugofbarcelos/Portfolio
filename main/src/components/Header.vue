<template>
  <html lang="en">
<body>
    <header>
        <div class="header">
            <div class="inner_header">
                <div class="logo_container">
                    <h1>MY <span>SITE</span></h1>
                </div>
            </div>
        </div>
    </header>
</body>
</html>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

.header {
    width: 100%;
    height: 60px;
    display: block;
    background-color: rgb(56, 56, 240);
}

.inner_header{
    width: 1000px;
    height: 100%;
    display: block;
    margin: 0 auto;
    background-color: rgb(4, 15, 15);
}

.logo_container{
    height: 100%;
    display: table;
    float: left;
}

.logo_container h1{
    color: white;
    height: 100%;
    display: table-cell;
    
}
</style>
