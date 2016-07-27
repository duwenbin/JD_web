/**
 * Created by Administrator on 2016/7/4.
 */
var category = [
    [ "家用电器" ],
    [ "手机", "数码", "京东通信" ],
    [ "电脑", "办公" ],
    [ "家居", "家具", "家装", "厨具" ],
    [ "男装", "女装", "童装", "内衣" ],
    [ "个护化妆", "清洁用品", "宠物" ],
    [ "鞋靴", "箱包", "珠宝", "奢侈品" ],
    [ "运动户外", "钟表" ],
    [ "汽车", "汽车用品" ],
    [ "母婴", "玩具乐器" ],
    [ "食品", "酒类", "生鲜", "特产" ],
    [ "医药保健" ],
    [ "图书", "音像", "电子书" ],
    [ "彩票", "旅行", "充值", "票务" ],
    [ "理财", "众筹", "白条", "保险" ]
];
/*function allcategory(){
    var t = $("#pop-category");
    t.empty();
    for(var i=0;i<category.length;i++){
        var items = category[i];
        var li = $("<li></li>").appendTo(t);
        li.append("<a>" + items.join("<a> </a>") + "</a>");
    }
}*/
function input_popmenu()
{
    var t = $( "#pop-category" );
    for( var i = 0; i < category.length; i++ )
    {
        var items = category[ i ];
        var li = $( "<li></li>" ).appendTo( t );
        li.append( "<a>" + items.join( "</a>、<a>" ) + "</a>" );
    }
}
var all_cate= [
    {n:"运动鞋服",d:["运动鞋包",{name:"紧身衣",href:"#",color:"red"},"帆布鞋","休闲鞋",{name:"青少年运动",href:"#",color:"blue"},"UA","Adidas","converse","斯凯奇"]},

    {n:"户外生活",d:["户外鞋服",{name:"皮肤衣",href:"#",color:"red"},"户外装备","游泳用品",{name:"T恤",href:"#",color:"red"},"垂钓用品",{name:"帐篷/垫子",href:"#",color:"red"},{name:"智能手表",href:"#",color:"red"},"鱼竿"]},

    {n:"健身体育",d:[{name:"A4腰",href:"#",color:"red"},{name:"马甲线",href:"#",color:"green"},"性感蜜桃臀","Iphone6腿","跑掉大肚腩","跑步机",{name:"欧盟品质",href:"#",color:"red"},{name:"线上减肥",href:"#",color:"red"},{name:"欧洲杯",href:"#",color:"red"},{name:"林丹旗舰店",href:"#",color:"red"}]},

    {n:"骑行运动",d:[{name:"自行车/电动车",href:"#",color:"red"},"折叠自行车","山地车","电动车",{name:"平衡车",href:"#",color:"red"},"电动滑板车",{name:"装备",href:"#",color:"red"},{name:"骑行服",href:"#",color:"red"},{name:"智能车",href:"#",color:"red"},{name:"有氧运动",href:"#",color:"red"},{name:"环法",href:"#",color:"red"}]},

    {n:"资讯",d:["体育讲堂","篮球盛宴"]}
];
function left_cate()
{
    var t =$("#page-category");
    for(var i=0;i<all_cate.length;i++){
        var it = all_cate[i];
        var div = $("<div class='item'></div>").appendTo(t);
        var dl= $("<dl></dl>").appendTo(div);
        var dd= $("<dd></dd>").appendTo(dl);
        dl.prepend("<dt>"+it.n+"</dt>");
        for(var j=0;j<it.d.length;j++){
            var ns = it.d[j];
            var a = $("<a></a>");
            if( $.type(ns) == "object"){
                a.text( ns.name );
                a.attr("href",ns.href);
                if( ns.color !== void(0)){
                    a.addClass(ns.color);
                }
            }else{
                a.text(ns);
            }
            dd.append( a );
         }
    }
}
var address = ["北京", "上海", "天津", "重庆", "河北", "山西", "河南", "辽宁", "吉林", "黑龙江", "内蒙古", "江苏", "山东",
    "安徽", {name:"浙江"}, "福建", "湖北", "湖南", "广东", "广西", "江西", "四川", "海南", "贵州", "云南", "西藏", "陕西", "甘肃",
    "青海", "宁夏", "新疆", "台湾", "香港","澳门", "钓鱼岛", "海外"];
function add_address(){
    var t =$("#pop-address");
    var div = $("<div class='ui-content'></div>").appendTo(t);
    for(var i=0;i<address.length;i++){
        var it = address[i];
        var div1 = $("<div class='item'></div>").appendTo(div);
        if($.type(it) == "object"){
        	var a = $("<a class='bgred'>"+it.name+"</a>").appendTo(div1);
        }else
        {
        	 var a = $("<a>"+it+"</a>").appendTo(div1);
        } 
        div1.on("click",function(){
        	t.find("a").removeClass("bgred");
        	$(this).find("a").addClass("bgred");
        	var html = $(this).find("a").html();
        	$("#addresshtml").html(html);
        	console.log(html);
        });
    }
}
var nave=[
    {n:"特色主题",d:["品牌街","好物100","京东预售","尖er货","京东首发","今日团购","优惠券","闪购","京东会员","秒杀","定期送","装机大师","新奇特","京东试用","礼品购","智能馆","玩bigger","大牌免息","北京老字号"]},
    {n:"行业频道",d:["服装城","家用电器","电脑办公","手机","美妆馆","食品","数码","母婴","家装城","运动户外","整车","图书","农资频道","京东智能"]},
    {n:"生活服务",d:["京东众筹","白条","京东钱包","京东小金库","理财","话费","旅行","彩票","游戏","机票","酒店","电影票","水电煤","京东到家","京东微联","京东众测"]},
    {n:"更多精选",d:["京东社区","京东通信","在线读书","京东E卡","智能社区","游戏社区","京友邦","卖家入驻","企业采购","服务市场","乡村招募","校园加盟","办公生活馆","知识产权维权","English Site"]}
];

