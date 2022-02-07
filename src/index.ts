import {createApp} from "vue";
import hello from "./component1/hello.vue"
import {EX1} from "./ex1";
import {state} from "./state/state";
import {EX2} from "./ex2";


const ex1 = new EX1()
const ex2 = new EX2();
const app = createApp(hello);
app.use(state);
app.provide("ex1", ex1);
app.provide("ex2", ex2);
app.mount("#hello");