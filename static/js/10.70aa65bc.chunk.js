(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[10],{108:function(n,t,e){"use strict";e.d(t,"f",(function(){return s})),e.d(t,"e",(function(){return l})),e.d(t,"a",(function(){return p})),e.d(t,"c",(function(){return d})),e.d(t,"g",(function(){return f})),e.d(t,"h",(function(){return h})),e.d(t,"b",(function(){return v})),e.d(t,"d",(function(){return b}));var r=e(109),o=e.n(r),i=e(110),a=e(112),u=e.n(a),c="https://karif-blog-api.herokuapp.com",s=function(){var n=Object(i.a)(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.get("".concat(c,"/api/post/all"));case 3:t=n.sent,n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:return n.next=11,t.data.posts;case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=Object(i.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.get("".concat(c,"/api/post/").concat(t));case 3:e=n.sent,n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:return n.next=11,e.data.post;case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=Object(i.a)(o.a.mark((function n(t,e){var r,i,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.username,a=e.body,n.prev=1,n.next=4,u.a.post("".concat(c,"/api/post/").concat(t,"/comment"),{username:i,body:a});case 4:r=n.sent,n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",n.t0);case 10:return n.next=12,r.data;case 12:return n.abrupt("return",n.sent);case 13:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=Object(i.a)(o.a.mark((function n(t,e,r){var i,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=r.token,n.prev=1,n.next=4,u.a.delete("".concat(c,"/api/post/").concat(t,"/").concat(e),{headers:{authorization:"Bearer ".concat(i)}});case 4:a=n.sent,n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",n.t0);case 10:return n.abrupt("return",a);case 11:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=Object(i.a)(o.a.mark((function n(t){var e,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.username,r=t.password,n.prev=1,e&&r){n.next=4;break}throw Error("Fill in your Credentials");case 4:return n.next=6,u.a.post("".concat(c,"/api/login"),{username:e,password:r});case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=Object(i.a)(o.a.mark((function n(t,e,r){var i,a,s,l,p;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=t.username,a=t.token,s=e.body,l=e.title,p=e.id,n.prev=2,s&&l&&p){n.next=5;break}throw Error("Fill in Title and Body of the Post");case 5:return n.next=7,u.a.put("".concat(c,"/api/post/").concat(p),{body:encodeURIComponent(s),title:l,author:i,thumbnail:r},{headers:{authorization:"Bearer ".concat(a)}});case 7:return n.abrupt("return",n.sent);case 10:return n.prev=10,n.t0=n.catch(2),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t,e,r){return n.apply(this,arguments)}}(),v=function(){var n=Object(i.a)(o.a.mark((function n(t,e,r){var i,a,s,l;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=t.username,a=t.token,s=e.body,l=e.title,n.prev=2,s&&l){n.next=5;break}throw Error("Fill in Title and Body of the Post");case 5:return n.next=7,u.a.post("".concat(c,"/api/post"),{body:encodeURIComponent(s),title:l,author:i,thumbnail:r},{headers:{authorization:"Bearer ".concat(a)}});case 7:return n.abrupt("return",n.sent);case 10:return n.prev=10,n.t0=n.catch(2),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t,e,r){return n.apply(this,arguments)}}(),b=function(){var n=Object(i.a)(o.a.mark((function n(t,e){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.token,n.prev=1,n.next=4,u.a.delete("".concat(c,"/api/post/").concat(e),{headers:{authorization:"Bearer ".concat(r)}});case 4:return n.abrupt("return",n.sent);case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(t,e){return n.apply(this,arguments)}}()},156:function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return o}));var r=function(){return"undefined"!==typeof window?window:n},o=function(){var n=r();return n&&n.tinymce?n.tinymce:null}}).call(this,e(13))},190:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return _}));var r,o,i=e(15),a=e(9),u=e(8),c=u.c.section(r||(r=Object(a.a)(["\n  width: clamp(45%, 680px, 92%);\n  margin: 2.5rem auto;\n  display: grid;\n  padding: min(3.5%, 1.5rem);\n  border-radius: 1rem;\n  //Color and Styles\n  color: ",";\n  background-color: ",";\n  font-size: 1.25rem;\n  box-shadow: rgba(",", 0.08) 1em 2em 3.5em 0px;\n  h2 {\n    margin: 0 auto;\n    margin-bottom: min(3.5%, 1.5rem);\n    color: ",";\n  }\n  .tox {\n    height: 50vh !important;\n    border-radius: 1rem;\n    border: 2px solid ",";\n    font-family: inherit;\n  }\n"])),(function(n){return n.theme.mainColor}),(function(n){return n.theme.blockColor}),(function(n){return n.theme.shadowColor}),(function(n){return n.theme.titleColor}),(function(n){return n.theme.bgColor})),s=u.c.button(o||(o=Object(a.a)(["\n  border-radius: 1rem;\n  border: none;\n  min-width: 20%;\n  padding: 0.85rem 0.65rem;\n  font-family: inherit;\n  font-weight: 800;\n  font-size: 1.05rem;\n  margin: 0 auto;\n  margin-top: min(3.5%, 1.5rem);\n  background-color: ",";\n  color: ",";\n  &:hover {\n    color: ",";\n    background-color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.blockColor}),(function(n){return n.theme.accentColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),l=e(0),p=e(10),d=function(){return d=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},d.apply(this,arguments)},f={onActivate:p.func,onAddUndo:p.func,onBeforeAddUndo:p.func,onBeforeExecCommand:p.func,onBeforeGetContent:p.func,onBeforeRenderUI:p.func,onBeforeSetContent:p.func,onBeforePaste:p.func,onBlur:p.func,onChange:p.func,onClearUndos:p.func,onClick:p.func,onContextMenu:p.func,onCopy:p.func,onCut:p.func,onDblclick:p.func,onDeactivate:p.func,onDirty:p.func,onDrag:p.func,onDragDrop:p.func,onDragEnd:p.func,onDragGesture:p.func,onDragOver:p.func,onDrop:p.func,onExecCommand:p.func,onFocus:p.func,onFocusIn:p.func,onFocusOut:p.func,onGetContent:p.func,onHide:p.func,onInit:p.func,onKeyDown:p.func,onKeyPress:p.func,onKeyUp:p.func,onLoadContent:p.func,onMouseDown:p.func,onMouseEnter:p.func,onMouseLeave:p.func,onMouseMove:p.func,onMouseOut:p.func,onMouseOver:p.func,onMouseUp:p.func,onNodeChange:p.func,onObjectResizeStart:p.func,onObjectResized:p.func,onObjectSelected:p.func,onPaste:p.func,onPostProcess:p.func,onPostRender:p.func,onPreProcess:p.func,onProgressState:p.func,onRedo:p.func,onRemove:p.func,onReset:p.func,onSaveContent:p.func,onSelectionChange:p.func,onSetAttrib:p.func,onSetContent:p.func,onShow:p.func,onSubmit:p.func,onUndo:p.func,onVisualAid:p.func},h=d({apiKey:p.string,id:p.string,inline:p.bool,init:p.object,initialValue:p.string,onEditorChange:p.func,outputFormat:p.oneOf(["html","text"]),value:p.string,tagName:p.string,cloudChannel:p.string,plugins:p.oneOfType([p.string,p.array]),toolbar:p.oneOfType([p.string,p.array]),disabled:p.bool,textareaName:p.string,tinymceScriptSrc:p.string,scriptLoading:p.shape({async:p.bool,defer:p.bool,delay:p.number})},f),v=function(n){return"function"===typeof n},b=function(n){return n in f},m=function(n){return n.substr(2)},g=function(n,t,e,r,o){return function(n,t,e,r,o,i,a){var u=Object.keys(o).filter(b),c=Object.keys(i).filter(b),s=u.filter((function(n){return void 0===i[n]})),l=c.filter((function(n){return void 0===o[n]}));s.forEach((function(n){var t=m(n),r=a[t];e(t,r),delete a[t]})),l.forEach((function(e){var o=r(n,e),i=m(e);a[i]=o,t(i,o)}))}(o,n.on.bind(n),n.off.bind(n),(function(t,e){return function(r){var o;return null===(o=t(e))||void 0===o?void 0:o(r,n)}}),t,e,r)},y=0,C=function(n){var t=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++y+String(t)},k=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},w=function(n){return"undefined"===typeof n||""===n?[]:Array.isArray(n)?n:n.split(" ")},x=function(){return{listeners:[],scriptId:C("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},O=function(){var n=x();return{load:function(t,e,r,o,i,a){var u=function(){return function(n,t,e,r,o,i){var a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=n,a.src=e,a.async=r,a.defer=o,a.addEventListener("load",(function n(){a.removeEventListener("load",n),i()})),t.head&&t.head.appendChild(a)}(n.scriptId,t,e,r,o,(function(){n.listeners.forEach((function(n){return n()})),n.scriptLoaded=!0}))};n.scriptLoaded?a():(n.listeners.push(a),n.scriptLoading||(n.scriptLoading=!0,i>0?setTimeout(u,i):u()))},reinitialize:function(){n=x()}}}(),j=e(156),E=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},n(t,e)};return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),S=function(){return S=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},S.apply(this,arguments)},B=function(){var n,t,e;return(null===(e=null===(t=null===(n=Object(j.a)())||void 0===n?void 0:n.Env)||void 0===t?void 0:t.browser)||void 0===e?void 0:e.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},I=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},D=function(n){function t(t){var e,r,o,i=n.call(this,t)||this;return i.rollbackTimer=void 0,i.valueCursor=void 0,i.rollbackChange=function(){var n=i.editor,t=i.props.value;n&&t&&t!==i.currentContent&&n.undoManager.ignore((function(){if(n.setContent(t),i.valueCursor&&(!i.inline||n.hasFocus()))try{n.selection.moveToBookmark(i.valueCursor)}catch(e){}})),i.rollbackTimer=void 0},i.handleBeforeInput=function(n){if(void 0!==i.props.value&&i.props.value===i.currentContent&&i.editor&&(!i.inline||i.editor.hasFocus))try{i.valueCursor=i.editor.selection.getBookmark(3)}catch(t){}},i.handleBeforeInputSpecial=function(n){"Enter"!==n.key&&"Backspace"!==n.key&&"Delete"!==n.key||i.handleBeforeInput(n)},i.handleEditorChange=function(n){var t=i.editor;if(t&&t.initialized){var e=t.getContent();if(void 0!==i.props.value&&i.props.value!==e&&(i.rollbackTimer||(i.rollbackTimer=window.setTimeout(i.rollbackChange,200))),e!==i.currentContent&&(i.currentContent=e,v(i.props.onEditorChange))){var r=i.props.outputFormat,o="html"===r?e:t.getContent({format:r});i.props.onEditorChange(o,t)}}},i.handleEditorChangeSpecial=function(n){"Backspace"!==n.key&&"Delete"!==n.key||i.handleEditorChange(n)},i.initialise=function(n){var t,e,r;void 0===n&&(n=0);var o=i.elementRef.current;if(o)if(function(n){for(var t=n,e=n.parentNode;null!=e;)e=(t=e).parentNode;return t===n.ownerDocument}(o)){var a=Object(j.a)();if(!a)throw new Error("tinymce should have been loaded into global scope");var u,c,s=S(S({},i.props.init),{selector:void 0,target:o,readonly:i.props.disabled,inline:i.inline,plugins:(u=null===(t=i.props.init)||void 0===t?void 0:t.plugins,c=i.props.plugins,w(u).concat(w(c))),toolbar:null!==(e=i.props.toolbar)&&void 0!==e?e:null===(r=i.props.init)||void 0===r?void 0:r.toolbar,setup:function(n){i.editor=n,i.bindHandlers({}),i.inline&&!k(o)&&n.once("PostRender",(function(t){n.setContent(i.getInitialValue(),{no_events:!0})})),i.props.init&&v(i.props.init.setup)&&i.props.init.setup(n)},init_instance_callback:function(n){var t,e,r=i.getInitialValue();i.currentContent=null!==(t=i.currentContent)&&void 0!==t?t:n.getContent(),i.currentContent!==r&&(i.currentContent=r,n.setContent(r),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var o=null!==(e=i.props.disabled)&&void 0!==e&&e;n.setMode(o?"readonly":"design"),i.props.init&&v(i.props.init.init_instance_callback)&&i.props.init.init_instance_callback(n)}});i.inline||(o.style.visibility=""),k(o)&&(o.value=i.getInitialValue()),a.init(s)}else if(0===n)setTimeout((function(){return i.initialise(1)}),1);else{if(!(n<11))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return i.initialise(n+1)}),100)}},i.id=i.props.id||C("tiny-react"),i.elementRef=l.createRef(),i.inline=null!==(o=null!==(e=i.props.inline)&&void 0!==e?e:null===(r=i.props.init)||void 0===r?void 0:r.inline)&&void 0!==o&&o,i.boundHandlers={},i}return E(t,n),t.prototype.componentDidUpdate=function(n){var t,e,r=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact((function(){var n;if(!r.inline||o.hasFocus())try{n=o.selection.getBookmark(3)}catch(u){}var t=r.valueCursor;if(o.setContent(r.props.value),!r.inline||o.hasFocus())for(var e=0,i=[n,t];e<i.length;e++){var a=i[e];if(a)try{o.selection.moveToBookmark(a),r.valueCursor=a;break}catch(u){}}}))}if(this.props.disabled!==n.disabled){var i=null!==(e=this.props.disabled)&&void 0!==e&&e;this.editor.setMode(i?"readonly":"design")}}},t.prototype.componentDidMount=function(){var n,t,e,r,o,i;null!==Object(j.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&O.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async)&&void 0!==t&&t,null!==(r=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.defer)&&void 0!==r&&r,null!==(i=null===(o=this.props.scriptLoading)||void 0===o?void 0:o.delay)&&void 0!==i?i:0,this.initialise)},t.prototype.componentWillUnmount=function(){var n=this,t=this.editor;t&&(t.off(B(),this.handleEditorChange),t.off(I(),this.handleBeforeInput),t.off("keypress",this.handleEditorChangeSpecial),t.off("keydown",this.handleBeforeInputSpecial),t.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(e){t.off(e,n.boundHandlers[e])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var n=this.props.tagName,t=void 0===n?"div":n;return l.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return l.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var n=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+n+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(n){var t=this;if(void 0!==this.editor){g(this.editor,n,this.props,this.boundHandlers,(function(n){return t.props[n]}));var e=function(n){return void 0!==n.onEditorChange||void 0!==n.value},r=e(n),o=e(this.props);!r&&o?(this.editor.on(B(),this.handleEditorChange),this.editor.on(I(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):r&&!o&&(this.editor.off(B(),this.handleEditorChange),this.editor.off(I(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=h,t.defaultProps={cloudChannel:"5"},t}(l.Component),T=e(28),M=e(108),R=e(2),P=e(1);function _(n){var t=n.user,e=Object(l.useRef)(null),r=Object(l.useState)(!0),o=Object(i.a)(r,2),a=o[0],u=o[1],p=Object(R.g)();return Object(P.jsxs)(c,{children:[Object(P.jsx)("h2",{children:"What's on your mind ?"}),a&&Object(P.jsx)(T.a,{}),Object(P.jsx)(D,{apiKey:"595uiz5ls6wksvbq1fk2d56a33bktpal772owrbcf8z2pkle",onInit:function(n,t){e.current=t,u(!1)},init:{menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | link image| bullist numlist outdent indent | ",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}}),Object(P.jsx)(s,{onClick:function(){if(e.current){var n=e.current.getContent(),r=e.current.getContent({format:"text"}).split("\n")[0];Object(M.b)(t,{title:r,body:n}).then((function(n){p.push("/post/".concat(n.data.post._id)),p.go(0)}))}},children:"Submit"})]})}}}]);
//# sourceMappingURL=10.70aa65bc.chunk.js.map