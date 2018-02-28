/* Cookie Controller */
var cookie = (function(global){

    // Create Cookie
    var createsCookie = function(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        global.document.cookie = name + "=" + value + expires + "; path=/";

        if(readsCookie.length > 0)
            return `cookie create => Name: {name}, Value: {value}, Expires in: {days} days`;
            
        return null;
    };

    var readsCookie = function(name) {
        var value = "; " + global.document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
        
        return null;
    };

    var deleteCookie = function(name) {
        createsCookie(name,"",-1);
        if(readsCookie.length > 0)
            return "Cookie Deleted";
            
        return null;
    };

    return{
        
        create: function(cookieName, cookieValue, days = 10) {
            return createsCookie(cookieName, cookieValue, days);
        },
        
        read: function(cookieName) {
            return readsCookie(cookieName);
        },

        delete: function(cookieName) {
            return deleteCookie(cookieName);
        }
    };

}(global));


exports.create = function (cookieName, cookieValue, days) {
    return cookie.create(cookieName, cookieValue, days);
};

exports.read = function (cookieName) {
    return cookie.read(cookieName);
};

exports.delete = function (cookieName) {
    return cookie.delete(cookieName);
};