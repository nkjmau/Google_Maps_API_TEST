window.onload = function showMap(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      // 位置情報取得成功時
      function(position){
        // GoogleMapの表示
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var latlng = new google.maps.LatLng( latitude, longitude);
        //map表示オプション
        var opts = {
          zoom: 18,
          center: latlng, //現在地geolocationAPIより
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false,  // mapのドラッグ無効化オプション
          disableDoubleClickZoom: true,  //ダブルクリック時のズーム無効化
          mapTypeControl: false, //航空写真or地図の選択ボックス非表示
          streetViewControl: false,  //streetViewの無効化
          zoomControl: false,
          scrollwheel: false  //スクロールによるズーム無効化
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
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
}

// ポップアップを消す
window.addEventListener('click' , function() {
    var set = google.maps.InfoWindow.prototype.set;
    google.maps.InfoWindow.prototype.set = function(key, val) {
        if (key === "map") {
            if (! this.get("noSupress")) {
                return;
            }
        }
        set.apply(this, arguments);
    }
});
