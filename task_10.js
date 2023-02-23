
function user (login,password) {
    const arr = [
        { login: "Misha", password: "12345aaa" },
        { login: "Anna", password: "98765vvv" },
        { login: "Danylo", password: "zxcvb123"}
    ];
    const user = arr.find(item => item.login === login && item.password === password);
    return user === undefined ? "Логін або Пароль не вірний" : "Ви авторизовані";
};
console.log(user("Misha","12345aaa"))