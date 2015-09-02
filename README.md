# regex-js-objects
Regex filtering of JavaScript object keys

This is a function to see if a javascript object has value(s) that match a string using regular expressions. It supports nested objects. It does not check for keys.

    passesRegExpFilter({"hello": "world"}, "wor"); // true
    passesRegExpFilter({"hello": {"cool": "pups"}}, "up"); //true
    passesRegExpFilter({"hello": "world"}, "hello"); // false
    passesRegExpFilter({"hello": [1, 2, 3, 4, 5]}, "4"); //true