var passesRegExpFilter = function(obj, filter) {
   for (var key in obj) {
       if (obj.hasOwnProperty(key)) {
           if (typeof obj[key] !== null && typeof obj[key] == 'object') {
                if (passesRegExpFilter(obj[key], filter)) {
                    return true;
                }
           } else {
               var reg = new RegExp(filter, 'i');
               if (reg.test(obj[key].toString())) {
                   return true;
               }
           }
       }
   }
   return false;
}