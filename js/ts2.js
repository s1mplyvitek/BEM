"use strict";
console.log('ts2 tut');
//enam
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
const Roles = {
    role: EnumRoles.ADMIN
};
const Colors = {
    color: 0 /* EnamColors.blue */
};
// утверждение
const inputElement2 = document.querySelector('.tut').value;
// const value = (inputElement2 as HTMLInputElement);
// const value2 = (<HTMLInputElement>inputElement).value;
console.log(inputElement2);
// generic
function entity(args) {
    return args;
}
const arowEntity = (args) => { return args; };
entity(1);
entity('qwe');
const pair1 = {
    key: 1,
    value: 'qwe'
};
const pair2 = {
    key: 1,
    value: 2
};
const pair3 = {
    key: '1',
    value: 'qwe'
};
const car = {
    name: 'asdas',
    price: 9
};
const carName = {
    name: 'asd'
};
const carChair = {};
//# sourceMappingURL=ts2.js.map