var W=Object.defineProperty,G=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(e,o,r)=>o in e?W(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,l=(e,o)=>{for(var r in o||(o={}))j.call(o,r)&&w(e,r,o[r]);if(m)for(var r of m(o))S.call(o,r)&&w(e,r,o[r]);return e},u=(e,o)=>G(e,K(o));var L=(e,o)=>{var r={};for(var s in e)j.call(e,s)&&o.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&m)for(var s of m(e))o.indexOf(s)<0&&S.call(e,s)&&(r[s]=e[s]);return r};import{c as t,A as J,M as Q,r as Y,a as B,o as c,b as f,t as Z,n as ee,d as te,e as O,f as T,g as y,h as b,i as C,j as oe,k as M,l as re,m as se,p as ne,q as ae,s as ie,u as le,v as ce,w as de,x as pe,y as me,z as ge,B as ue,C as ye,D as be,E as fe,F as he}from"./vendor.d714e63e.js";const ve=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};ve();const ke={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var _e=Object.freeze(Object.defineProperty({__proto__:null,parameters:ke},Symbol.toStringTag,{value:"Module"})),xe="/assets/code-brackets.9ef6443e.svg",we="/assets/colors.ac9401f3.svg",je="/assets/comments.f15a6837.svg",Se="/assets/direction.94a9917f.svg",Le="/assets/flow.275142c6.svg",Be="/assets/plugin.57148314.svg",Te="/assets/repo.fb4ece47.svg",Me="/assets/stackalt.2ad81543.svg";const Oe={},Ce="wrapper";function z(r){var s=r,{components:e}=s,o=L(s,["components"]);return t(Ce,u(l(l({},Oe),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:Be,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:Me,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:we,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:Le,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:Te,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:Se,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:xe,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:je,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"src/stories/Introduction.stories.mdx")))}z.isMDXComponent=!0;const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const d={title:"Example/Introduction",includeStories:["__page"]},ze={};d.parameters=d.parameters||{};d.parameters.docs=u(l({},d.parameters.docs||{}),{page:()=>t(J,{mdxStoryNameToKey:ze,mdxComponentAnnotations:d},t(z,null))});var Ee=Object.freeze(Object.defineProperty({__proto__:null,__page:E,default:d},Symbol.toStringTag,{value:"Module"}));var h=(e,o)=>{const r=e.__vccOpts||e;for(const[s,n]of o)r[s]=n;return r};const N={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:o}){return e=Y(e),{classes:B(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:B(()=>({backgroundColor:e.backgroundColor})),onClick(){o("click")}}}};function Ne(e,o,r,s,n,a){return c(),f("button",{type:"button",class:ee(s.classes),onClick:o[0]||(o[0]=(...i)=>s.onClick&&s.onClick(...i)),style:te(s.style)},Z(r.label),7)}var v=h(N,[["render",Ne]]);N.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};var Pe={parameters:{storySource:{source:`import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Example/Button",component:v,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}};const g=e=>({components:{MyButton:v},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),P=g.bind({});P.args={primary:!0,label:"Button"};const $=g.bind({});$.args={label:"Button"};const I=g.bind({});I.args={size:"large",label:"Button"};const A=g.bind({});A.args={size:"small",label:"Button"};const $e=["Primary","Secondary","Large","Small"];var Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Pe,Primary:P,Secondary:$,Large:I,Small:A,__namedExportsOrder:$e},Symbol.toStringTag,{value:"Module"}));const H={name:"my-header",components:{MyButton:v},props:{user:{type:Object}},emits:["login","logout","createAccount"]},Ae={class:"wrapper"},He=C('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1);function De(e,o,r,s,n,a){const i=O("my-button");return c(),f("header",null,[T("div",Ae,[He,T("div",null,[r.user?(c(),y(i,{key:0,size:"small",onClick:o[0]||(o[0]=p=>e.$emit("logout")),label:"Log out"})):b("",!0),r.user?b("",!0):(c(),y(i,{key:1,size:"small",onClick:o[1]||(o[1]=p=>e.$emit("login")),label:"Log in"})),r.user?b("",!0):(c(),y(i,{key:2,primary:"",size:"small",onClick:o[2]||(o[2]=p=>e.$emit("createAccount")),label:"Sign up"}))])])])}var k=h(H,[["render",De]]);H.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};var Ue={parameters:{storySource:{source:`import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
};

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyHeader },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:8},endLoc:{col:2,line:18},startBody:{col:17,line:8},endBody:{col:2,line:18}},"logged-out":{startLoc:{col:17,line:8},endLoc:{col:2,line:18},startBody:{col:17,line:8},endBody:{col:2,line:18}}}}},title:"Example/Header",component:k};const D=e=>({components:{MyHeader:k},setup(){return l({},e)},template:'<my-header :user="user" />'}),_=D.bind({});_.args={user:{}};const x=D.bind({});x.args={user:null};const Ve=["LoggedIn","LoggedOut"];var Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Ue,LoggedIn:_,LoggedOut:x,__namedExportsOrder:Ve},Symbol.toStringTag,{value:"Module"}));const U={name:"my-page",components:{MyHeader:k},props:{user:{type:Object}},emits:["login","logout","createAccount"]},qe=C('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function Re(e,o,r,s,n,a){const i=O("my-header");return c(),f("article",null,[oe(i,{user:r.user,onLogin:o[0]||(o[0]=p=>e.$emit("login")),onLogout:o[1]||(o[1]=p=>e.$emit("logout")),onCreateAccount:o[2]||(o[2]=p=>e.$emit("createAccount"))},null,8,["user"]),qe])}var V=h(U,[["render",Re]]);U.__docgenInfo={displayName:"my-page",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var Xe={parameters:{storySource:{source:`import MyPage from './Page.vue';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: MyPage,
};

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyPage },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: '<my-page :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:9},endLoc:{col:2,line:19},startBody:{col:17,line:9},endBody:{col:2,line:19}},"logged-out":{startLoc:{col:17,line:9},endLoc:{col:2,line:19},startBody:{col:17,line:9},endBody:{col:2,line:19}}}}},title:"Example/Page",component:V};const F=e=>({components:{MyPage:V},setup(){return{user:e.user}},template:'<my-page :user="user" />'}),q=F.bind({});q.args=l({},_.args);const R=F.bind({});R.args=l({},x.args);const We=["LoggedIn","LoggedOut"];var Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Xe,LoggedIn:q,LoggedOut:R,__namedExportsOrder:We},Symbol.toStringTag,{value:"Module"}));function X(e){return{"/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Introduction.stories.mdx":Ee,"/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Button.stories.js":Ie,"/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Header.stories.js":Fe,"/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Page.stories.js":Ge}[e]}Object.assign(X,{keys:()=>["/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Introduction.stories.mdx","/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Button.stories.js","/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Header.stories.js","/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Page.stories.js"],resolve:e=>({"/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx","/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Button.stories.js":"./src/stories/Button.stories.js","/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Header.stories.js":"./src/stories/Header.stories.js","/Users/tobias.klemp/projects/storybook-vite-test/src/stories/Page.stories.js":"./src/stories/Page.stories.js"})[e]});function Ke(e){e(X,{hot:!1},!1)}const Je=[le,ce,de,pe,me,ge,ue,ye,be,fe,_e].filter(Boolean);Je.forEach(e=>{Object.keys(e).forEach(o=>{const r=e[o];switch(o){case"args":case"argTypes":return ie.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(s=>ae(s,!1));case"loaders":return r.forEach(s=>ne(s,!1));case"parameters":return M(l({},r),!1);case"argTypesEnhancers":return r.forEach(s=>se(s));case"argsEnhancers":return r.forEach(s=>re(s));case"globals":case"globalTypes":{const s={};return s[o]=r,M(s,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});Ke(he);
//# sourceMappingURL=iframe.aad10838.js.map
