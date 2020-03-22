/*!
 * vue2-el-loading v1.0.0
 * Copyright (c) 2018-present, liwens
 * Released under the MIT License.
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'Circular',
  props: {
    color: {
      // 颜色
      type: String,
      default: '#409EFF'
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    staticClass: "circular",
    attrs: {
      "viewBox": "25 25 50 50"
    }
  }, [_c('circle', {
    staticClass: "circular__path",
    style: {
      stroke: _vm.color
    },
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-36a328fc_0", {
    source: ".circular{height:42px;width:42px;-webkit-animation:loading-rotate 2s linear infinite;animation:loading-rotate 2s linear infinite}.circular__path{-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#409eff;stroke-linecap:round}@-webkit-keyframes loading-rotate{100%{transform:rotate(360deg)}}@keyframes loading-rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

var circular = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

//
var script$1 = {
  components: {
    circular
  },

  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: false,
      visible: false,
      customClass: "",
      color: "#409EFF"
    };
  },

  methods: {
    handleAfterLeave() {
      this.$emit("after-leave");
    },

    setText(text) {
      this.text = text;
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": "el-loading-fade"
    },
    on: {
      "after-leave": _vm.handleAfterLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }],
    staticClass: "v-loading-mask",
    class: [_vm.customClass, {
      'is-fullscreen': _vm.fullscreen
    }],
    style: {
      backgroundColor: _vm.background || ''
    }
  }, [_c('div', {
    staticClass: "v-loading-spinner",
    style: {
      color: _vm.color || 'inherit'
    }
  }, [!_vm.spinner ? _c('circular', {
    attrs: {
      "color": _vm.color
    }
  }) : _c('i', {
    class: _vm.spinner
  }), _vm._v(" "), _vm.text ? _c('p', {
    staticClass: "el-loading-text",
    style: {
      color: _vm.color
    }
  }, [_vm._v("\n        " + _vm._s(_vm.text) + "\n      ")]) : _vm._e()], 1)])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-417e7814_0", {
    source: ".v-loading-mask{position:absolute;z-index:2000;background-color:hsla(0,0%,100%,.8);margin:0;top:0;right:0;bottom:0;left:0;transition:opacity .3s}.v-loading-mask.is-fullscreen{position:fixed}.v-loading-spinner{left:0;top:0;z-index:2001;top:50%;margin-top:-21px;width:100%;text-align:center;position:absolute;min-height:20px}.el-loading-parent--relative{position:relative!important;pointer-events:none}.el-loading-parent--hidden{overflow:hidden!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

var Loading = normalizeComponent_1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, browser, undefined);

/* Change the code reference from https://github.com/ElemeFE/element/blob/dev/src/utils/dom.js*/
// const SPECIAL_CHARS_REGEXP = /([]+(.))/g;
// const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = Number(document.documentMode);
/* istanbul ignore next */

