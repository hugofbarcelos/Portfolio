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
                <div class="backgroundImg">
                    <img src="../backgroundImage.jpg" alt="">
                </div>
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
    transform: scale(1.1)
}

.header {
    display: flex;
    justify-content: center;
    background-color: rgb(56, 56, 240);
}

.logo_container{
    font-size: 14px;
}

.logo_container h1{
    color: white;   
}

.backgroundImg {
    background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}

</style>
