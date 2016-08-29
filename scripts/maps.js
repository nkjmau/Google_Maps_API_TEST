var googleMapOpts = {
  zoom: 18,
  center: undefined, //現在地geolocationAPIより
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  draggable: false,  // mapのドラッグ無効化オプション
  disableDoubleClickZoom: true,  //ダブルクリック時のズーム無効化
  mapTypeControl: false, //航空写真or地図の選択ボックス非表示
  streetViewControl: false,  //streetViewの無効化
  zoomControl: false,
  scrollwheel: false  //スクロールによるズーム無効化
};

var geolocationID;

// ハンドラ関数watchPosition()
if (navigator.geolocation) {
  // 現在の位置情報を取得
  geolocationID = navigator.geolocation.watchPosition(
    // 位置情報の取得を成功した場合
    function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      googleMapOpts.center = new google.maps.LatLng( latitude, longitude);
      var map = new google.maps.Map(document.getElementById("map_canvas"), googleMapOpts);
    },
    null,
    { enableHighAccuracy: true }
  );
} else {
  window.alert("本ブラウザではGeolocationが使えません");
}
function clearWatchPosition() {
  navigator.geolocation.clearWatch(geolocationID);
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
