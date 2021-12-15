import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

export default Vue.component("modal", {
    data() {
        return {
            showModal: true,
            promotion: "Just Do IT",
        };
    },
    props: ["modal"],
    methods: {
        toggleModal: function () {
            return (this.showModal = !this.showModal);
        },
    },
    template: `
        <div :class="modal.className" v-show="showModal">
                <h2>{{promotion}}</h2>
                <div :class="modal.containerImage">
                    <img :src="modal.source" :alt="modal.refer"/>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quasi possimus quod alias eos cum ullam minus labore,
                    repellendus non eum?
                </p>
            </div>
    `,
});
