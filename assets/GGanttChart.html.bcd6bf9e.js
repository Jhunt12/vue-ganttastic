import{_ as o,r as l,o as a,c as d,a as t,b as e,d as r,e as s}from"./app.d4b712af.js";const c={},i=t("h1",{id:"reference-gganttchart",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reference-gganttchart","aria-hidden":"true"},"#"),e(" Reference: GGanttChart")],-1),u=t("p",null,[e("The main component of Vue Ganttastic. Represents an entire chart and is meant to have at least one "),t("code",null,"g-gantt-row"),e(" child component.")],-1),h=t("h2",{id:"props",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),e(" Props")],-1),p=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Type"),t("th",null,"Default"),t("th",null,"Description")])],-1),b=t("tr",null,[t("td",null,[t("code",null,"chart-start")]),t("td",null,"string"),t("td"),t("td",null,"Start date-time of the chart.")],-1),m=t("tr",null,[t("td",null,[t("code",null,"chart-end")]),t("td",null,"string"),t("td"),t("td",null,"End date-time of the chart.")],-1),g=t("tr",null,[t("td",null,[t("code",null,"precision")]),t("td",null,"string?"),t("td",null,[t("code",null,'"hour"')]),t("td",null,[e("Display precision of the time-axis. Possible values: "),t("code",null,"hour"),e(", "),t("code",null,"day"),e(" and "),t("code",null,"month"),e(".")])],-1),_=t("tr",null,[t("td",null,[t("code",null,"bar-start")]),t("td",null,"string"),t("td"),t("td",null,"Name of the property in bar objects that represents the start date.")],-1),v=t("tr",null,[t("td",null,[t("code",null,"bar-end")]),t("td",null,"string"),t("td"),t("td",null,"Name of the property in bar objects that represents the end date .")],-1),f=t("td",null,[t("code",null,"date-format")],-1),y=t("td",null,"string?",-1),k=t("td",null,[t("code",null,'"YYYY-MM-DD HH:mm"')],-1),j=t("code",null,"chart-start",-1),x=t("code",null,"chart-end",-1),E=t("code",null,"bar-start",-1),G=t("code",null,"bar-end",-1),B={href:"https://day.js.org/docs/en/parse/string-format",target:"_blank",rel:"noopener noreferrer"},w=t("tr",null,[t("td",null,[t("code",null,"width")]),t("td",null,"string?"),t("td",null,[t("code",null,'"100%"')]),t("td",null,[e("Width of the chart (e.g. "),t("code",null,"80%"),e(" or "),t("code",null,"800px"),e(")")])],-1),M=t("tr",null,[t("td",null,[t("code",null,"hide-timeaxis")]),t("td",null,"boolean?"),t("td",null,[t("code",null,"false")]),t("td",null,"Toggle visibility of the time axis.")],-1),O=t("tr",null,[t("td",null,[t("code",null,"color-scheme")]),t("td",null,"string | ColorScheme"),t("td",null,[t("code",null,'"default"')]),t("td",null,[e("Color scheme (theme) of the chart. Either use the name of one of the predefined schemes or pass a color-scheme-object of your own. See "),t("a",{href:"#color-schemes"},"color schemes"),e(".")])],-1),S=t("tr",null,[t("td",null,[t("code",null,"grid")]),t("td",null,"string?"),t("td",null,[t("code",null,"false")]),t("td",null,"Toggle visibility of background grid.")],-1),C=t("tr",null,[t("td",null,[t("code",null,"push-on-overlap")]),t("td",null,"boolean?"),t("td",null,[t("code",null,"false")]),t("td",null,'Specifies whether bars "push one another" when dragging and overlaping.')],-1),D=t("tr",null,[t("td",null,[t("code",null,"no-overlap")]),t("td",null,"boolean?"),t("td",null,[t("code",null,"false")]),t("td",null,[e("If "),t("code",null,"push-on-overlap"),e(" is "),t("code",null,"false"),e(", toggle this to prevent overlaps after drag by snapping the dragged bar back to its original position.")])],-1),N=t("tr",null,[t("td",null,[t("code",null,"row-height")]),t("td",null,"number?"),t("td",null,[t("code",null,"40")]),t("td",null,"Height of each row in pixels.")],-1),T=t("tr",null,[t("td",null,[t("code",null,"highlighted-units")]),t("td",null,"number[]?"),t("td",null,[t("code",null,"[]")]),t("td",null,"The time units specified here will be visually highlighted in the chart with a mild opaque color.")],-1),Y=t("tr",null,[t("td",null,[t("code",null,"font")]),t("td",null,[t("code",null,"string")]),t("td",null,[t("code",null,'"Helvetica"')]),t("td",null,"Font family of the chart.")],-1),H=s(`<h2 id="custom-events" tabindex="-1"><a class="header-anchor" href="#custom-events" aria-hidden="true">#</a> Custom Events</h2><table><thead><tr><th>Event name</th><th>Event data</th></tr></thead><tbody><tr><td><code>click-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent, datetime?: string}</code></td></tr><tr><td><code>mousedown-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent, datetime?: string}</code></td></tr><tr><td><code>mouseup-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent, datetime?: string}</code></td></tr><tr><td><code>dblclick-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent, datetime?: string}</code></td></tr><tr><td><code>mouseenter-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent}</code></td></tr><tr><td><code>mouseleave-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent}</code></td></tr><tr><td><code>dragstart-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent}</code></td></tr><tr><td><code>drag-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent}</code></td></tr><tr><td><code>dragend-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent, movedBars?: Map&lt;GanttBarObject, {oldStart: string, oldEnd: string}&gt;}</code></td></tr><tr><td><code>contextmenu-bar</code></td><td><code>{bar: GanttBarObject, e: MouseEvent, datetime?: string}</code></td></tr></tbody></table><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>Slot name</th><th>Slot data</th><th>Description</th></tr></thead><tbody><tr><td><code>upper-timeunit</code></td><td><code>{label: string, value: string}</code></td><td>Content of an upper time-unit section in the time axis.</td></tr><tr><td><code>timeunit</code></td><td><code>{label: string, value: string}</code></td><td>Content of a time-unit section in the time axis.</td></tr><tr><td><code>bar-tooltip</code></td><td><code>{bar: GanttBarObject}</code></td><td>Slot for the tooltip which appears when hovering over a bar.</td></tr></tbody></table><h2 id="color-schemes" tabindex="-1"><a class="header-anchor" href="#color-schemes" aria-hidden="true">#</a> Color Schemes</h2><p>List of pre-defined color schemes:</p><ul><li><code>default</code></li><li><code>creamy</code></li><li><code>crimson</code></li><li><code>dark</code></li><li><code>flare</code></li><li><code>fuchsia</code></li><li><code>grove</code></li><li><code>material-blue</code></li><li><code>sky</code></li><li><code>slumber</code></li><li><code>vue</code></li></ul><p>You can also provide your own color scheme. Your custom color scheme should be an object of the following shape:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">primary</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">secondary</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">ternary</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">quartenary</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">hoverHighlight</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  toast<span class="token operator">?</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function V(I,L){const n=l("ExternalLinkIcon");return a(),d("div",null,[i,u,h,t("table",null,[p,t("tbody",null,[b,m,g,_,v,t("tr",null,[f,y,k,t("td",null,[e("Datetime string format of "),j,e(", "),x,e(" and the values of the "),E,e(", "),G,e(" properties in bar objects. See "),t("a",B,[e("Day.js format tokens"),r(n)]),e(".")])]),w,M,O,S,C,D,N,T,Y])]),H])}const q=o(c,[["render",V],["__file","GGanttChart.html.vue"]]);export{q as default};
