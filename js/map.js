$("#TheWall").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".TheWall").fadeIn(300,function(){$(this).focus();});
}); //Prikaz div taga
$('.close').click(function() {
	'use strict';
	$("#clearSound").attr('src','https://www.youtube.com/embed/kGcKOXk9Qbs');
   	$(".TheWall").fadeOut(300);
}); //Close gumb
$(".TheWall").on('blur',function(){
	'use strict';
  	$(this).fadeOut(300);
	$("#clearSound").attr('src','https://www.youtube.com/embed/kGcKOXk9Qbs'); 
}); //Zatvaranje diva klikom izvan njega
//////////////////
$("#KingsLanding").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".KingsLanding").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".KingsLanding").fadeOut(300);
});
$(".KingsLanding").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#BearIsland").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".BearIsland").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".BearIsland").fadeOut(300);
});
$(".BearIsland").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#TheEyrie").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".TheEyrie").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".TheEyrie").fadeOut(300);
});
$(".TheEyrie").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#Dragonstone").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".Dragonstone").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".Dragonstone").fadeOut(300);
});
$(".Dragonstone").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#Braavos").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".Braavos").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".Braavos").fadeOut(300);
});
$(".Braavos").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#Winterfell").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".Winterfell").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".Winterfell").fadeOut(300);
});
$(".Winterfell").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#TheDothrakiSea").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".TheDothrakiSea").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".TheDothrakiSea").fadeOut(300);
});
$(".TheDothrakiSea").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////
$("#Meereen").click(function(e){
	'use strict';
    e.preventDefault();
	e.stopPropagation();
    $(".Meereen").fadeIn(300,function(){$(this).focus();});
});
$('.close').click(function() {
	'use strict';
   $(".Meereen").fadeOut(300);
});
$(".Meereen").on('blur',function(){
	'use strict';
    $(this).fadeOut(300);
});
//////////////////