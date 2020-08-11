<template>
  <div class="about">
    <h1>loading</h1>
    <div>{{lou}}</div>
  </div>
</template>
<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({
  name:'Load',
})
export default class Load extends Vue {
  @Prop({
    type:String,
    default:'周超然',
  })
  lou?:string
}
</script>>
