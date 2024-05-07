console.log('ts2 tut');
console.log('ad');
//enam
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
var Roles = {
    role: EnumRoles.ADMIN
};
var Colors = {
    color: 0 /* EnamColors.blue */
};
// утверждение
var inputElement2 = document.querySelector('val').value;
// const value = (inputElement as HTMLInputElement).value;
// const value2 = (<HTMLInputElement>inputElement).value;
console.log(inputElement2);
