/**
 * Created by Administrator on 2016/7/8.
 */
//横向轮播
(function(j){
    j.ads_roll = function(options){
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
        var self = this;
        var _index = 1;
        var _last_index = 0;
        var _timer;
        var w = t.width();
        var h = t.height();
        var autoadd = true;
        var _cur = $("<div class='__ADS_PIC'></div>").appendTo(t);
        var _rt = $("<div class='__ADS_PIC'></div>").appendTo(t);
        var ctrl = $("<div class='__ADS_CCC'></div>").appendTo(t);
        self.init = function(a){
            _timer = setInterval(self.playing,1000);
            var ul = $("<ul></ul>").appendTo(ctrl);
            for (var i=0 ;i< d.length;i++){
                //ul.append("<li data-index='"+i+"' style="position:absolute;left:i*10px"></li>");
                var li = $("<li data-index='"+i+"'></li>");
                li.css({position:"absolute",left:i*15+"px"});
                ul.append(li);
            }
            ul.css({position:"absolute",left:(w-d.length*15)>> 1,top:h -20});
            ul.find(">li").on("mouseenter mouseleave",self.mouseHandler);
            self.playAt(a,0);
        };
        //自动循环播放轮播
        self.playing = function(){
        	if(_last_index!=_index){
        		self.playAt(_index,500);
        	}
            //索引向前推进
            if(autoadd){
           	_index++;
            if(_index == d.length) _index=0;
           }
        };
        //播放指定索引的图片到当前显示位置（包含动画）
        /**
         * @param index 图片相对应的索引值
         * @param time 动画时间
         */
        self.playAt = function(index,time){
        	    _last_index=index;
                var img = d[ index ].img;
    
                _rt.css( { left: "100%" } );
                _rt.css( "background", "url('" + img + "')" );
                _rt.animate( { left: 0},time );

                _cur.css( { left: 0 } );
                _cur.animate( { left: "-100%" }, time, function()
                {
                    _cur.css( "background", "url('" + img + "')" );
                    _cur.css( { left: 0 } );
                    _rt.css( { left: "100%" } );
                } );
            ctrl.find("li").removeClass("active");
            ctrl.find("li[data-index='"+index+"']").addClass("active");
            //console.log(index);
       };
       self.mouseHandler = function(e)
        {
            if (e.type == "mouseenter"){
                 autoadd = false;
                 _index = $(this).attr("data-index");
             }else{
                 autoadd = true;
             }
        };
        //自动开始
        self.init(0);
    };
    j.fn.ads_roll = function(data)
    {
        new j.ads_roll({target:this,data:data});
    };
})(jQuery);