// import {defineAsyncComponent} from "vue";

// const components = import.meta.glob("./components/**/*.vue");
// const install = (app) => {
//   for (const [key, value] of Object.entries(components)) {
//     const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
//     app.component(name, defineAsyncComponent(value));
//   }
// };
//
// export default {install};

// import GyFormOld from "./components/gy-form/gy-form.vue";
//
// export const GyForm = GyFormOld;
// 或者
import GyForm from "./components/gy-form/index.vue";
import GyButton from "./components/gy-button/index.vue";

export {GyForm, GyButton};