const trim = function (string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* istanbul ignore next */


const camelCase = function (name) {
  return name; // return name
  //   .replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
  //     return offset ? letter.toUpperCase() : letter;
  //   })
  //   .replace(MOZ_HACK_REGEXP, "Moz$1");
};
/* istanbul ignore next */

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
/* istanbul ignore next */

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
/* istanbul ignore next */

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
/* istanbul ignore next */

const getStyle = ieVersion < 9 ? function (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === "float") {
    styleName = "styleFloat";
  }

  try {
    switch (styleName) {
      case "opacity":
        try {
          return element.filters.item("alpha").opacity / 100;
        } catch (e) {
          return 1.0;
        }

      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === "float") {
    styleName = "cssFloat";
  }

  try {
    var computed = document.defaultView.getComputedStyle(element, "");
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/**
 * Bind after-leave event for vue instance. Make sure after-leave is called in any browsers.
 *
 * @param {Vue} instance Vue instance.
 * @param {Function} callback callback of after-leave event
 * @param {Number} speed the speed of transition, default value is 300ms
 * @param {Boolean} once weather bind after-leave once. default value is false.
 */
function afterLeave (instance, callback, speed = 300, once = false) {
  if (!instance || !callback) throw new Error("instance & callback is required");
  let called = false;

  const afterLeaveCallback = function () {
    if (called) return;
    called = true;

    if (callback) {
      callback.apply(null, arguments);
    }
  };

  if (once) {
    instance.$once("after-leave", afterLeaveCallback);
  } else {
    instance.$on("after-leave", afterLeaveCallback);
  }

  setTimeout(() => {
    afterLeaveCallback();
  }, speed + 100);
}

function merge (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};

    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];

        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}

const Mask = Vue.extend(Loading);
const loadingDirective = {};

loadingDirective.install = (Vue, opts) => {
  const defaults = {
    text: "",
    fullscreen: false,
    body: false,
    lock: false,
    customClass: "",
    color: new String("#1E90FF")
  };
  const options = merge({}, defaults, opts);
  if (Vue.prototype.$isServer) return;

  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = getStyle(document.body, "position");
          el.originalOverflow = getStyle(document.body, "overflow");
          addClass(el.mask, "is-fullscreen");
          insertDom(document.body, el, binding);
        } else {
          removeClass(el.mask, "is-fullscreen");

          if (binding.modifiers.body) {
            el.originalPosition = getStyle(document.body, "position");
            ["top", "left"].forEach(property => {
              const scroll = property === "top" ? "scrollTop" : "scrollLeft";
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(getStyle(document.body, `margin-${property}`), 10) + "px";
            });
            ["height", "width"].forEach(property => {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + "px";
            });
            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = getStyle(el, "position");
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      afterLeave(el.instance, () => {
        if (!el.instance.hiding) return;
        el.domVisible = false;
        const target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
        removeClass(target, "el-loading-parent--relative");
        removeClass(target, "el-loading-parent--hidden");
        el.instance.hiding = false;
      }, 300, true);
      el.instance.visible = false;
      el.instance.hiding = true;
    }
  };

  const insertDom = (parent, el, binding) => {
    if (!el.domVisible && getStyle(el, "display") !== "none" && getStyle(el, "visibility") !== "hidden") {
      Object.keys(el.maskStyle).forEach(property => {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== "absolute" && el.originalPosition !== "fixed") {
        addClass(parent, "el-loading-parent--relative");
      }

      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        addClass(parent, "el-loading-parent--hidden");
      }

      el.domVisible = true;
      parent.appendChild(el.mask);
      Vue.nextTick(() => {
        if (el.instance.hiding) {
          el.instance.$emit("after-leave");
        } else {
          el.instance.visible = true;
        }
      });
      el.domInserted = true;
    } else if (el.domVisible && el.instance.hiding === true) {
      el.instance.visible = true;
      el.instance.hiding = false;
    }
  };

  Vue.directive("loading", {
    bind: function (el, binding) {
      const textExr = el.getAttribute("element-loading-text");
      const spinnerExr = el.getAttribute("element-loading-spinner");
      const backgroundExr = el.getAttribute("element-loading-background");
      const customClassExr = el.getAttribute("element-loading-custom-class");
      const colorExr = el.getAttribute("element-loading-color");
      const mask = new Mask({
        el: document.createElement("div"),
        data: {
          text: options.text || textExr,
          spinner: spinnerExr,
          background: backgroundExr,
          customClass: customClassExr,
          fullscreen: !!binding.modifiers.fullscreen,
          color: colorExr || options.color
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};
      binding.value && toggleLoading(el, binding); // let sp = document.querySelector(".v-loading-spinner");
      // let spdom = sp.getBoundingClientRect();
      // console.log(spdom);
    },
    update: function (el, binding) {
      el.instance.setText(el.getAttribute("element-loading-text") || options.text);

      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    unbind: function (el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, {
          value: false,
          modifiers: binding.modifiers
        });
      }

      el.instance && el.instance.$destroy();
    }
  });
};

var index = {
  install(Vue, Opts) {
    Vue.use(loadingDirective, Opts);
  }

};

module.exports = index;
