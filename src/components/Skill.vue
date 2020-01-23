<template>
  <div class="history">
   <img class="img" src="/assets/620.JPG" width="200">
    <div class="content" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
    <p> {{ text2 }} </p>
    <p> {{ text3 }} </p>
    <p> {{ text4 }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      name: 'サークル活動年表',
      text: '2017年5月 ロードバイク購入',
      text2: '2018年2月 四国最南端の岬「足摺岬」到達',
      text3: '2018年8月 日本国道最高地点到達',
      text4: '2019年3月 沖縄最北端「辺戸岬」到達'
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
  display: inline-block;
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
}

</style>