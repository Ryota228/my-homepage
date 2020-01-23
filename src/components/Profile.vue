<template>
  <div class="profile">
   <img class="img" src="../assets/005.jpg" width="200">
    <div class="content" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
    <p> {{ text2 }} </p>
    <p> {{ text3 }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: '私のプロフィール',
      text: '2016年 静岡県立磐田西高等学校普通科卒業',
      text2: '2017年 立命館大学情報理工学部情報理工学科入学',
      text3: '2019年 立命館大学情報理工学部情報理工学科卒業予定'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #bebebe;
  display: inline;
  margin: 10px;
  width: 80%;
}

h3 {
  color: black;
}

p {
  width: 70%;
  display: inline-block;
  text-align: left;
}

</style>