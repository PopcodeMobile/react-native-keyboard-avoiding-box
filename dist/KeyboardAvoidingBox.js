var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxFileName="/Users/eduardo/Documents/GitHub/react-native-keyboard-avoiding-box/src/KeyboardAvoidingBox.js";var KeyboardAvoidingBox=function(_React$Component){(0,_inherits2.default)(KeyboardAvoidingBox,_React$Component);function KeyboardAvoidingBox(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,KeyboardAvoidingBox);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(KeyboardAvoidingBox)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={visibleHeight:getWindowHeight()};_this.setupAnimation=function(){return _reactNative.LayoutAnimation.configureNext(_reactNative.LayoutAnimation.Presets.easeInEaseOut);};_this.keyboardDidShow=function(_ref){var screenY=_ref.endCoordinates.screenY;_this.setupAnimation();_this.setState({visibleHeight:screenY});};_this.keyboardDidHide=function(){_this.setupAnimation();_this.setState({visibleHeight:getWindowHeight()});};return _this;}(0,_createClass2.default)(KeyboardAvoidingBox,[{key:"render",value:function render(){var visibleHeight=this.state.visibleHeight;var _this$props=this.props,minHeight=_this$props.minHeight,scrollEnabled=_this$props.scrollEnabled,children=_this$props.children;var height=visibleHeight>=minHeight?visibleHeight:minHeight;return React.createElement(ScrollView,{maxHeight:visibleHeight,enabled:!!scrollEnabled,__source:{fileName:_jsxFileName,lineNumber:40}},React.createElement(_reactNative.View,{style:{height:height},__source:{fileName:_jsxFileName,lineNumber:41}},children));}},{key:"componentDidMount",value:function componentDidMount(){var keyboardDidShowEventName=_reactNative.Platform.OS==='ios'?'keyboardWillShow':'keyboardDidShow';var keyboardDidHideEventName=_reactNative.Platform.OS==='ios'?'keyboardWillHide':'keyboardDidHide';this.keyboardDidShowListener=_reactNative.Keyboard.addListener(keyboardDidShowEventName,this.keyboardDidShow);this.keyboardDidHideListener=_reactNative.Keyboard.addListener(keyboardDidHideEventName,this.keyboardDidHide);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.keyboardDidShowListener.remove();this.keyboardDidHideListener.remove();}}]);return KeyboardAvoidingBox;}(React.Component);exports.default=KeyboardAvoidingBox;KeyboardAvoidingBox.defaultProps={scrollEnabled:true};function getWindowHeight(){if(_reactNative.Platform.OS==='android'){return _reactNative.Dimensions.get('window').height-_reactNative.StatusBar.currentHeight;}return _reactNative.Dimensions.get('window').height;}function ScrollView(_ref2){var children=_ref2.children,enabled=_ref2.enabled,maxHeight=_ref2.maxHeight;if(enabled){return React.createElement(_reactNative.ScrollView,{keyboardShouldPersistTaps:'handled',style:{maxHeight:maxHeight},__source:{fileName:_jsxFileName,lineNumber:98}},children);}return children;}