<script src="./js-sdk.min.js"></script>
<script src="./vconsole.min.js"></script>
<script>
      var vConsole = new VConsole();
      window.onload = login();
    function login() {
    window.ma
    .callNativeAPI(
    "gethwssostring",
    { merchantAppId: "xxxxx" },
    (res) => {
    console.log("superapptoken res:", res);
    console.log("superapptoken:", res.xm_string_callback_key);
    var superapptoken = res.xm_string_callback_key;
    $.ajax({
    url: "https://xxxxx",
    method: "POST",
    async: true,
    data: {
    client_id: "xxx",
    client_secret: " xxx",
    grant_type: "client_credentials",
    },
    backend server
    success: function (response) {
    console.log("miniservertoken:", response.access_token);
    var miniservertoken = response.access_token;
    $.ajax({
    url: "xxx",
    user token,
    method: "POST",
    async: true,
    headers: {
    "Content-Type": "application/json",
    "access-token": miniservertoken,
    },
    data: JSON.stringify({
    authCode: superapptoken,
    }),
    success: function (response) {
    console.log(
    "miniusertoken:",
    response["result"]["access-token"]
);
window.accesstoken = response["result"]["access-token"];
},
error: function (xhr, status, error) {
console.log("miniusertoken create fail", error);
},
});
},
error: function (xhr, status, error) {
console.log("miniservertoken create fail", error);
},
});
}
)
.catch((e) => {
console.log("superapptoken create fail", e);
});
}
</script>
4 Développer la fonction de
 
</script>