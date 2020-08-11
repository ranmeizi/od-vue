import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
@Component({
  name: 'component',
  components: {}
})
export default class component extends Vue {
  render() {
    return <div>1</div>
  }
};
