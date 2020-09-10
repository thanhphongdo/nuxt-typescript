import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Plank extends Vue {
    mounted() {
        console.log("mounted");
    }
}