import { createNamespace } from '../utils';

var _createNamespace = createNamespace('key'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
    },
    onBlur: function onBlur() {
      this.active = false;
    },
    onClick: function onClick() {
      this.$emit('press', this.text, this.type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var onBlur = this.onBlur;
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": ['van-hairline', this.className],
      "on": {
        "click": this.onClick,
        "touchstart": this.onFocus,
        "touchmove": onBlur,
        "touchend": onBlur,
        "touchcancel": onBlur
      }
    }, [this.slots('default') || this.text]);
  }
});