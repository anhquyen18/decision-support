import{_ as v,d as y,r as b,a as p,o as f,c as _,b as t,e as o,f as I,i as S,w as n,n as V,g as r,t as K,h as U,p as w,j as $,k as H,l as N,F as B}from"./index-c29b1a2e.js";const D=y({components:{},setup(){const e=b("");return{onSearch:l=>{},value:e}}}),j={class:"container-fluid shadow"},L={class:"row text-white",style:{"background-color":"#6794e0","min-height":"6vh","max-height":"6vh"}},G=t("div",{class:"col-1 d-flex align-items-center justify-content-center"},[t("span",null,[t("i",{class:"fa-solid fa-align-justify fs-4"})])],-1),F={class:"col-7 d-flex justify-content-start align-items-center"},A=I('<div class="col-4"><div class="row h-100"><div class="col-4 d-flex align-items-center justify-content-center"><span><i class="fa-solid fa-house me-2 fs-6"></i></span><span>Trang chủ</span></div><div class="col-4 d-flex align-items-center justify-content-center"><span><i class="fa-solid fa-radio me-2 fs-6"></i></span><span>Tin tức</span></div><div class="col-4 d-flex align-items-center justify-content-end"><span><i class="fa-solid fa-right-to-bracket me-2 fs-6"></i></span><span>Đăng nhập</span></div></div></div>',1);function z(e,s,l,h,k,m){const i=p("a-input-search");return f(),_("div",j,[t("div",L,[G,t("div",F,[o(i,{value:e.value,"onUpdate:value":s[0]||(s[0]=c=>e.value=c),placeholder:"Nhập từ khoá để tìm kiếm","enter-button":"",onSearch:e.onSearch,style:{width:"40%"},allowClear:""},null,8,["value","onSearch"])]),A])])}const E=v(D,[["render",z]]);const O=y({components:{},setup(){const e=b(["1"]),s=[{key:"dataTab",tab:"Danh mục dữ liệu",icon:"fa-solid fa-database"},{key:"searchTab",tab:"Tìm kiếm",icon:"fa-solid fa-magnifying-glass"}],l=b("dataTab"),h=(i,c)=>{c==="key"?l.value=i:c==="noTitleKey"&&(noTitleKey.value=i)},k=S("detailPanelVisible"),m=()=>{k.value=!0};return{tabList:s,tabKey:l,onTabChange:h,activeKey:e,checked:b(!1),openDrawer:m}}}),d=e=>(w("data-v-67b401a5"),e=e(),$(),e),Z={class:"side-bar border-end"},J=d(()=>t("div",{class:"logo-container d-flex justify-content-center align-items-center border-bottom"},[t("img",{class:"rounded",alt:"",width:"100",height:"100"})],-1)),W={key:0},X={class:"switch-item"},Y={class:"switch-item"},q={class:"switch-item"},Q={class:"switch-item"},R=d(()=>t("i",{class:"fa-solid fa-house-flood-water-circle-arrow-right"},null,-1)),x={class:"switch-item"},ee=d(()=>t("p",{class:""},"Mô hình 1",-1)),se={class:"switch-item"},te=d(()=>t("p",null,"Mô hình 2",-1)),ae={class:"switch-item"},oe=d(()=>t("p",null,"Mô hình 3",-1)),ne=d(()=>t("i",{class:"fa-solid fa-cloud-rain"},null,-1)),ie={class:"switch-item"},le={class:"switch-item"},ce={class:"switch-item"},de={class:"switch-item"},re=d(()=>t("i",{class:"fa-solid fa-house-flood-water-circle-arrow-right"},null,-1)),he={class:"switch-item"},pe=d(()=>t("p",{class:""},"Mô hình 1",-1)),ue={class:"switch-item"},fe=d(()=>t("p",null,"Mô hình 2",-1)),_e={class:"switch-item"},ke=d(()=>t("p",null,"Mô hình 3",-1)),me=d(()=>t("i",{class:"fa-solid fa-cloud-rain"},null,-1)),be={class:"switch-item"},ve={class:"switch-item"},ye={class:"switch-item"},ge={class:"switch-item"},we=d(()=>t("i",{class:"fa-solid fa-house-flood-water-circle-arrow-right"},null,-1)),$e={class:"switch-item"},Ce=d(()=>t("p",{class:""},"Mô hình 1",-1)),Se={class:"switch-item"},Ve=d(()=>t("p",null,"Mô hình 2",-1)),Ue={class:"switch-item"},Pe=d(()=>t("p",null,"Mô hình 3",-1)),Te=d(()=>t("i",{class:"fa-solid fa-cloud-rain"},null,-1)),Me={key:1},Ie=d(()=>t("div",null,"this is tab tim kiem",-1)),Ke=[Ie];function He(e,s,l,h,k,m){const i=p("a-checkbox"),c=p("a-collapse-panel"),u=p("a-switch"),C=p("a-collapse"),M=p("a-card");return f(),_("div",Z,[J,o(M,{bodyStyle:{padding:0},"tab-list":e.tabList,"active-tab-key":e.tabKey,onTabChange:s[23]||(s[23]=a=>e.onTabChange(a,"key")),style:{padding:"0 !important"}},{customTab:n(a=>[t("span",null,[t("i",{class:V(a.icon)},null,2),r(" "+K(a.tab),1)])]),default:n(()=>[e.tabKey==="dataTab"?(f(),_("div",W,[o(C,{activeKey:e.activeKey,"onUpdate:activeKey":s[22]||(s[22]=a=>e.activeKey=a),bordered:!1,ghost:""},{default:n(()=>[o(c,{key:"1",header:"Dữ liệu hồ"},{extra:n(()=>[R]),default:n(()=>[t("div",X,[o(i,{checked:e.checked,"onUpdate:checked":s[0]||(s[0]=a=>e.checked=a),onChange:s[1]||(s[1]=a=>e.openDrawer())},{default:n(()=>[r("Hồ nước")]),_:1},8,["checked"])]),t("div",Y,[o(i,{checked:e.checked,"onUpdate:checked":s[2]||(s[2]=a=>e.checked=a)},{default:n(()=>[r("Hồ Bách Khoa")]),_:1},8,["checked"])]),t("div",q,[o(i,{checked:e.checked,"onUpdate:checked":s[3]||(s[3]=a=>e.checked=a)},{default:n(()=>[r("Hồ Nghiên Cứu")]),_:1},8,["checked"])]),t("div",Q,[o(i,{checked:e.checked,"onUpdate:checked":s[4]||(s[4]=a=>e.checked=a)},{default:n(()=>[r("Hồ Đà Nẵng")]),_:1},8,["checked"])])]),_:1}),o(c,{key:"2",header:"Mô hình dự báo mưa"},{extra:n(()=>[ne]),default:n(()=>[t("div",x,[o(u,{checked:e.checked,"onUpdate:checked":s[5]||(s[5]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),ee]),t("div",se,[o(u,{checked:e.checked,"onUpdate:checked":s[6]||(s[6]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),te]),t("div",ae,[o(u,{checked:e.checked,"onUpdate:checked":s[7]||(s[7]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),oe])]),_:1}),o(c,{key:"1",header:"Dữ liệu hồ"},{extra:n(()=>[re]),default:n(()=>[t("div",ie,[o(i,{checked:e.checked,"onUpdate:checked":s[8]||(s[8]=a=>e.checked=a)},{default:n(()=>[r("Hồ nước")]),_:1},8,["checked"])]),t("div",le,[o(i,{checked:e.checked,"onUpdate:checked":s[9]||(s[9]=a=>e.checked=a)},{default:n(()=>[r("Hồ Bách Khoa")]),_:1},8,["checked"])]),t("div",ce,[o(i,{checked:e.checked,"onUpdate:checked":s[10]||(s[10]=a=>e.checked=a)},{default:n(()=>[r("Hồ Nghiên Cứu")]),_:1},8,["checked"])]),t("div",de,[o(i,{checked:e.checked,"onUpdate:checked":s[11]||(s[11]=a=>e.checked=a)},{default:n(()=>[r("Hồ Đà Nẵng")]),_:1},8,["checked"])])]),_:1}),o(c,{key:"2",header:"Mô hình dự báo mưa"},{extra:n(()=>[me]),default:n(()=>[t("div",he,[o(u,{checked:e.checked,"onUpdate:checked":s[12]||(s[12]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),pe]),t("div",ue,[o(u,{checked:e.checked,"onUpdate:checked":s[13]||(s[13]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),fe]),t("div",_e,[o(u,{checked:e.checked,"onUpdate:checked":s[14]||(s[14]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),ke])]),_:1}),o(c,{key:"1",header:"Dữ liệu hồ"},{extra:n(()=>[we]),default:n(()=>[t("div",be,[o(i,{checked:e.checked,"onUpdate:checked":s[15]||(s[15]=a=>e.checked=a)},{default:n(()=>[r("Hồ nước")]),_:1},8,["checked"])]),t("div",ve,[o(i,{checked:e.checked,"onUpdate:checked":s[16]||(s[16]=a=>e.checked=a)},{default:n(()=>[r("Hồ Bách Khoa")]),_:1},8,["checked"])]),t("div",ye,[o(i,{checked:e.checked,"onUpdate:checked":s[17]||(s[17]=a=>e.checked=a)},{default:n(()=>[r("Hồ Nghiên Cứu")]),_:1},8,["checked"])]),t("div",ge,[o(i,{checked:e.checked,"onUpdate:checked":s[18]||(s[18]=a=>e.checked=a)},{default:n(()=>[r("Hồ Đà Nẵng")]),_:1},8,["checked"])])]),_:1}),o(c,{key:"2",header:"Mô hình dự báo mưa"},{extra:n(()=>[Te]),default:n(()=>[t("div",$e,[o(u,{checked:e.checked,"onUpdate:checked":s[19]||(s[19]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),Ce]),t("div",Se,[o(u,{checked:e.checked,"onUpdate:checked":s[20]||(s[20]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),Ve]),t("div",Ue,[o(u,{checked:e.checked,"onUpdate:checked":s[21]||(s[21]=a=>e.checked=a),class:"me-2"},null,8,["checked"]),Pe])]),_:1})]),_:1},8,["activeKey"])])):U("",!0),e.tabKey==="searchTab"?(f(),_("div",Me,Ke)):U("",!0)]),_:1},8,["tab-list","active-tab-key"])])}const Ne=v(O,[["render",He],["__scopeId","data-v-67b401a5"]]),P=H("map",{state:()=>({map:null}),actions:{setMap(e){this.map=e}},getters:{getMap(){return this.map}}}),Be=s=>{var s,l=[108.66931915300006,11.769107818000062,109.46916961700003,12.86867141600004],h=new ol.layer.Group({title:"Base Layers",layers:[new ol.layer.Tile({title:"Google Map",baseLayer:!0,preload:1/0,type:"base",visible:!1,source:new ol.source.XYZ({url:"https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga",crossOrigin:"anonymous"})}),new ol.layer.Tile({preload:1/0,title:"Water Color",baseLayer:!0,visible:!1,source:new ol.source.Stamen({layer:"watercolor",attributions:[],attributionsCollapsible:!1})}),new ol.layer.Tile({preload:1/0,title:"Toner",baseLayer:!0,visible:!1,source:new ol.source.Stamen({layer:"toner",attributions:[],attributionsCollapsible:!1})}),new ol.layer.Tile({preload:1/0,baseLayer:!0,source:new ol.source.OSM({attributions:[],attributionsCollapsible:!1}),visible:!0,title:"Open Street Map"}),new ol.layer.Tile({baseLayer:!0,visible:!0,title:"No Basemap"})]});s.addLayer(h),s.getView().fit(l,s.getSize())};const De=y({components:{},setup(){const e=h=>{console.log("visible",h)},s="background-color: #4494F1; ",l=S("detailPanelVisible");return console.log(l.value),{detailPanelVisible:l,afterVisibleChange:e,headerDrawerStyle:s}},data(){return{}},mounted(){}}),g=e=>(w("data-v-478e58b7"),e=e(),$(),e),je=g(()=>t("i",{class:"fa-solid fa-xmark fs-4 text-white"},null,-1)),Le=g(()=>t("span",{style:{color:"#ffffff","font-weight":"bold"}},"THÔNG TIN",-1)),Ge=g(()=>t("p",null,"Some contents...",-1)),Fe=g(()=>t("p",null,"Some contents...",-1)),Ae=g(()=>t("p",null,"Some contents...",-1));function ze(e,s,l,h,k,m){const i=p("a-drawer");return f(),_("div",{class:V(["detail-panel",{"panel--active":e.detailPanelVisible}])},[o(i,{headerStyle:{backgroundColor:"#4494F1"},style:{position:"absolute",width:"100%",height:"100%"},"get-container":!1,visible:e.detailPanelVisible,"onUpdate:visible":s[0]||(s[0]=c=>e.detailPanelVisible=c),placement:"right",onAfterVisibleChange:e.afterVisibleChange,mask:!1,maskClosable:!1,autofocus:!1},{closeIcon:n(()=>[je]),title:n(()=>[Le]),default:n(()=>[Ge,Fe,Ae]),_:1},8,["visible","onAfterVisibleChange"])],2)}const Ee=v(De,[["render",ze],["__scopeId","data-v-478e58b7"]]);const Oe=y({components:{},setup(){const e=h=>{console.log("visible",h)},s="background-color: #4494F1; ",l=S("detailPanelVisible");return console.log(l.value),{detailPanelVisible:l,afterVisibleChange:e,headerDrawerStyle:s}},data(){return{}},mounted(){const e=document.getElementById("myChart"),s=[{x:"Jan",net:100,cogs:50,gm:50},{x:"Feb",net:120,cogs:55,gm:75},{x:"March",net:120,cogs:55,gm:75}],l={type:"bar",options:{layout:{padding:0},plugins:{title:{display:!0,text:"BIỂU ĐỒ GÌ GÌ ĐÓ",position:"left",padding:5,color:"#4494F1"}}},data:{labels:["Jan","Feb","March"],datasets:[{label:"Net sales",data:s,parsing:{yAxisKey:"net"}},{label:"Cost of goods sold",data:s,parsing:{yAxisKey:"cogs"}},{label:"Gross margin",data:s,parsing:{yAxisKey:"gm"}}]}};new Chart(e,l)}}),T=e=>(w("data-v-6c11f48d"),e=e(),$(),e),Ze=T(()=>t("i",{class:"fa-solid fa-xmark fs-4 text-black",style:{position:"absolute",top:"0.5rem",right:"1rem"}},null,-1)),Je=T(()=>t("canvas",{id:"myChart",style:{width:"100%",height:"100%"}},null,-1));function We(e,s,l,h,k,m){const i=p("a-drawer");return f(),_("div",{class:V(["chart-panel",{"panel--active":e.detailPanelVisible}])},[o(i,{style:{position:"absolute",width:"100%",height:"100%"},"get-container":!1,bodyStyle:{padding:"0"},visible:e.detailPanelVisible,"onUpdate:visible":s[0]||(s[0]=c=>e.detailPanelVisible=c),placement:"bottom",onAfterVisibleChange:e.afterVisibleChange,mask:!1,maskClosable:!1,autofocus:!1},{closeIcon:n(()=>[Ze]),default:n(()=>[Je]),_:1},8,["visible","onAfterVisibleChange"])],2)}const Xe=v(Oe,[["render",We],["__scopeId","data-v-6c11f48d"]]);const Ye=y({components:{Header:E,SideBar:Ne,DetailPanel:Ee,ChartPanel:Xe},setup(){const e=b(!1);return N("detailPanelVisible",e),{}},mounted(){P();const e=new ol.Map({layers:[],target:"map",view:new ol.View({projection:"EPSG:4326",minZoom:5,maxZoom:22})});P().setMap(e),Be(e)}}),qe=e=>(w("data-v-4ac57315"),e=e(),$(),e),Qe={class:"container-fluid p-0"},Re={class:"row g-0"},xe={class:"col-2"},es={class:"col-10 content-panel"},ss=qe(()=>t("div",{class:"map-container",id:"map"},null,-1)),ts={class:"panel-container row g-0 w-100 h-100"},as={class:"col-9 d-flex justify-content-end"},os={class:"col-3"};function ns(e,s,l,h,k,m){const i=p("Header"),c=p("SideBar"),u=p("ChartPanel"),C=p("DetailPanel");return f(),_(B,null,[o(i),t("div",Qe,[t("div",Re,[t("div",xe,[o(c)]),t("div",es,[ss,t("div",ts,[t("div",as,[o(u)]),t("div",os,[o(C)])])])])])],64)}const ls=v(Ye,[["render",ns],["__scopeId","data-v-4ac57315"]]);export{ls as default};