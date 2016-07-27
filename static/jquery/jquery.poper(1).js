/**
 * 弹出模块插件
 * Created by Administrator on 2016/7/4.
 */

	// 对 .pop-opener 和 .pop-menu 的一个弹出调度操作

	// hover(overHandler,outHandler)

	// 选中一个 A 元素，开启 pop 功能，指定需要被弹出的元素，在A元素下方显示

(function( jq )
{
	jq.fn.poper = function( target )
	{
		var a = this.eq( 0 );

		// this 是 jQuery
		a.hover( overHandler, outHandler );
		target.hover( overHandler, outHandler );

		// 鼠标经过
		function overHandler()
		{
			var pos = a.offset();
			var l = pos.left;
			var t = pos.top + a.outerHeight();
			var border_width = parseInt( a.css( "border-width" ) );

			a.css( { "position": "absolute", "border-bottom-width": 0 } );
			a.offset( pos );

			target.show();
			target.offset( { left: l, top: t - border_width - 2 } );
		}

		// 鼠标移出
		function outHandler()
		{
			var border_width = parseInt( a.css( "border-width" ) );
			a.css( "border-bottom-width", border_width );
			a.css( "position", "static" );
			target.hide();
		}
	};
})( jQuery );

// 插件自动开启
$( document ).ready( function()
{
	$( "[data-poper='true']" ).each( function( i, e )
	{
		var id = $( this ).attr( "data-target" );// #pop-category
		$( this ).poper( $( id ) );
	} );
} );