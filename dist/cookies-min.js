"use strict";var cookie=function(e){var t=function(t,r,o){var i="";if(o){var u=new Date;u.setTime(u.getTime()+24*o*60*60*1e3),i="; expires="+u.toUTCString()}return e.document.cookie=t+"="+r+i+"; path=/",n.length>0?"cookie create => Name: {name}, Value: {value}, Expires in: {days} days":null},n=function(t){var n=("; "+e.document.cookie).split("; "+t+"=");return 2==n.length?n.pop().split(";").shift():null};return{create:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return t(e,n,r)},read:function(e){return n(e)},delete:function(e){return t(e,"",-1),n.length>0?"Cookie Deleted":null}}}(global);exports.create=function(e,t,n){return cookie.create(e,t,n)},exports.read=function(e){return cookie.read(e)},exports.delete=function(e){return cookie.delete(e)};