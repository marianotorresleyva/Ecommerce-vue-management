import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

export default Vue.component("canvas", {
    data() {
        return {
            id: "vue-canvas",
            w: 400,
            h: 400,
        };
    },
    props: [],
    template: `
        <canvas :id="id" :width="w" :height="h"></canvas>
    `,
});
