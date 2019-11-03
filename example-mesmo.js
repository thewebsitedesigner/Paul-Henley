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
LMSimpleMenuBuilder('SimpleMenu1', LMSimpleMenuConfigTemplate['menu_01'].html, LMSimpleMenuConfigTemplate['menu_01'].css); var menu_SimpleMenu1 = LMSimpleMenuCool('SimpleMenu1', {orientation: 'horizontal', animation: 'fade', autodocked: false});
branchlist = new Array();
Henley[objindex++] = LMText("Obj9",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("CENTER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("SECTION_APROPOS",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel5",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMVideoSound("Video1",1,1,0,null,0,null,null,null,null,0,true,'HTML5Video');
Henley[objindex++] = LMDiv("Panel7",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("SECTION_H2_1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj21",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("SECTION_EQUIPE",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel10",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj22",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj24",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But2",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But3",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
Henley[objindex++] = LMDiv("Panel2",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj5",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj6",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But5",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
Henley[objindex++] = LMDiv("Panel3",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj7",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj8",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But9",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
Henley[objindex++] = LMDiv("SECTION_TEMOIGNAGES",1,1,0,null,0,null,null,null,null,0);
jQuery18("#Diaporama1").royalSlider({imageAlignCenter: true,sliderDrag: false,sliderTouch: false,fadeinLoadedSlide: true,imageScaleMode:  'fit',globalCaption: false,arrowsNavAutoHide: false,transitionType:  'move',loop: true,loopRewind: false,randomizeSlides: false,navigateByClick: false,keyboardNavEnabled: false,transitionSpeed: 600,startSlideId: 0,thumbs: {orientation:  'horizontal'},fullscreen: {enabled: false,nativeFS: false,keyboardNav:  true},video: {autoHideBlocks: false,autoHideArrows: false,autoHideControlNav: false},visibleNearby: {enabled: false},block: {fadeEffect: false,moveEffect:  'none',moveOffset: 400,speed: 400,delay: 0},arrowsNav: true, controlNavigation: 'none',autoplay: {enabled: true, delay: 2000, stopAtAction:  false, pauseOnHover:  true},slidesOrientation: 'horizontal'});$("#Diaporama1").css("opacity","1");
Henley[objindex++] = LMDiv("Diaporama1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj10",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj11",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj12",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel4",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("FOOTER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel13",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But7",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But8",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But1",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("IFr4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
Henley[objindex++] = LMDiv("But13",1,1,0,null,0,null,new LMBranchEx("0","./website-building.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f4,0x3fa,0x80);
LMObjectAnimate();

