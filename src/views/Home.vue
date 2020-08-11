<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Load :lou='xingming'></Load>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import Load from 'components/Load.vue';
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
@Component({
  name:'Home',
  components:{
    Load,
  }
})
export default class Home extends Vue{
 xingming:string = '刘华'
};
</script>
