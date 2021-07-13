const clickOutside = {
  bind(el, binding) {
    function handler(e) {
      if (el.contains(e.target) || e.target.className.includes(binding.arg)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el._clickOutside = handler;
    document.addEventListener('click', handler);
  },
  unbind(el) {
    document.removeEventListener('click', el._zClickOutside);
    delete el._clickOutside;
  },
};
export default clickOutside;
