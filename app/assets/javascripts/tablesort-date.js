/*!
 * tablesort v5.0.2 (2017-11-12)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2017 ; Licensed MIT
*/!function(){var a=function(a){return a=a.replace(/\-/g,"/"),a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3"),new Date(a).getTime()||-1};Tablesort.extend("date",function(b){return(b.search(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\.?\,?\s*/i)!==-1||b.search(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/)!==-1||b.search(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)!==-1)&&!isNaN(a(b))},function(b,c){return b=b.toLowerCase(),c=c.toLowerCase(),a(c)-a(b)})}();