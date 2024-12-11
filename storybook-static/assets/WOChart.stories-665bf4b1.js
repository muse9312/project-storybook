import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as P}from"./index-76fb7be0.js";import{u as D}from"./styled-components.browser.esm-aa768a49.js";import{c as I,g as q}from"./_commonjsHelpers-de833af9.js";import{H as B,f as F}from"./response-51863d76.js";var A={exports:{}};(function(u,g){(function(x,p){u.exports=p(P)})(typeof self<"u"?self:I,function(x){return function(p){function n(e){if(c[e])return c[e].exports;var i=c[e]={i:e,l:!1,exports:{}};return p[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var c={};return n.m=p,n.c=c,n.d=function(e,i,l){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:l})},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(p,n,c){function e(){return e=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},e.apply(this,arguments)}function i(t){return z(t)||k(t)||_(t)||l()}function l(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,r){if(t){if(typeof t=="string")return d(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(t,r):void 0}}function k(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function z(t){if(Array.isArray(t))return d(t)}function d(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,a=new Array(r);o<r;o++)a[o]=t[o];return a}function b(t){"@babel/helpers - typeof";return(b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}Object.defineProperty(n,"__esModule",{value:!0}),c.d(n,"HighchartsReact",function(){return v});var s=c(1),H=c.n(s),w=typeof window<"u"?s.useLayoutEffect:s.useEffect,v=Object(s.memo)(Object(s.forwardRef)(function(t,r){var o=Object(s.useRef)(),a=Object(s.useRef)(),j=Object(s.useRef)(t.constructorType),O=Object(s.useRef)(t.highcharts);return w(function(){function m(){var y=t.highcharts||(typeof window>"u"?"undefined":b(window))==="object"&&window.Highcharts,E=t.constructorType||"chart";y?y[E]?t.options?a.current=y[E](o.current,t.options,t.callback):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(a.current){if(t.allowChartUpdate!==!1)if(t.constructorType!==j.current||t.highcharts!==O.current)j.current=t.constructorType,O.current=t.highcharts,m();else if(!t.immutable&&a.current){var C;(C=a.current).update.apply(C,[t.options].concat(i(t.updateArgs||[!0,!0])))}else m()}else m()},[t.options,t.allowChartUpdate,t.updateArgs,t.containerProps,t.highcharts,t.constructorType]),w(function(){return function(){a.current&&(a.current.destroy(),a.current=null)}},[]),Object(s.useImperativeHandle)(r,function(){return{get chart(){return a.current},container:o}},[]),H.a.createElement("div",e({},t.containerProps,{ref:o}))}));n.default=v},function(p,n){p.exports=x}])})})(A);var M=A.exports;const U=q(M),R=({options:u,type:g})=>f.jsx(N,{className:`chart-wrap ${g||""}`,children:f.jsx(U,{highcharts:B,options:u})}),N=D.div`
  .highcharts-credits {
    display: none;
  }
  &.fds {
    .highcharts {
      &-container {
        height: 218px !important;
      }
      &-background {
        fill: transparent;
      }
      &-axis {
        &.highcharts-xaxis {
          display: none;
        }
      }

      &-axis-labels {
        text {
          color: var(--White) !important;
          fill: var(--White) !important;
          font-size: 12px !important;
          font-weight: 400;
          opacity: 0.6;
        }
      }
      &-yaxis-grid {
        .highcharts-grid-line {
          stroke-width: 1px;
          stroke: var(--White);
          background: #fff;
          opacity: 0.1;
        }
      }
      &-column-series {
        .highcharts-point {
          stroke-width: 0;
        }
      }
      &-legend {
        text {
          color: var(--White) !important;
          fill: var(--White) !important;
          font-size: 12px !important;
          font-weight: 400;
        }
        &-item {
          .highcharts-point {
            stroke-width: 0;
          }
          &.highcharts-column-series {
            .highcharts-point {
              x: 10;
              y: 11;
            }
          }
        }
      }
    }
  }
  &.column {
    .highcharts-axis-labels {
      text {
        font-size: 10px !important;
        font-weight: 400;
      }
    }
    .highcharts-legend-item {
      text {
        font-size: 14px !important;
        font-weight: 400;
      }
    }
    .highcharts-tooltip {
      filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3)) !important;
      &-box {
        padding: 12px 16px;
      }
      text {
        tspan {
          /* font-size: 14px !important; */
          &:first-child {
            padding: 4px 0;
            display: block;
            // category
            font-size: 100% !important;
            font-weight: 700;
          }
          &.highcharts-br {
            & + tspan {
              // point
              font-size: 9px !important;
            }
          }
        }
      }
      > span {
        height: 200px;
      }
    }
  }
`;R.__docgenInfo={description:"",methods:[],displayName:"WOChart"};const K={title:"WooriPC/ETC/WOChart",component:R,parameters:{layout:"centered",docs:{description:{component:"```jsx\r\nHighcharts 공통 컴포넌트 \r\n```"}}},decorators:[u=>f.jsx("div",{style:{minWidth:"230px"},children:f.jsx(u,{})})],tags:["autodocs"],argTypes:{options:{control:"object",description:"highCharts의 데이터 옵션 입니다",defaultValue:{summary:void 0},type:{summary:"object",required:!1}},type:{control:"select",options:["fds"],description:"차트 스타일을 지정하는 타입 입니다",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},h={args:{options:F,type:"fds"}};var S,T,W;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: fdsChartOptions,
    type: 'fds'
  }
}`,...(W=(T=h.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const Q=["Default"];export{h as Default,Q as __namedExportsOrder,K as default};
