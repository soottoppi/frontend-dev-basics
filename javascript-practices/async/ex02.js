const ex02 = function (param) {
    return new Promise(function (resolve, reject) {
        //
        // 비동기 코드
        // 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
        //
        setTimeout(function () {
            if (param === "param-data") {
                resolve("ok");
            } else {
                reject(new Error("fail"));
            }
        }, 2000);
    });
};

if (require.main == module) {
    ex02("param-data").then(function (res) {
        console.log(res);
    });

    // test02: fail
    ex02("param-data").catch(function (error) {
        console.log(error);
    });

    // test02: success

    // 일반적으로...
    // ex02('')
    //     .then(res => {

    //     })
    //     .catch(err => {

    //     })

    console.log("wait........");
} else {
    module.exports = ex02;
}
