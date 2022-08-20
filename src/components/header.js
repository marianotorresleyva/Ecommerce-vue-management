import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

export default Vue.component("buttonComponent", {
    data() {
        return {
            count: 0,
        };
    },
    template: `
            <header>
                <div class="logo-container">
                    <img src="../images/logo.svg" alt="Logo" />
                </div>
                <!-- <h1>Sneakers</h1> -->
                <nav>
                    <ul>
                        <li><a :href="collection">Collection</a></li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div class="shopping-cart">
                    <img src="../images/icon-cart.svg" alt="shopping-cart" />
                </div>
                <div class="user-acount">
                    <img src="../images/image-avatar.png" alt="user-avatar" />
                </div>
            </header>`,
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
