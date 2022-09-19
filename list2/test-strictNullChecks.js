function printUserInfo(user) {
    console.log("".concat(user.name, ", ").concat(user.age.toString()));
    // => error TS2532: Object is possibly 'undefined'.
    console.log("".concat(user.name, ", ").concat(user.age.toString()));
    // => OK, you confirm that you're sure user.age is non-null.
    if (user.age != null) {
        console.log("".concat(user.name, ", ").concat(user.age.toString()));
    }
    // => OK, the if-condition checked that user.age is non-null.
    console.log(user.name + ', ' + user.age != null ? user.age.toString() : 'age unknown');
    // => Unfortunately TypeScript can't infer that age is non-null here.
}
printUserInfo();
