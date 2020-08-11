import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
@Component({
    name: 'Search',
    components: {}
})
export default class Search extends Vue {
    render() {
        return <div id="app">
            <router-view />
        </div>
    }
};
