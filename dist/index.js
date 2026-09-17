"use strict";var n=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=n(function(g,v){
var o=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/math-base-special-floor/dist');function p(a,r,e,i){var u,t;return a<=0?NaN:(u=a/2,t=l(u),u===t?o(o(r[i+t*e]+r[i+(t-1)*e])/2):r[i+t*e])}v.exports=p
});var q=n(function(h,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),x=s();function F(a,r,e){return x(a,r,e,y(a,e))}d.exports=F
});var f=n(function(j,m){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),R=s();O(c,"ndarray",R);m.exports=c
});var T=f();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
