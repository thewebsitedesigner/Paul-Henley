if(getURLParam('skipmobiledetection') == 'true') {document.cookie="skipmobiledetection=true";}
var useragent = navigator.userAgent;
useragent = useragent.toLowerCase();
var pos = document.cookie.search("skipmobiledetection=true");
if (pos == -1) {
   if(useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipod') != -1 || (useragent.indexOf('android') != -1 && useragent.indexOf('mobile') > 0) || useragent.indexOf('blackberry') != -1 || useragent.indexOf('nokia') != -1 || useragent.indexOf('windows ce') != -1 || useragent.indexOf('sonyericsson') != -1 || useragent.indexOf('webos') != -1 || useragent.indexOf('wap') != -1 || useragent.indexOf('motor') != -1 || useragent.indexOf('symbian') != -1 ){
      var pathname = document.location.pathname;
      var mobilePagePathname = '/mobile' + pathname;
      $.get(mobilePagePathname, function(){location.pathname=mobilePagePathname;})
      .fail(function(){$.get('/mobile/', function(){location.pathname='/mobile/';})});
   }
}

var projectroot="./";
InitResources2('en');
var Henley = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(4.00,4.00)) {
//---------------------------------------------------------------------------------------------
Henley[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=960;
Henley[objindex++] = LMDiv("HEADER",1,1,0,null,0,null,null,null,null,0);
LMSimpleMenuBuilder('SimpleMenu1', LMSimpleMenuConfigTemplate['menu_02'].html, LMSimpleMenuConfigTemplate['menu_02'].css); var menu_SimpleMenu1 = LMSimpleMenuCool('SimpleMenu1', {orientation: 'horizontal', animation: 'fade', autodocked: false});
branchlist = new Array();
Henley[objindex++] = LMText("Obj16",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("CENTER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("SECTION_APROPOS",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj6",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel2",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel14",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But12",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel15",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel17",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMVideoSound("Video1",1,1,0,null,0,null,null,null,null,0,true,'HTML5Video');
branchlist = new Array();
Henley[objindex++] = LMText("Obj17",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("SECTION_EQUIPE",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel5",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel7",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj9",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But5",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel8",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But7",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel9",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box3",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj5",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj7",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But8",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But9",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel10",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box4",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj8",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj10",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But10",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But11",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("SECTION_TEMOIGNAGES",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel12",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj11",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel13",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel11",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj12",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Box8",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj13",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel16",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj14",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Box9",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj15",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("FOOTER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel3",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box5",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But2",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But3",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box7",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But1",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box10",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("IFr4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
Henley[objindex++] = LMDiv("But13",1,1,0,null,0,null,new LMBranchEx("0","./website-building.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f4,0x3fa,0x80);
LMObjectAnimate();

