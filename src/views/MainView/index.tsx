import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
@Component({
    name: 'main-view',
    components: {}
})
export default class MainView extends Vue {
    render() {
        return <div class='main-view'>
            <router-view />
        </div>
    }
};
