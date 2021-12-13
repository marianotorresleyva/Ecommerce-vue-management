import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

import bttn from "./components/headerMenu.js";

const gridValue = {
    data() {
        return {
            // Father
        };
    },

    props: ["logo", "shop-cart", "user-acount", "collection"],

    template: `
        <header>
                <div :class="logo.className">
                    <img :src="logo.source" :alt="logo.refer" />
                </div>
                <nav>
                    <ul>
                        <li><a :href="collection">Collection</a></li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div :class="shopCart.className">
                    <img :src="shopCart.source" :alt="shopCart.refer" />
                </div>
                <div :class="userAcount.className">
                    <img :src="userAcount.source" :alt="userAcount.refer" />
                </div>
            </header>
    `,
};
Vue.component("buttonComponent", bttn);
let app = new Vue({
    el: ".root",
    data: {
        // actualPrice: 0,
        originalPrice: 250.0,
        descount: 25,
        cuantity: 0,
        productLimited: 5,
        collection: "./pages/collection.html",
        logo: {
            refer: "Logo",
            source: "../images/logo.svg",
            className: "logo-container",
        },
        shopCart: {
            refer: "shop cart",
            source: "../images/icon-cart.svg",
            className: "shopping-cart",
        },
        userAcount: {
            refer: "user acount",
            source: "../images/image-avatar.png",
            className: "user-acount",
        },
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
    components: {
        "header-custom": gridValue,
    },
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
