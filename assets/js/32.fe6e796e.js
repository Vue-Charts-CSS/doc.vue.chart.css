(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{409:function(t,s,a){"use strict";a.r(s);var e=a(49),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[a("strong",[t._v("Charts.css")]),t._v(" visualize data by applying "),a("strong",[t._v("CSS classes")]),t._v(" on HTML tags. The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.")]),t._v(" "),a("p",[a("strong",[t._v("Vue Charts.css")]),t._v(" will handle the classes for you. You can customize your charts with "),a("code",[t._v("props")]),t._v(", or when needed override the wrapper and add CSS classes.")]),t._v(" "),a("h2",{attrs:{id:"basic-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-setup"}},[t._v("#")]),t._v(" Basic Setup")]),t._v(" "),a("ol",[a("li",[a("p",[t._v('If you haven\'t already, you will need to first setup "vanilla" '),a("strong",[t._v("Charts.CSS")]),t._v(" following the "),a("a",{attrs:{href:"https://chartscss.org/docs/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation guide here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Tell Vue to use "),a("strong",[t._v("Vue Charts.CSS")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueChartsCSS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue.charts.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueChartsCSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Then anywhere in your Vue app...")])]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("charts-css")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("heading")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Coffee count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":labels")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Tue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Wed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":datasets")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[ { values: [4, 2, 70,] } ]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("We suggest with all of your charts, you provide values for the  "),a("code",[t._v("heading")]),t._v(", "),a("code",[t._v("labels")]),t._v(", and "),a("code",[t._v("datasets")]),t._v(" props. Using these props doesn't mean you have to render them on the front, but they will improve accessibility of your chart.")]),t._v(" "),a("p",[t._v("Underneath the hood, The data is placed in the document as HTML "),a("code",[t._v("<table>")]),t._v(" tag, making it visible to search engines and screen readers.")]),t._v(" "),a("h3",{attrs:{id:"why-datasets-what-if-i-only-have-one"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-datasets-what-if-i-only-have-one"}},[t._v("#")]),t._v(" Why "),a("code",[t._v("datasets")]),t._v(", what if I only have one?")]),t._v(" "),a("p",[t._v("This wrapper makes it easy to switch between chart types without hassle. When you only have a single dataset (typical of the "),a("code",[t._v("column")]),t._v(" chart) then you only need to specify one entry in your datasets object.")])])}),[],!1,null,null,null);s.default=n.exports}}]);