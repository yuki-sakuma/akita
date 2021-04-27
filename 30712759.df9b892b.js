(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var c=n(0),r=n.n(c);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),b=d(n),p=c,y=b["".concat(o,".").concat(p)]||b[p]||u[p]||i;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return d}));var c=n(3),r=n(7),i=(n(0),n(121)),o={title:"Query Entity"},l={unversionedId:"entities/query-entity",id:"entities/query-entity",isDocsHomePage:!1,title:"Query Entity",description:"The Entity Query is similar to the general Query, with additional functionality tailored for EntityStores.",source:"@site/docs/entities/query-entity.mdx",slug:"/entities/query-entity",permalink:"/akita/docs/entities/query-entity",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/entities/query-entity.mdx",version:"current",sidebar:"docs",previous:{title:"Entity Store",permalink:"/akita/docs/entities/entity-store"},next:{title:"Active Entity",permalink:"/akita/docs/entities/active"}},a=[{value:"API",id:"api",children:[{value:"<code>selectAll</code>",id:"selectall",children:[]},{value:"<code>selectMany</code>",id:"selectmany",children:[]},{value:"<code>selectEntity</code>",id:"selectentity",children:[]},{value:"<code>selectFirst</code>",id:"selectfirst",children:[]},{value:"<code>selectLast</code>",id:"selectlast",children:[]},{value:"<code>selectCount</code>",id:"selectcount",children:[]},{value:"<code>selectLoading</code>",id:"selectloading",children:[]},{value:"<code>selectError</code>",id:"selecterror",children:[]},{value:"<code>getAll</code>",id:"getall",children:[]},{value:"<code>getEntity</code>",id:"getentity",children:[]},{value:"<code>hasEntity</code>",id:"hasentity",children:[]},{value:"<code>getCount</code>",id:"getcount",children:[]},{value:"<code>Entity Actions</code>",id:"entity-actions",children:[]}]}],s={toc:a};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Entity Query is similar to the general ",Object(i.b)("inlineCode",{parentName:"p"},"Query"),", with additional functionality tailored for ",Object(i.b)("inlineCode",{parentName:"p"},"EntityStores"),"."),Object(i.b)("p",null,"Let's see how we can use it to create a ",Object(i.b)("inlineCode",{parentName:"p"},"todos")," query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.query.ts"',title:'"todos.query.ts"'}),"import { QueryEntity } from '@datorama/akita';\nimport { TodosStore, TodosState } from './todos.store';\n\nexport class TodosQuery extends QueryEntity<TodosState> {\n  constructor(protected store: TodosStore) {\n    super(store);\n  }\n}\n")),Object(i.b)("p",null,"The query has two notations - one for getting the data as an ",Object(i.b)("inlineCode",{parentName:"p"},"observable"),", which is prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"select"),", and one for getting the ",Object(i.b)("em",{parentName:"p"},"raw")," value, which is prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"get"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const todos$ = query.selectAll();\nconst todos = query.getAll();\n")),Object(i.b)("p",null,"By using this model, you will receive a lot of built-in functionality from Akita:"),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"selectall"},Object(i.b)("inlineCode",{parentName:"h3"},"selectAll")),Object(i.b)("p",null,"Select the entire store's entity collection:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const todos$ = query.selectAll();\n\nconst todos$ = query.selectAll({ asObject: true });\n\nconst completedTodos$ = query.selectAll({\n  filterBy: ({ completed }) => !!completed\n});\n\n// This will perform AND logic\nconst completedTodos$ = query.selectAll({  \n   filterBy: [   \n    (entity, index) => index % 2 === 0,   \n    ({ completed }) => !!completed  \n  ]\n});\n\ntodos$ = query.selectAll({ limitTo: 5 });\n")),Object(i.b)("h3",{id:"selectmany"},Object(i.b)("inlineCode",{parentName:"h3"},"selectMany")),Object(i.b)("p",null,"Select multiple entities from the store:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const todos$ = query.selectMany([id, id, id]);\n\n// Select the name property from each\nconst todos$ = query.selectMany([id, id, id], ({ name }) => name);\n")),Object(i.b)("h3",{id:"selectentity"},Object(i.b)("inlineCode",{parentName:"h3"},"selectEntity")),Object(i.b)("p",null,"Select an entity or a slice of an entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const todo$ = query.selectEntity(id);\nconst completed$ = query.selectEntity(1, 'completed');\nconst title$ = query.selectEntity(1, ({ title }) => title);\n\n// For performance reasons we expect the entity to be in the store.\n// If you need something dynamic use selectAll with filterBy.\nconst entity$ = query.selectEntity(({ title }) => title === slug);\n")),Object(i.b)("h3",{id:"selectfirst"},Object(i.b)("inlineCode",{parentName:"h3"},"selectFirst")),Object(i.b)("p",null,"Select the first entity from the store:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const firstTodo$ = query.selectFirst();\nconst firstTodoTitle$ = query.selectFirst(({ title }) => title);\n")),Object(i.b)("h3",{id:"selectlast"},Object(i.b)("inlineCode",{parentName:"h3"},"selectLast")),Object(i.b)("p",null,"Select the last entity from the store:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const lastTodo$ = query.selectLast();\nconst lastTodoTitle$ = query.selectLast(({ title }) => title);\n")),Object(i.b)("h3",{id:"selectcount"},Object(i.b)("inlineCode",{parentName:"h3"},"selectCount")),Object(i.b)("p",null,"Select the store's entity collection ",Object(i.b)("inlineCode",{parentName:"p"},"size"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const count$ = query.selectCount();\nconst completedCount$ = query.selectCount(({ completed }) => completed);\n")),Object(i.b)("h3",{id:"selectloading"},Object(i.b)("inlineCode",{parentName:"h3"},"selectLoading")),Object(i.b)("p",null,"Select the store's ",Object(i.b)("inlineCode",{parentName:"p"},"loading")," state:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const loading$ = query.selectLoading();\n")),Object(i.b)("h3",{id:"selecterror"},Object(i.b)("inlineCode",{parentName:"h3"},"selectError")),Object(i.b)("p",null,"Select the store's error state:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const error$ = this.query.selectError();\n")),Object(i.b)("h3",{id:"getall"},Object(i.b)("inlineCode",{parentName:"h3"},"getAll")),Object(i.b)("p",null,"Get the entire store's entity collection:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const todos = query.getAll();\nconst todos = query.getAll({ asObject: true });\n")),Object(i.b)("h3",{id:"getentity"},Object(i.b)("inlineCode",{parentName:"h3"},"getEntity")),Object(i.b)("p",null,"Get an entity by id:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const todo = query.getEntity(id);\n")),Object(i.b)("h3",{id:"hasentity"},Object(i.b)("inlineCode",{parentName:"h3"},"hasEntity")),Object(i.b)("p",null,"Returns whether an entity exists:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"// The store is empty when it returns false\nif(query.hasEntity()) { } \n  \nif(query.hasEntity(id)) { }\n \nif(query.hasEntity(({ completed }) => completed)) { }\n \nif(query.hasEntity([id, id, id])) { }\n")),Object(i.b)("h3",{id:"getcount"},Object(i.b)("inlineCode",{parentName:"h3"},"getCount")),Object(i.b)("p",null,"Get the store's entity collection length:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"const count = query.getCount();\nconst completedCount = query.getCount(({ completed }) => completed);\n")),Object(i.b)("h3",{id:"entity-actions"},Object(i.b)("inlineCode",{parentName:"h3"},"Entity Actions")),Object(i.b)("p",null,"Listen for any store action:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-ts"}),"import { EntityActions } from '@datorama/akita';\n\n// Listen for a specific action\nquery.selectEntityAction(EntityActions.Set).subscribe(newIds => {})\nquery.selectEntityAction(EntityActions.Add).subscribe(addedIds => {});\nquery.selectEntityAction(EntityActions.Update).subscribe(updatedIds => {});\nquery.selectEntityAction(EntityActions.Remove).subscribe(removedIds => {});\n\n// listen for a subset of actions\nquery.selectEntityAction([EntityActions.Add, EntityActions.Remove]).subscribe(action => {});\n\n// listen for all actions\nquery.selectEntityAction().subscribe(action => {});\n")))}d.isMDXComponent=!0}}]);