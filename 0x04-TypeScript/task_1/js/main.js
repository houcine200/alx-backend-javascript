var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Create a function to create a Teacher object
function createTeacher(firstName, lastName, fullTimeEmployee, location, otherAttributes) {
    if (otherAttributes === void 0) { otherAttributes = {}; }
    return __assign({ firstName: firstName, lastName: lastName, fullTimeEmployee: fullTimeEmployee, location: location }, otherAttributes);
}
// Example usage
var teacher3 = createTeacher('John', 'Doe', false, 'London', { contract: false });
console.log(teacher3);
