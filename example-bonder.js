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
defpagewitdh=1010;
Henley[objindex++] = LMDiv("HEADER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel5",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box7",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("CENTER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("SECTION_INTRO",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel2",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
jQuery18("#Diaporama1").royalSlider({imageAlignCenter: true,sliderDrag: false,sliderTouch: false,fadeinLoadedSlide: true,imageScaleMode:  'fit',globalCaption: false,arrowsNavAutoHide: false,transitionType:  'move',loop: true,loopRewind: false,randomizeSlides: false,navigateByClick: false,keyboardNavEnabled: false,transitionSpeed: 600,startSlideId: 0,thumbs: {orientation:  'horizontal'},fullscreen: {enabled: false,nativeFS: false,keyboardNav:  true},video: {autoHideBlocks: false,autoHideArrows: false,autoHideControlNav: false},visibleNearby: {enabled: false},block: {fadeEffect: false,moveEffect:  'none',moveOffset: 400,speed: 400,delay: 0},arrowsNav: true, controlNavigation: 'none',autoplay: {enabled: true, delay: 2000, stopAtAction:  false, pauseOnHover:  true},slidesOrientation: 'horizontal'});$("#Diaporama1").css("opacity","1");
Henley[objindex++] = LMDiv("Diaporama1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj27",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj28",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But8",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel22",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
Henley[objindex++] = LMDiv("Panel33",0,1,0,EffectRideauBottomUp,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj7",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel38",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj8",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj9",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel44",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box4",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj16",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj17",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel41",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel42",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img6",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
Henley[objindex++] = LMDiv("Panel43",0,1,0,EffectRideauBottomUp,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj10",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("SECTION_BIENVENUE",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel10",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel25",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box17",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj12",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj13",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("But17",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel29",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box20",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
Henley[objindex++] = LMDiv("Panel30",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box21",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
Henley[objindex++] = LMDiv("Panel31",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box22",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
Henley[objindex++] = LMDiv("Panel13",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel14",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel17",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But5",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel19",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But6",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel20",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But7",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel21",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel45",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But13",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel46",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But14",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel47",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But15",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel48",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But16",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel3",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img7=FindTagFromId('Img7');
Henley[objindex++] = LMDiv("Panel7",0,1,0,EffectRideauBottomUp,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel9",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel12",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
Henley[objindex++] = LMDiv("Panel23",0,1,0,EffectRideauBottomUp,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("SECTION_ACTUALITES",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel34",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box14",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj18",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel35",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj19",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj20",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel15",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But3",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel36",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box15",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj21",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel37",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj22",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj23",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel11",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But2",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel39",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box16",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj24",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel40",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
Henley[objindex++] = LMText("Obj25",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
Henley[objindex++] = LMText("Obj26",1,1,0,null,0,null,branchlist,null,null);
Henley[objindex++] = LMDiv("Panel18",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But12",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("FOOTER",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Panel16",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box11",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But9",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But10",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("But11",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Shadow_right",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Shadow_left",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("Box3",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMDiv("IFr4",1,1,0,null,0,null,null,null,null,0);
Henley[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
Henley[objindex++] = LMDiv("But18",1,1,0,null,0,null,new LMBranchEx("0","./website-building.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f4,0x3fa,0x80);
LMObjectAnimate();


function Img5_OnMouseEnter()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj7=document.getElementById("Obj7");
   if(is.ns) Panel33=document.getElementById("Panel33");
   Obj7.ShowEffect();
   Panel33.ShowEffect();
   //HENLEY End Event-Action

}

function Img5_OnMouseLeave()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj7=document.getElementById("Obj7");
   if(is.ns) Panel33=document.getElementById("Panel33");
   Obj7.Hide();
   Panel33.Hide();
   //HENLEY End Event-Action

}
function Img6_OnMouseEnter()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj10=document.getElementById("Obj10");
   if(is.ns) Panel43=document.getElementById("Panel43");
   Obj10.ShowEffect();
   Panel43.ShowEffect();
   //HENLEY End Event-Action

}

function Img6_OnMouseLeave()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj10=document.getElementById("Obj10");
   if(is.ns) Panel43=document.getElementById("Panel43");
   Obj10.Hide();
   Panel43.Hide();
   //HENLEY End Event-Action

}
function Img7_OnMouseEnter()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   if(is.ns) Panel7=document.getElementById("Panel7");
   Obj2.ShowEffect();
   Panel7.ShowEffect();
   //HENLEY End Event-Action

}

function Img7_OnMouseLeave()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   if(is.ns) Panel7=document.getElementById("Panel7");
   Obj2.Hide();
   Panel7.Hide();
   //HENLEY End Event-Action

}
function Img9_OnMouseEnter()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj3=document.getElementById("Obj3");
   if(is.ns) Panel23=document.getElementById("Panel23");
   Obj3.ShowEffect();
   Panel23.ShowEffect();
   //HENLEY End Event-Action

}

function Img9_OnMouseLeave()
{

   //HENLEY Begin Event-Action
   if(is.ns) Obj3=document.getElementById("Obj3");
   if(is.ns) Panel23=document.getElementById("Panel23");
   Obj3.Hide();
   Panel23.Hide();
   //HENLEY End Event-Action

}