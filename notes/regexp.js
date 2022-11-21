//
"testi".match(/^[a-z]{5}$/gim);

"passwords".match(/^\w{8,20}$/gim);

"yes and no".match(/^(yes|no)$/gim);

"heres some numbers: 1, -5, 2000, 45".match(/-?\d+/g);

// päiväys filter
"31.12.2002".match(/^(3[01]|[12]\d|1-9)\.(1[0-2]|[1-9])\.([1-3]\d\d\d)$/g);

console.log("Javascript in progress".slice(/\s+/));

// test regexp, returns true or false
console.log(/[a-z]{5-13}/.test("alice"));
