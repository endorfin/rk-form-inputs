(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{415:function(t,e,n){"use strict";n.r(e);n(191);var r={name:"FormSection",props:{id:{type:String,required:!0},label:{type:String,required:!0},labelHidden:{type:Boolean,default:function(){return!1}},required:{type:Boolean,required:!1,default:function(){return!1}},hint:{type:String,required:!1,default:function(){return null}},cornerHint:{type:String,required:!1,default:function(){return null}},errorMsg:{type:String,required:!1,default:function(){return null}}},computed:{sectionClass:function(){return{"ui-form-section":!0,"ui-form-section--error":this.errorMsg}},labelClass:function(){return{"ui-form-section__label":!0,"ui-form-section__label--hidden":this.labelHidden}},hasCornerHintSlot:function(){return!!this.$slots.cornerHint},cornerHintPresent:function(){return this.hasCornerHintSlot||this.cornerHint}}},i=n(58),u={name:"InputText",mixins:[{components:{FormSection:Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.sectionClass},[n("div",{staticClass:"ui-form-section__label-wrapper"},[n("label",{class:t.labelClass,attrs:{for:t.id}},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),t.required?t._e():n("sup",{staticClass:"ui-form-section__optional-hint",attrs:{"aria-hidden":"true"}},[t._v("\n      optional\n    ")]),t._v(" "),t.cornerHintPresent?n("span",{staticClass:"ui-form-section__corner-hint"},[t._t("cornerHint",(function(){return[t._v("\n        "+t._s(t.cornerHint)+"\n      ")]}))],2):t._e()]),t._v(" "),t._t("default"),t._v(" "),t.hint&&!t.errorMsg?n("div",{staticClass:"ui-form-section__hint",attrs:{id:t.id+"-hint"}},[t._v("\n    "+t._s(t.hint)+"\n  ")]):t._e(),t._v(" "),t.errorMsg?n("div",{staticClass:"form-section__error-msg"},[t._v("\n    "+t._s(t.errorMsg)+"\n  ")]):t._e()],2)}),[],!1,null,null,null).exports},props:{required:{type:Boolean,default:function(){return!1}},disabled:{type:Boolean,default:function(){return!1}},id:{type:String,required:!0},label:{type:String,required:!0},labelHidden:{type:Boolean,default:function(){return!1}},hint:{type:String,required:!1,default:function(){return null}},cornerHint:{type:String,required:!1,default:function(){return null}},errorMsg:{type:String,required:!1,default:function(){return null}},fieldStyle:{type:String,required:!1,default:function(){return null},validator:function(t){return["error","success","warning"].includes(t)}}},computed:{isInvalid:function(){return!!this.errorMsg}}}],props:{value:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""}},computed:{inputClass:function(){return{"ui-input-text":!0,"ui-input-text--disabled":this.disabled,"ui-input-text--success":"success"===this.fieldStyle,"ui-input-text--warning":"warning"===this.fieldStyle,"ui-input-text--error":this.isInvalid||"error"===this.fieldStyle}},ariaDescribedby:function(){return this.hint?this.id+"-hint":null}}},l={components:{InputText:Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-section",{staticClass:"ui-form-section--input-text",attrs:{id:t.id,label:t.label,"label-hidden":t.labelHidden,required:t.required,disabled:t.disabled,hint:t.hint,"corner-hint":t.cornerHint,"error-msg":t.errorMsg}},[n("input",{ref:"input",class:t.inputClass,attrs:{id:t.id,type:t.type,disabled:t.disabled,"aria-required":t.required,"aria-describedby":t.ariaDescribedby,"aria-invalid":t.isInvalid,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null).exports},data:function(){return{inputValue:""}}},s=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"input-text"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-text"}},[t._v("#")]),t._v(" input-text")]),t._v(" "),n("p",[n("code",[t._v("<input-text />")]),t._v(" Component. Here's how to use it...")]),t._v(" "),[n("input-text",{attrs:{id:"name",label:"Name",required:""},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})]],2)}),[],!1,null,null,null);e.default=s.exports}}]);