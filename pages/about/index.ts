import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class About extends Vue {
    mounted() {
        console.log("mounted");
    }
}