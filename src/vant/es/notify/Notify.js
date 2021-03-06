import _extends from "@babel/runtime/helpers/esm/extends";
import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../utils';
import { RED, WHITE } from '../utils/color';
import { inherit } from '../utils/functional';
import { PopupMixin } from '../mixins/popup';
import Popup from '../popup'; // Types

var _createNamespace = createNamespace('notify'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(Popup, _mergeJSXProps([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "lockScroll": false
    },
    "style": style,
    "class": [bem(), props.className]
  }, inherit(ctx, true)]), [props.message]);
}

Notify.props = _extends({}, PopupMixin.props, {
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  color: {
    type: String,
    default: WHITE
  },
  background: {
    type: String,
    default: RED
  },
  duration: {
    type: Number,
    default: 3000
  }
});
export default createComponent(Notify);