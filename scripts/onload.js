// maps.js & parameters.js
window.onload = function () {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      // 位置情報取得成功時
      function(position){
        // GoogleMapの表示
        googleMapOpts.center = new google.maps.LatLng( position.coords.latitude, position.coords.longitude);
        var map = new google.maps.Map(document.getElementById("map_canvas"), googleMapOpts);
      },
      // 位置情報取得失敗時
      function(error){
        var message = "";
          switch (error.code) {
            case error.POSITION_UNAVAILABLE:
              message = "位置情報の取得ができませんでした.";
              break;
            case error.PERMISSION_DENIED:
              message = "位置情報取得の使用許可がされませんでした.";
              break;
            case error.PERMISSION_DENIED_TIMEOUT:
              message = "位置情報取得中にタイムアウトしました.";
              break;
          }
          window.alert(message);
      }
    );
  } else {
    window.alert("本ブラウザではgeolocationが使えません.");
  }
  var out = document.getElementById("level");
  out.innerHTML = level;
  out = document.getElementById("resistance");
  out.innerHTML = resistance;
  out = document.getElementById("HP");
  out.innerHTML = hitPoint;
}
