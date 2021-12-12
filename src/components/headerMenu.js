import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

export default Vue.component("buttonComponent", {
    data() {
        return {
            count: 0,
        };
    },
    template: `<button v-on:click="count++"> You are clicked {{count}}  times </button>`,
});
// modules = {
//     bttn,
// };

/* TRASH */
/**
 *export default hM = new Vue({
    el: "header",
    data() {
        return {
            collection: "./pages/collection.html",
        };
    },
});

 
 *  */
