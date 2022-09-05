"use strict";
let user1 = [1, "hassy"];
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["greeen"] = 2] = "greeen";
})(Colors || (Colors = {}));
;
let clr = Colors.blue;
console.log(clr);
let emp = {
    fname: "hassy",
    lname: 'bing',
    age: 21
};
//# sourceMappingURL=tuple.js.map