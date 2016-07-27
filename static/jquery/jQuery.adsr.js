/**
 * Created by Administrator on 2016/7/7.
 */
(function(jq){

    jq.ads_fade = function(options){
        var self = this;
        var _default={
            interval:3000,
            fadetime:1000,
            target:null,
            data:null
        };
        //参数合并
        $.extend(_default,options);
        var t = _default.target;
        var d = _default.data;
        var cur = $("<div id='__ADS_CURRENT'></div>").appendTo(t);
        var top = $("<div id='__ADS_TOP'></div>").appendTo(t);
        var ctrl = $("<div id='__ADS_CONTROLLER'></div>").appendTo(t);
        var index = 1;
        var last_index = 0;
        var timer;
        var autoadd = true;

        self.init = function()
        {
            timer = setInterval(self.playing,_default.interval);
            //绘制控制点
            var ul = $("<ul></ul>").appendTo(ctrl);
            for (var i=0 ;i< d.length;i++){
                ul.append("<li data-index='"+i+"'></li>");
            }
            ul.find(">li").on("mouseenter mouseleave",self.mouseHandler);
            self.playat(0,0);
        };
        self.playing = function()
        {
            if(last_index != index){
                self.playat(index,_default.fadetime);
            }
            if(autoadd){
                index++;
                if(index == d.length) index=0;
            }
        };
        self.playat = function(index,time)
        {
            last_index = index;
            var img = d[index].img;
            ctrl.find("li").removeClass("active");
            ctrl.find("li[data-index='"+index+"']").addClass("active");
            // var img_pre = d[(index>0?index-1: d.length-1)].img;
            /*cur.css("background", "url('"+ img +"')");*/
            top.css("background", "url('"+ img +"')");
            top.css("opacity",0);
            top.animate({opacity:1},time,function(){
                cur.css("background", "url('"+ img +"')");
            });

        };
        self.mouseHandler = function(e)
        {
             if (e.type == "mouseenter"){
                 autoadd = false;
                 index = $(this).attr("data-index");
             }else{
                 autoadd = true;
             }
        }
        //立即执行
        self.init();
    };
    jq.fn.ads_fade = function(data)
    {
        new jq.ads_fade({target:this,data:data});
    };
})(jQuery);