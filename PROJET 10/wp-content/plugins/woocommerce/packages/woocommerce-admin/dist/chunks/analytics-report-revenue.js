(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[13],{524:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return F}));var a=r(0),o=r(1),s=r.n(o),n=r(573),c=r(555),i=r(552),l=r(556),m=r(2),d=r(69),u=r(7),b=r(15),_=r(3),p=r(23),y=r(139),O=r(17),g=r(11),j=r(21),v=r(31),w=r(550),f=r(545);const h=[],S=["orders_count","gross_sales","total_sales","refunds","coupons","taxes","shipping","net_revenue"];class R extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(m.__)("Date",'woocommerce'),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:Object(m.__)("Orders",'woocommerce'),key:"orders_count",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Gross Sales",'woocommerce'),key:"gross_sales",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Returns",'woocommerce'),key:"refunds",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Coupons",'woocommerce'),key:"coupons",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Net Sales",'woocommerce'),key:"net_revenue",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Taxes",'woocommerce'),key:"taxes",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Shipping",'woocommerce'),key:"shipping",required:!1,isSortable:!0,isNumeric:!0},{label:Object(m.__)("Total Sales",'woocommerce'),key:"total_sales",required:!1,isSortable:!0,isNumeric:!0}]}getRowsContent(e=[]){const t=Object(O.h)("dateFormat",j.defaultTableDateFormat),{formatAmount:r,render:o,formatDecimal:s,getCurrencyConfig:n}=this.context;return e.map(e=>{const{coupons:c,gross_sales:i,total_sales:l,net_revenue:m,orders_count:u,refunds:b,shipping:_,taxes:O}=e.subtotals,g=Object(a.createElement)(p.Link,{href:"edit.php?post_type=shop_order&m="+Object(d.format)("Ymd",e.date_start),type:"wp-admin"},Object(y.formatValue)(n(),"number",u));return[{display:Object(a.createElement)(p.Date,{date:e.date_start,visibleFormat:t}),value:e.date_start},{display:g,value:Number(u)},{display:o(i),value:s(i)},{display:r(b),value:s(b)},{display:r(c),value:s(c)},{display:o(m),value:s(m)},{display:o(O),value:s(O)},{display:o(_),value:s(_)},{display:o(l),value:s(l)}]})}getSummary(e,t=0){const{orders_count:r=0,gross_sales:a=0,total_sales:o=0,refunds:s=0,coupons:n=0,taxes:c=0,shipping:i=0,net_revenue:l=0}=e,{formatAmount:d,getCurrencyConfig:u}=this.context,b=u();return[{label:Object(m._n)("day","days",t,'woocommerce'),value:Object(y.formatValue)(b,"number",t)},{label:Object(m._n)("order","orders",r,'woocommerce'),value:Object(y.formatValue)(b,"number",r)},{label:Object(m.__)("gross sales",'woocommerce'),value:d(a)},{label:Object(m.__)("returns",'woocommerce'),value:d(s)},{label:Object(m.__)("coupons",'woocommerce'),value:d(n)},{label:Object(m.__)("net sales",'woocommerce'),value:d(l)},{label:Object(m.__)("taxes",'woocommerce'),value:d(c)},{label:Object(m.__)("shipping",'woocommerce'),value:d(i)},{label:Object(m.__)("total sales",'woocommerce'),value:d(o)}]}render(){const{advancedFilters:e,filters:t,tableData:r,query:o}=this.props;return Object(a.createElement)(w.a,{endpoint:"revenue",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:S,query:o,tableData:r,title:Object(m.__)("Revenue",'woocommerce'),columnPrefsKey:"revenue_report_columns",filters:t,advancedFilters:e})}}R.contextType=f.a;const q=Object(_.memoize)((e,t,r,a)=>({tableData:{items:{data:Object(_.get)(a,["data","intervals"],h),totalResults:Object(_.get)(a,["totalResults"],0)},isError:e,isRequesting:t,query:r}}),(e,t,r,a)=>[e,t,Object(v.stringify)(r),Object(_.get)(a,["totalResults"],0),Object(_.get)(a,["data","intervals"],h).length].join(":")),C=Object(_.memoize)((e,t,r,a,o)=>({interval:"day",orderby:t,order:e,page:r,per_page:a,after:Object(j.appendTimestamp)(o.primary.after,"start"),before:Object(j.appendTimestamp)(o.primary.before,"end")}),(e,t,r,a,o)=>[e,t,r,a,o.primary.after,o.primary.before].join(":"));var k=Object(b.compose)(Object(u.withSelect)((e,t)=>{const{query:r,filters:a,advancedFilters:o}=t,{woocommerce_default_date_range:s}=e(g.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),n=Object(j.getCurrentDates)(r,s),{getReportStats:c,getReportStatsError:i,isResolving:l}=e(g.REPORTS_STORE_NAME),m=C(r.order||"desc",r.orderby||"date",r.paged||1,r.per_page||g.QUERY_DEFAULTS.pageSize,n),d=Object(g.getReportTableQuery)({endpoint:"revenue",query:r,select:e,tableQuery:m,filters:a,advancedFilters:o}),u=c("revenue",d),b=Boolean(i("revenue",d)),_=l("getReportStats",["revenue",d]);return q(b,_,m,u)}))(R),E=r(549);class F extends a.Component{render(){const{path:e,query:t}=this.props;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(E.a,{query:t,path:e,report:"revenue",filters:n.c,advancedFilters:n.a}),Object(a.createElement)(l.a,{charts:n.b,endpoint:"revenue",query:t,selectedChart:Object(c.a)(t.chart,n.b),filters:n.c,advancedFilters:n.a}),Object(a.createElement)(i.a,{charts:n.b,endpoint:"revenue",path:e,query:t,selectedChart:Object(c.a)(t.chart,n.b),filters:n.c,advancedFilters:n.a}),Object(a.createElement)(k,{query:t,filters:n.c,advancedFilters:n.a}))}}F.propTypes={path:s.a.string.isRequired,query:s.a.object.isRequired}},573:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return c}));var a=r(2),o=r(34);const s=Object(o.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:Object(a.__)("Gross Sales",'woocommerce'),order:"desc",orderby:"gross_sales",type:"currency"},{key:"refunds",label:Object(a.__)("Returns",'woocommerce'),order:"desc",orderby:"refunds",type:"currency"},{key:"coupons",label:Object(a.__)("Coupons",'woocommerce'),order:"desc",orderby:"coupons",type:"currency"},{key:"net_revenue",label:Object(a.__)("Net Sales",'woocommerce'),orderby:"net_revenue",type:"currency"},{key:"taxes",label:Object(a.__)("Taxes",'woocommerce'),order:"desc",orderby:"taxes",type:"currency"},{key:"shipping",label:Object(a.__)("Shipping",'woocommerce'),orderby:"shipping",type:"currency"},{key:"total_sales",label:Object(a.__)("Total Sales",'woocommerce'),order:"desc",orderby:"total_sales",type:"currency"}]),n=Object(o.applyFilters)("woocommerce_admin_revenue_report_filters",[]),c=Object(o.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{})}}]);