function top_nav()
{
    var t =$("#pop-nav");
    for(var i=0;i<nave.length;i++){
        var it = nave[i];
        var div = $("<div class='item'></div>").appendTo(t);
        var dl= $("<dl></dl>").appendTo(div);
        var dd= $("<dd></dd>").appendTo(dl);
        dl.prepend("<dt>"+it.n+"</dt>");
        for(var j=0;j<it.d.length;j++){
            var ns = it.d[j];
            var a = $("<a></a>");
            if( $.type(ns) == "object"){
                a.text( ns.name );
                a.attr("href",ns.href);
                if( ns.color !== void(0)){
                    a.addClass(ns.color);
                }
            }else{
                a.text(ns);
            }
            dd.append( a );
        }
    }
}
$(document).ready(function(){
    add_address();
    input_popmenu();
    left_cate();
    top_nav();
    var AA = $("#Rolling_distance");
    var _body = $('html,body');
    var start_scoll = true;

    $(window).bind("scroll", function(){
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        if(top>800){
            $(".scollUl").show();
            if(start_scoll){
                if(top<1484){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='1']").addClass("bgGreen");
                }else if(top>=1484&&top<2285){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='2']").addClass("bgGreen");
                }else if(top>=2285&&top<3086){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='3']").addClass("bgGreen");
                }else if(top>=3086&&top<3887){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='4']").addClass("bgGreen");
                }else if(top>=3887&&top<4688){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='5']").addClass("bgGreen");
                }else if(top>=4688&&top<5489){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='6']").addClass("bgGreen");
                }else if(top>=5489&&top<6290){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='7']").addClass("bgGreen");
                }else if(top>=6290&&top<7091){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='8']").addClass("bgGreen");
                }else if(top>=7091&&top<7892){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='9']").addClass("bgGreen");
                }else if(top>=7892&&top<8693){
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='10']").addClass("bgGreen");
                }else {
                    AA.find("li").removeClass("bgGreen");
                    AA.find("li[value='11']").addClass("bgGreen");
                }
            }
        }else{
            $(".scollUl").hide();
        }
    });
    function startScoll(){
        start_scoll = true;
    }
       AA.find("li").on("click",function(){
           start_scoll = false;
           AA.find("li").removeClass("bgGreen");
           $(this).addClass("bgGreen");
       var i = $(this).val();
        switch(i){
            case 1:
                _body.animate({scrollTop: '817px'},300,startScoll);
                break;
            case 2:
                _body.animate({scrollTop: '1484px'}, 300,startScoll);
                break;
            case 3:
                _body.animate({scrollTop: '2285px'}, 300,startScoll);
                break;
            case 4:
                _body.animate({scrollTop: '3086px'}, 300,startScoll);
                break;
            case 5:
                _body.animate({scrollTop: '3887px'}, 300,startScoll);
                break;
            case 6:
                _body.animate({scrollTop: '4688px'}, 300,startScoll);
                break;
            case 7:
                _body.animate({scrollTop: '5489px'}, 300,startScoll);
                break;
            case 8:
                _body.animate({scrollTop: '6290px'}, 300,startScoll);
                break;
            case 9:
                _body.animate({scrollTop: '7091px'}, 300,startScoll);
                break;
            case 10:
                _body.animate({scrollTop: '7892px'}, 300,startScoll);
                break;
            case 11:
                _body.animate({scrollTop: '8693px'}, 300,startScoll);
                break;
        }
    });
    var ww = $("#aaa" ).offset().left;
    $("#pop-nav").css("left",ww);
    $("#pop-mask" ).css("left",ww+1139);
    $(".scollUl" ).css("left",ww+1212);
    $("#open_navergation").hover(
        function(){
            $("#pop-mask").show();
          $("#pop-nav").show();
        },
        function(){
            $("#pop-nav").hide();
            $("#pop-mask").hide();
        }
    )
    $(".round_img").on("mouseenter",function(){
        var self = $(this);
        self.addClass("round_circle");
        var timer;
        timer = setTimeout(function(){
            self.removeClass("round_circle");
        },1000);
    });
    $(".brand").find("li").on({mouseenter:function(){
        $(this).find("img").stop().animate({top:"-30px"},200)
    },mouseleave:function(){
        $(this).find("img").stop().animate({top:"0px"},200)
    }});
        $("#keyword").keyup(function(){
        $("script[delete='true']").remove();
        var self = $(this);
        var oScript = $("<script delete='true' src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+self.val()+"&cb=show'></script>")
            .appendTo($("head"));
    });
    $("#search_form").hover(function(){
        if($("#keyword").val()==""){
            $("#searchList").html("");
        }
            $("#searchList").show();
        },
        function(){
            $("#searchList").hide();
        });
});
function show(json){
    var search = $("#keyword");
    var Ul = $("#searchList");
    var w = search.outerWidth();
    Ul.outerWidth(w);
    var arr = json.s;
    if(arr.length == 0){
        Ul.hide();
    }
    else{
        Ul.show();
        Ul.html("");
        for(var i = 0;i<arr.length;i++){
            var Li = $("<li><a href='http://www.baidu.com/s?wd"+arr[i]+"'>"+arr[i]+"</a></li>").appendTo(Ul);
            Li.hover(
              function(){
                  $(this).addClass("bgGray");
              },
                function(){
                    $(this).removeClass("bgGray");
                }
            );
        }
    }
}