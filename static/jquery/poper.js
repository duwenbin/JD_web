/**
 * Created by Administrator on 2016/7/4.
 */
/*
弹出模块插件
*/

(function(jq){
    jq.fn.poper=function( target ){
      //this是jQuery对象
        this.hover(overhand,outhand);
        function overhand(){
            var el = $(this).find("[data-poper='true']");
            var this_pos=el.offset()
            var l = this_pos.left;
            var border_width= parseInt(el.css("border-width"));
            var t = this_pos.top + el.outerHeight()-border_width-1;
            el.addClass("aaa");
            el.css({
                "border-bottom-width":0,"border-color":"#cccccc",background:"#ffffff"
            })
            console.log(el.css("border-bottom-width"));
            target.offset({ left:l,top:t })
        }
        function outhand(){
            var el = $(this).find("[data-poper='true']");
            var border_width= parseInt(el.css("border-width"));
            el.removeClass("aaa");
            el.css({
                "border-bottom-width":border_width
            })
            console.log(el.css("border-bottom-width"));
        }
    };
})(jQuery);
$(document).ready(function(){
   $(".category-list").each(function(i,e){
      var id = $(this).find("[data-poper='true']").attr("data-target");
      $(this).poper($(id));
       var tar_get =  $(this).find("[data-poper='true']").attr("data-toggle");
       $.get(tar_get,function(data){
           var newUl = $("<ul></ul>");
           $(id).append(newUl);
           for(var i=0;i<data.length;i++){
               var newLi = $("<li></li>")
               for(var key in data[i]){
                   newLi.append($("<a>"+data[i][key]+"</a>"));
               }
               newUl.append(newLi);
           }
       });
       console.log(id);
   });
});
(function( j )
{
    j.fn.poper = function( target )
    {
        var a = this.find( ".pop-opener" );

        this.bind( "mouseenter mouseleave", function( e )
        {
            var el = $( this );// div
            var border = el.css( "border-width" );
            var pos = el.offset();

            // 统一边框宽度
            target.css( "border-width", border );

            if( e.type == "mouseenter" )
            {
                e.stopPropagation();
                e.preventDefault();

                var l = pos.left;
                var t = pos.top + el.outerHeight();

                target.css( {
                    "position": "absolute",
                    "display": "block",
                    "min-width": "200px"
                } );
                target.offset( { left: l, top: t } );
                target.show();

                // mask
                set_mask( el, el.find( ".pop-mask" ) );
            }
            else
            {
                target.hide();
                set_mask( null, el.find( ".pop-mask" ) );
            }
        } );

        // 设置 mask
        function set_mask( t, m )
        {
            if( t == void(0) )
            {
                m.hide();
            }
            else
            {
                var pos = t.offset();
                var h = t.outerHeight();
                var border = parseInt( t.css( "border-width" ) );
                var left = pos.left + border;
                var top = pos.top + h - border;
                m.show();
                m.width( t.outerWidth() - border * 2 );
                m.height( border * 2 );
                m.offset( { left: left, top: top } );
            }
        }
    };
})( jQuery );
$( "[data-poper='true']" ).each( function( i, e )
{
    var id = $( this ).attr( "data-target" );// #pop-category
    $( this ).poper( $( id ) );
} );