import {createApp} from "vue";
import hello from "./component1/hello.vue"
import {EX1} from "./ex1";
import {state} from "./state/state";


const ex1 = new EX1()
const app = createApp(hello);
app.use(state);
app.provide("ex1", ex1);
app.mount("#hello");