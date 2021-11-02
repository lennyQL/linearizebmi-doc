"use strict";(self.webpackChunklinearizebmi_doc=self.webpackChunklinearizebmi_doc||[]).push([[674],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9381:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_label:"BMI\u306e\u8a18\u8ff0",sidebar_position:2},l="BMI\u306e\u8a18\u8ff0",u={unversionedId:"bmi",id:"bmi",isDocsHomePage:!1,title:"BMI\u306e\u8a18\u8ff0",description:"",source:"@site/docs/bmi.md",sourceDirName:".",slug:"/bmi",permalink:"/linearizebmi-doc/docs/bmi",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BMI\u306e\u8a18\u8ff0",sidebar_position:2}},p=[],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bmi\u306e\u8a18\u8ff0"},"BMI\u306e\u8a18\u8ff0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-matlab",metastring:"title=\u6975\u914d\u7f6e",title:"\u6975\u914d\u7f6e"},"% \u624b\u52d5\u8a08\u7b97\uff0c\u771f\u5024\nBMImanual = X*(A+B2*Y*C2)+(A+B2*Y*C2)'*X';\n%\nQ0 = X*A+A'*X';\nL = eye(n,n);\nN = B2;\nR = C2;\n%\nLMImanual = [Q0+L*X*N*Y0*R+L*X0*N*Y*R-L*X0*N*Y0*R+(L*X*N*Y0*R+L*X0*N*Y*R-L*X0*N*Y0*R)',...\n             L*(X-X0)*N+R'*(Y-Y0)'*G';...\n            (L*(X-X0)*N+R'*(Y-Y0)'*G')',...\n             -(G+G')];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=Hinf",title:"Hinf"},"Fstr = \"[X*(A+B2*Y*C2)+(A+B2*Y*C2)'*X'  X*(B1+B2*Y*D21)     (C1+D12*Y*C2)';\"+...\n        \"(B1+B2*Y*D21)'*X'               -eye(p1)           (D11+D12*Y*D21)';\"+...\n        \"C1+D12*Y*C2                     D11+D12*Y*D21       -eye(p1)]\";\n\nLMIauto = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'})\n[LMIauto, LMIstr] = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'},'G')\n")))}f.isMDXComponent=!0}}]);