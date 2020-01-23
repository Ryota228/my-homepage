<template>
  <div class="output">
   <img class="img" src="../assets/1425.jpg" width="200">
    <div class="content" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
    <h3> {{ name2 }} </h3>
    <p> {{ text2 }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      name: '趣味でロードバイクに乗っています',
      text: '北海道や沖縄に行って，ロードバイクで旅しました.',
      name2: 'BKC自転車サークルで部長を務めていました',
      text2: 'BKCの自転車サークルRitsBICで26代目の部長を務めていました.'
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
  display: inline;
  margin: 10px;
  width: 60%;
}

h3 {
  color: black;
}

p {
  width: 80%;
  display: inline-block;
  text-align: left;
  background-color: #bebebe;
}

</style>