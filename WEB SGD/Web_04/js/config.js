$(function(){$(window).resize(function(){$(window).width()>=768&&$("li.dropmenu").hover(function(){$(this).addClass("active"),$(this).find("ul").addClass("animation-menuhv")},function(){$(this).removeClass("active"),$(this).find("ul").removeClass("animation-menuhv")})}),$(window).resize()}),$(function(){jQuery(".nav-menu").meanmenu()}),$(function(){$(".search-icon").click(function(t){$(".top-search-input-wrap").attr("style","display:block"),$(".search-close-icon").attr("style","display:block"),$(".search-icon").attr("style","display:none")}),$(".search-close-icon").click(function(t){$(".top-search-input-wrap").removeAttr("style").attr("style","display:none"),$(".search-close-icon").removeAttr("style").attr("style","display:none"),$(".search-icon").removeAttr("style").attr("style","display:block")}),$(".top-search-overlay").click(function(t){$(".top-search-input-wrap").removeAttr("style").attr("style","display:none"),$(".search-close-icon").removeAttr("style").attr("style","display:none"),$(".search-icon").removeAttr("style").attr("style","display:block")})});