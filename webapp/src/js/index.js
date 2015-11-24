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

})();