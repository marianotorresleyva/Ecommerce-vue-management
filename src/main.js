import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

import bttn from "./components/headerMenu.js";

Vue.component("buttonComponent", bttn);
let app = new Vue({
    el: ".container",
    data: {
        // actualPrice: 0,
        originalPrice: 250.0,
        descount: 25,
        cuantity: 0,
        productLimited: 5,
    },
    watch: {
        cuantity: (newValue, oldValue) => {
            let subtrack = document.getElementsByTagName("input").item(0);
            let add = document.getElementsByTagName("input").item(1);
            if (app.cuantity < 0) {
                alert(`Product can be negative`);
                if (!add.getAttributeNames().includes("disabled")) {
                    add.disabled = true;
                    if (subtrack.getAttributeNames().includes("disabled")) {
                        subtrack.disabled = false;
                    }
                    return (app.cuantity = 0);
                }
            } else if (app.cuantity > app.productLimited) {
                alert(`${app.productLimited} is limite`);
                if (!subtrack.getAttributeNames().includes("disabled")) {
                    subtrack.disabled = true;
                    if (add.getAttributeNames().includes("disabled")) {
                        add.disabled = false;
                    }
                    return (app.cuantity = app.productLimited);
                }
            }
        },
    },
    computed: {
        actualPrice() {
            let p = (this.originalPrice * this.descount) / 100;
            return p;
        },
    },
    methods: {
        addCartBtn: () => {},
    },
    // components: {
    //     bttn,
    // },
});

// app.actualPrice += 1;
// app.addCuantity();
// app.subtrackCuantitty();

/* -- TRASH -- */
/**
 *         verifyCuantity: () => {
            let el = document.getElementsByTagName("input").item(1);

            if (app.cuantity < 0 || app.cuantity >= app.productLimited) {
                alert("Error managing product");
                if (!el.getAttributeNames().includes("disabled")) {
                    el.setAttribute("disabled");
                }
            }
            console.log("Running");
        },


 * valueConstraint: () => {
            if (app.cuantity < 0) {
                alert(`Product can be negative`);
                return (app.productLimited = 0);
            } else if (app.cuantity > app.productLimited) {
                alert(`${this.productLimited} is limite`);
                return (app.productLimited = 10);
            }
        },
        addCuantity: () => {
            let plus = document.getElementsByTagName("input").item(0);
            plus.addEventListener("click", (e) => {
                if (app.cuantity >= app.productLimited) {
                    alert("Elements can be negative.");
                    return;
                }
                app.cuantity += 1;
            });
        },
        subtrackCuantitty: () => {
            let less = document.getElementsByTagName("input").item(1);
            less.addEventListener("click", (e) => {
                if (app.cuantity == "0") {
                    alert("Elements can be negative.");
                    return;
                }
                app.cuantity -= 1;
            });
        },
 */
