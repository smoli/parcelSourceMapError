import {createStore, Store} from "vuex";

export interface State {
    who: string
}

export const state: Store<State> = createStore<State>({
    state():State {
        return {
            who: "world"
        }
    }
})