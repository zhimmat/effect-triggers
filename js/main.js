var $body = $('body');

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

$btnShowHide.on('click', function () {
  $box.toggleClass('showbox');
});

$btnMove.on('click', function () {
  $diamond.toggleClass('btn-slide');
});

$btnCollapseExpand.on('click', function () {
  $panel.toggleClass('collapse-panel');
});

$btnBounce.on('click', function () {
  $circle.toggleClass('bounce');
});
