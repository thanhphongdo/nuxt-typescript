import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Index extends Vue {
    mounted() {
        console.log("mounted");
    }
}