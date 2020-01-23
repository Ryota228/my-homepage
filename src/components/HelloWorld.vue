<template>
  <div class="hello">
   <img class="img" src="../assets/1376.jpg" width="200">
    <h1>{{ msg }}</h1>
    <h2>My SNS Account</h2>
    <ul>
      <li>
        <a
          href="https://twitter.com/ritsbic"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ritsbic/"
          target="_blank"
        >
          Instagram
        </a>
      </li>
    </ul>
    <h2>My Favorite Homepage</h2>
    <ul>
      <li>
        <a
          href="https://www.nintendo.co.jp/"
          target="_blank"
        >
          Nintendo
        </a>
      </li>
      <li>
        <a
          href="https://www.apple.com/jp/"
          target="_blank"
        >
          Apple
        </a>
      </li>
      <li>
        <a
          href="https://www.amazon.co.jp/ref=nav_logo"
          target="_blank"
        >
          Amazon
        </a>
      </li>
      <li>
        <a
          href="http://www.ritsumei.ac.jp/infostudents/"
          target="_blank"
        >
          Ritsumeikan
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Homepage!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
