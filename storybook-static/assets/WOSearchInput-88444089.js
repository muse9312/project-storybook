import{j as x}from"./jsx-runtime-ffb262ed.js";import{r as D}from"./index-76fb7be0.js";import{u as y}from"./styled-components.browser.esm-aa768a49.js";import{c as w,g as k}from"./_commonjsHelpers-de833af9.js";import{T}from"./TextField-8918e36b.js";import{A as z}from"./Autocomplete-fbfec46a.js";var C={exports:{}};(function(d,v){(function(c,o){d.exports=o()})(w,()=>{return c={705:n=>{n.exports=function(r,e){const t=[];return e.length===0?t.push({text:r,highlight:!1}):e[0][0]>0&&t.push({text:r.slice(0,e[0][0]),highlight:!1}),e.forEach((l,a)=>{const u=l[0],i=l[1];t.push({text:r.slice(u,i),highlight:!0}),a===e.length-1?i<r.length&&t.push({text:r.slice(i,r.length),highlight:!1}):i<e[a+1][0]&&t.push({text:r.slice(i,e[a+1][0]),highlight:!1})}),t}}},o={},function n(r){var e=o[r];if(e!==void 0)return e.exports;var t=o[r]={exports:{}};return c[r](t,t.exports,n),t.exports}(705);var c,o})})(C);var N=C.exports;const X=k(N);var S={exports:{}};(function(d,v){(function(c,o){d.exports=o()})(w,()=>{return c={772:(n,r,e)=>{const t=e(826).remove,l=/[.*+?^${}()|[\]\\]/g,a=/[a-z0-9_]/i,u=/\s+/;n.exports=function(i,E,g){var I,O;O={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},I=(I=g)||{},Object.keys(I).forEach(s=>{O[s]=!!I[s]}),g=O;const M=Array.from(i).map(s=>t(s));let h=M.join("");return(E=t(E)).trim().split(u).filter(s=>s.length>0).reduce((s,m)=>{const A=m.length,R=!g.insideWords&&a.test(m[0])?"\\b":"",b=new RegExp(R+m.replace(l,"\\$&"),"i");let f,p;if(f=b.exec(h),g.requireMatchAll&&f===null)return h="",[];for(;f;){p=f.index;const W=A-M.slice(p,p+A).join("").length,j=p-M.slice(0,p).join("").length,U=[p+j,p+A+j+W];if(U[0]!==U[1]&&s.push(U),h=h.slice(0,p)+new Array(A+1).join(" ")+h.slice(p+A),!g.findAllOccurrences)break;f=b.exec(h)}return s},[]).sort((s,m)=>s[0]-m[0])}},826:n=>{var r={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},e=Object.keys(r).join("|"),t=new RegExp(e,"g"),l=new RegExp(e,""),a=function(u){return u.replace(t,function(i){return r[i]})};n.exports=a,n.exports.has=function(u){return!!u.match(l)},n.exports.remove=a}},o={},function n(r){var e=o[r];if(e!==void 0)return e.exports;var t=o[r]={exports:{}};return c[r](t,t.exports,n),t.exports}(772);var c,o})})(S);var Y=S.exports;const B=k(Y),G=({tableData:d,onChange:v,placeholder:c})=>{const[o,n]=D.useState(""),r=(e,t)=>{n(t),v&&v(t)};return x.jsx(q,{children:x.jsx(H,{id:"highlights-demo",value:o,onChange:r,options:d,getOptionLabel:e=>e.title||"",renderInput:e=>x.jsx(T,{...e,placeholder:c}),renderOption:(e,t,{inputValue:l})=>{const a=B(t.title,l,{insideWords:!0}),u=X(t.title,a);return x.jsx("li",{...e,children:x.jsx("div",{children:u.map((i,E)=>x.jsx("span",{style:{color:i.highlight?"var(--Blue-01)":"var(--C-Dark-08)"},children:i.text},E))})})}})})},q=y.div`
  width: 100%;
`,H=y(z)`
  &.MuiAutocomplete-root {
    .MuiInputBase-root {
      width: 100%;
      height: 42px;
      padding: 0 16px;
      background-color: transparent;
      display: flex;

      border-radius: 12px;
      border: 1px solid var(--C-Dark-02);
      background: #fff;
      justify-content: space-between;
      align-items: center;

      color: var(--C-Dark-12);
      font-size: 14px;
      font-weight: 400;
      line-height: 18;

      &.Mui-focused {
        border: 1px solid var(--Blue-01);
      }
    }

    legend {
      display: none;
    }

    .MuiOutlinedInput-root {
      .MuiAutocomplete-input {
        padding: 0 12px 0 0;
      }

      .MuiAutocomplete-endAdornment {
        right: 0;
      }
    }
    .MuiAutocomplete-endAdornment {
      top: unset;
    }

    &::placeholder {
      color: var(--C-Dark-06);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }

    .MuiAutocomplete-clearIndicator {
      margin-right: 14px;
    }

    // searchIcon
    .MuiAutocomplete-endAdornment {
      .MuiAutocomplete-popupIndicator {
        width: 20px;
        height: 20px;
        right: 16px;
        background: url(/assets/woori-mobile/icon/search-blue.svg) no-repeat center;
        transform: none;
        .MuiSvgIcon-root {
          display: none;
        }
      }
    }

    // claseIcon
    .MuiAutocomplete-clearIndicator {
      width: 18px;
      height: 18px;
      margin: none;
      margin-right: 30px;
      background: url(/assets/woori-mobile/icon/search-close.svg) no-repeat center;
      transform: none;
      .MuiSvgIcon-root {
        display: none;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
`;G.__docgenInfo={description:"",methods:[],displayName:"WOSearchInput"};export{G as W};
