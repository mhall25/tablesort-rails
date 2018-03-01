/*!
 * tablesort v5.0.2 (2017-11-12)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2017 ; Licensed MIT
*/
// date
!function(){var a=function(a){return a=a.replace(/\-/g,"/"),a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3"),new Date(a).getTime()||-1};Tablesort.extend("date",function(b){return(b.search(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\.?\,?\s*/i)!==-1||b.search(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/)!==-1||b.search(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)!==-1)&&!isNaN(a(b))},function(b,c){return b=b.toLowerCase(),c=c.toLowerCase(),a(c)-a(b)})}();
// dotsep
Tablesort.extend("dotsep",function(a){return/^(\d+\.)+\d+$/.test(a)},function(a,b){a=a.split("."),b=b.split(".");for(var c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(a[e],10),d=parseInt(b[e],10),c!==d){if(c>d)return-1;if(c<d)return 1}return 0});
// filesize
!function(){var a=function(a,b){return a=parseFloat(a),b=parseFloat(b),a=isNaN(a)?0:a,b=isNaN(b)?0:b,a-b},b=function(a){return a.replace(/[^\-?0-9.]/g,"")},c=function(a){a=a.toLowerCase();var b="i"===a[1]?1024:1e3;switch(a[0]){case"k":return Math.pow(b,2);case"m":return Math.pow(b,3);case"g":return Math.pow(b,4);case"t":return Math.pow(b,5);case"p":return Math.pow(b,6);case"e":return Math.pow(b,7);case"z":return Math.pow(b,8);case"y":return Math.pow(b,9);default:return b}},d=function(a){var d=a.match(/^(\d+(\.\d+)?) ?((K|M|G|T|P|E|Z|Y|B$)i?B?)$/i),e=parseFloat(b(d[1])),f=d[3];return e*c(f)};Tablesort.extend("filesize",function(a){return/^\d+(\.\d+)? ?(K|M|G|T|P|E|Z|Y|B$)i?B?$/i.test(a)},function(b,c){return b=d(b),c=d(c),a(c,b)})}();
// monthname
!function(){Tablesort.extend("monthname",function(a){return a.search(/(January|February|March|April|May|June|July|August|September|October|November|December)/i)!==-1},function(a,b){var c=["January","February","March","April","May","June","July","August","September","October","November","December"];return c.indexOf(b)-c.indexOf(a)})}();
// number
!function(){var a=function(a){return a.replace(/[^\-?0-9.]/g,"")},b=function(a,b){return a=parseFloat(a),b=parseFloat(b),a=isNaN(a)?0:a,b=isNaN(b)?0:b,a-b};Tablesort.extend("number",function(a){return a.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/)||a.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/)||a.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/)},function(c,d){return c=a(c),d=a(d),b(d,c)})}();
