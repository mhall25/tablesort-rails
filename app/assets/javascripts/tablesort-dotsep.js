/*!
 * tablesort v5.0.2 (2017-11-12)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2017 ; Licensed MIT
*/Tablesort.extend("dotsep",function(a){return/^(\d+\.)+\d+$/.test(a)},function(a,b){a=a.split("."),b=b.split(".");for(var c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(a[e],10),d=parseInt(b[e],10),c!==d){if(c>d)return-1;if(c<d)return 1}return 0});
