$(document).ready(function(){$(".sidebar > li").click(function(i){if(!$(i.target).closest("ul.child-menu").length){var e=$(this).children(".child-menu"),l=$(this).children(".caret");$(".sidebar > li").children(".child-menu").not(e).slideUp(),$(".sidebar > li").children(".caret").not(l).removeClass("clicked"),e.slideToggle(),l.toggleClass("clicked")}}),window.location.href.indexOf("/welcome/")>-1?$(".sidebar > li:nth-child(1) > .child-menu").css("display","block"):window.location.href.indexOf("/vtweb/")>-1?$(".sidebar > li:nth-child(2) > .child-menu").css("display","block"):window.location.href.indexOf("/vtdirect/")>-1?$(".sidebar > li:nth-child(3) > .child-menu").css("display","block"):window.location.href.indexOf("/api/")>-1&&$(".sidebar > li:nth-child(6) > .child-menu").css("display","block"),$(".navbar-collapse").on("show.bs.collapse",function(){$(".nav-overlay").css({"z-index":"10",opacity:".8"})}),$(".navbar-collapse").on("hide.bs.collapse",function(){$(".nav-overlay").css({"z-index":"-1",opacity:"0"})}),$(".documentation-sidebar").affix({offset:{top:0,bottom:function(){return this.bottom=$("footer").outerHeight(!0)+20}}}),$(".scrollspy-body").scrollspy({target:"#sidebar-scrollspy",offset:500}),$(".sidebar-methods li").click(function(){$(".sidebar-methods li").removeClass("active"),$(this).addClass("active")}),$(".md-nav .dropdown").on("click",function(){$(this).toggleClass("open"),$(".md-nav .dropdown").not(this).removeClass("open")})});