(function( j )
{
    j.fn.poper = function( target )
    {
        var a = this.find( ".pop-opener" );
        /*console.log(this);*/
        this.bind( "mouseenter mouseleave", function( e ) //e：eventObject
        {
            var el = $( this ); // this：div.pop-menu，此时ul隐藏，div大小就是a的大小
            var border = el.css( "border-width" );
            var pos = el.offset();

            // 统一边框宽度
            target.css( "border-width", border );

            if( e.type == "mouseenter" )
            {
                e.stopPropagation(); // 阻止冒泡
                e.stopImmediatePropagation(); // 阻止冒泡
                e.preventDefault(); //阻止默认动作

                var l = pos.left;
                var t = pos.top + el.outerHeight();

                target.css( {
                    "position": "absolute", //使用绝对定位之后ul脱离文本流，不占div位置，因此div大小仍然是a大小
                    "display": "block",
                    "min-width": "100px"
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
            if( t == void(0) )// mouseleave事件下传入t=null
            {
                m.hide();
            }
            else
            {
                // DIV的绝对位置
                var pos = t.offset(); // t = el
                pos.left = pos.left >> 0; // 取整
                pos.top = pos.top >> 0;

                // DIV的高度（包含边框）
                var h = t.outerHeight();

                // 边框大小
                var border = parseInt( t.css( "border-width" ) );

                // mask 位置
                var left = pos.left + border;
                var top = pos.top + h - border;

                m.show();
                m.width( t.outerWidth() - border * 2 );
                m.height( border * 2 );
                m.offset( { left: left+1, top: top } );

            }
        }
    };
})( jQuery );

// 插件自动开启
$( document ).ready( function()
{
    $( "[data-poper='true']" ).each( function( i, e )
    {
        var id = $( this ).attr( "data-target" );//#pop-address|#pop-look|#pop-service|#pop-category
        $( this ).poper( $( id ) ); // $( id )：每个ul
    } );
} );