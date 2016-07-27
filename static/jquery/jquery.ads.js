/**
 * Created by Administrator on 2016/7/7.
 */
/*
轮播插件
*/
(function(jq){

    jq.ads_fade = function(t,d){
        //t 容器
        //data{img:"",href:""}
        //取得容器宽高
        var self = this;
        var index = 1;
        var finish = false;
        var cur = $("<div id='__ADS_CURRENT'></div>").appendTo(t);
        var top = $("<div id='__ADS_TOP'></div>").appendTo(t);
        var ctrl = $("<div id='__ADS_CONTROLLER'></div>").appendTo(t);

        var timer;
        self.init = function(){
            //启动
          self.start();
            //绘制控制点
            var ul = $("<ul></ul>").appendTo(ctrl);
            for (var i=0 ;i< d.length;i++){
             ul.append("<li data-index='"+i+"'></li>");
            }
            ul.find(">li").on("mouseenter",self.enterHandler);
        };
        self.start = function(){
            finish = true;
            timer = setInterval(self.playing,1000);
            self.playat(0,0);
        };
        self.stop = function(){
            if(timer!=void(0)) clearInterval(timer);
        };
        self.playing = function(){
            self.playat(index,500);
            index++;
            if(index==d.length) index=0;
        };
        self.playat = function(index,time){
          //播放指定索引的图片
            if (!finish) return;
            //开始播放时置为false
            finish = false;
            var img = d[index].img;
           // var img_pre = d[(index>0?index-1: d.length-1)].img;
            /*cur.css("background", "url('"+ img +"')");*/
            top.css("background", "url('"+ img +"')");
            top.css("opacity",0);
            top.animate({opacity:1},time,function(){
                //播放完成记录状态，开启下次播放的权限
                finish = true;
                cur.css("background", "url('"+ img +"')");
            });
        };
        self.enterHandler = function(){
            //立即停止自动轮播
            self.stop()
             var a = $(this).attr("data-index");
            self.playat(a,500);
        };
        //立即执行
        self.init();
        //===========================================================================
        /*cur.css("background", "url('static/img/01/ad01.jpg')");
        top.css("background", "url('static/img/01/ad02.jpg')");
        ctrl.append("<ul><li></li><li></li><li></li><li></li></ul>")*/

    };
})(jQuery);
