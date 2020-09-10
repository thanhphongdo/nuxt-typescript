import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Contact extends Vue {
    mounted() {
        console.log("mounted");
    }
}