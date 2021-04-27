(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(121)),c={title:"Angular Router Store"},s={unversionedId:"angular/router",id:"angular/router",isDocsHomePage:!1,title:"Angular Router Store",description:"Bindings to connect Angular router to Akita store.",source:"@site/docs/angular/router.mdx",slug:"/angular/router",permalink:"/akita/docs/angular/router",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/angular/router.mdx",version:"current",sidebar:"docs",previous:{title:"Effects",permalink:"/akita/docs/angular/effects"},next:{title:"Angular Forms Manager",permalink:"/akita/docs/angular/forms-manager"}},u=[{value:"<code>selectParams</code>",id:"selectparams",children:[]},{value:"<code>getParams</code>",id:"getparams",children:[]},{value:"<code>selectQueryParams</code>",id:"selectqueryparams",children:[]},{value:"<code>getQueryParams</code>",id:"getqueryparams",children:[]},{value:"<code>selectFragment</code>",id:"selectfragment",children:[]},{value:"<code>getFragment</code>",id:"getfragment",children:[]},{value:"<code>selectData</code>",id:"selectdata",children:[]},{value:"<code>getData</code>",id:"getdata",children:[]},{value:"<code>selectNavigationExtras</code>",id:"selectnavigationextras",children:[]},{value:"<code>getNavigationExtras</code>",id:"getnavigationextras",children:[]},{value:"<code>selectNavigationCancel</code>",id:"selectnavigationcancel",children:[]},{value:"<code>selectNavigationError</code>",id:"selectnavigationerror",children:[]},{value:"Lazy Load Modules",id:"lazy-load-modules",children:[]}],i={toc:u};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Bindings to connect Angular router to Akita store.")),Object(o.b)("p",null,"To get started, install the ",Object(o.b)("inlineCode",{parentName:"p"},"@datorama/akita-ng-router-store")," package and add to the ",Object(o.b)("inlineCode",{parentName:"p"},"AppModule")," the Akita\u2019s devtools modules:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';\nimport { \n  AkitaNgRouterStoreModule \n} from '@datorama/akita-ng-router-store';\n\n\u200b@NgModule({ \nimports: [\n  AkitaNgRouterStoreModule,\n  environment.production ? [] : AkitaNgDevtools.forRoot()\n})\nexport class AppModule {\n}\n")),Object(o.b)("p",null,"With this setup, you'll get two things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You'll see the Router actions in Redux devtools."),Object(o.b)("li",{parentName:"ol"},"A unique queries selectors to query the router state:")),Object(o.b)("h3",{id:"selectparams"},Object(o.b)("inlineCode",{parentName:"h3"},"selectParams")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectParams().subscribe();\n     routerQuery.selectParams('id').subscribe();\n     routerQuery.selectParams(['id', 'type']).subscribe();\n   }\n }\n")),Object(o.b)("h3",{id:"getparams"},Object(o.b)("inlineCode",{parentName:"h3"},"getParams")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     const params = routerQuery.getParams();\n   }\n }\n")),Object(o.b)("h3",{id:"selectqueryparams"},Object(o.b)("inlineCode",{parentName:"h3"},"selectQueryParams")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectQueryParams().subscribe();\n     routerQuery.selectQueryParams('id').subscribe();\n     routerQuery.selectQueryParams(['id', 'type']).subscribe();\n   }\n }\n")),Object(o.b)("h3",{id:"getqueryparams"},Object(o.b)("inlineCode",{parentName:"h3"},"getQueryParams")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     const params = routerQuery.getQueryParams();\n   }\n }\n")),Object(o.b)("h3",{id:"selectfragment"},Object(o.b)("inlineCode",{parentName:"h3"},"selectFragment")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectFragment().subscribe();\n     routerQuery.selectFragment('id').subscribe();\n     routerQuery.selectFragment(['id', 'type']).subscribe();\n   }\n }\n")),Object(o.b)("h3",{id:"getfragment"},Object(o.b)("inlineCode",{parentName:"h3"},"getFragment")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     const fragment = routerQuery.getFragment();\n   }\n }\n")),Object(o.b)("h3",{id:"selectdata"},Object(o.b)("inlineCode",{parentName:"h3"},"selectData")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectData().subscribe();\n     routerQuery.selectData('id').subscribe();\n     routerQuery.selectData(['id', 'type']).subscribe();\n   }\n }\n")),Object(o.b)("h3",{id:"getdata"},Object(o.b)("inlineCode",{parentName:"h3"},"getData")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     const data = routerQuery.getData();\n   }\n }\n")),Object(o.b)("h3",{id:"selectnavigationextras"},Object(o.b)("inlineCode",{parentName:"h3"},"selectNavigationExtras")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectNavigationExtras().subscribe();\n   }\n }\n")),Object(o.b)("h3",{id:"getnavigationextras"},Object(o.b)("inlineCode",{parentName:"h3"},"getNavigationExtras")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     const extras = routerQuery.getNavigationExtras();\n   }\n }\n")),Object(o.b)("h3",{id:"selectnavigationcancel"},Object(o.b)("inlineCode",{parentName:"h3"},"selectNavigationCancel")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectNavigationCancel().subscribe();\n   }\n }\n")),Object(o.b)("h3",{id:"selectnavigationerror"},Object(o.b)("inlineCode",{parentName:"h3"},"selectNavigationError")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RouterQuery } from '@datorama/akita-ng-router-store';\n\nexport class ArticlesQuery extends QueryEntity<ArticlesState> {\n   constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n     routerQuery.selectNavigationError().subscribe();\n   }\n }\n")),Object(o.b)("p",null,"For example, we can create a query that maps an id from the URL to an entity in the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="articles.query.ts"',title:'"articles.query.ts"'}),"export class ArticlesQuery extends QueryEntity<ArticlesState> {\n  selectArticle$ = this.routerQuery.selectParams('id').pipe(\n     switchMap(id => this.selectEntity(id))\n  );\n\n  constructor(protected store: ArticlesStore, \n              private routerQuery: RouterQuery) {\n    super(store);\n  }\n}\n")),Object(o.b)("p",null,"And use it in the component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="articles.component.ts"',title:'"articles.component.ts"'}),"@Component()\nexport class ArticleComponent {\n  article$ = this.articlesQuery.selectArticle$;\n  \n  constructor(private articlesQuery: ArticlesQuery) {}\n}\n")),Object(o.b)("h2",{id:"lazy-load-modules"},"Lazy Load Modules"),Object(o.b)("p",null,"To get the lazy modules routing params, add the following option to the ",Object(o.b)("inlineCode",{parentName:"p"},"RouterModule.forRoot")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'}),"{\n  imports: [\n    RouterModule.forRoot(routes, { \n      paramsInheritanceStrategy: 'always' \n    })\n  ]\n}\n")))}l.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?n.a.createElement(m,s(s({ref:t},i),{},{components:r})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);