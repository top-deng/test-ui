import Switch form '.packages/switch/index.js';

const components = [
	Switch,
]

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '1.0.0',
  install,
  Switch,
};

module.exports.default = module.exports;