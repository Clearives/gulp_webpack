/**
 * Created by Clearives on 2015/11/23.
 * app入口
 */
'use strict';
var $ = require('./lib/jquery');
var page = require('./model/page');
require('./model/loading');
require('../css/style/test.css');
//console.log = function () { }



;(function () {
    page.initPage(0);

    $('.p1').find('.btn').on('click', function () {
        page.initPage(2);
    });
    $('.p2').find('.btn').on('click', function () {
        page.initPage(3);
    });
    $('.p3').find('.btn').on('click', function () {
        page.initPage(2);
    });
    $('.p3').find('.btn1').on('click', function () {
        page.initPage(4);
    });

})();