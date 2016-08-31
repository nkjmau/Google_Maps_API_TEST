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

var map;
var latitude, longitude;
window.addEventListener('click', function() {
  showMap();
  window.removeEventListener("click", arguments.callee);
  setInterval(function() {
    navigator.geolocation.getCurrentPosition(
      // 位置情報の取得を成功した場合
      function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      },
      null,
      { enableHighAccuracy: true }
    );
    updateMap();
  }, 3000);
});
function showMap(){
  var googleMapOpts = {
    zoom: 18,
    center: new google.maps.LatLng( latitude, longitude), //現在地geolocationAPIより
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    draggable: false,  // mapのドラッグ無効化オプション
    disableDoubleClickZoom: true,  //ダブルクリック時のズーム無効化
    mapTypeControl: false, //航空写真or地図の選択ボックス非表示
    streetViewControl: false,  //streetViewの無効化
    zoomControl: false,
    scrollwheel: false  //スクロールによるズーム無効化
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), googleMapOpts);
}
function updateMap(){
  map.panTo(new google.maps.LatLng( latitude, longitude));
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
