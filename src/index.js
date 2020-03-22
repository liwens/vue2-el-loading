import directive from "./directive";

export default {
  install(Vue, Opts) {
    Vue.use(directive, Opts);
  }
};
