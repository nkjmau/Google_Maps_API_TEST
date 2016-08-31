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

window.addEventListener('load', function(){
  var map;
  var latitude, longitude;
  if (navigator.geolocation){
    // 位置情報を取得
    // TODO: 取得したら(一定時間ごとに？)送信
    navigator.geolocation.watchPosition(function(pos){
      console.dir(pos.coords);
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;
    });
  }
  else {
    alert('cannot get geolocation');
    return;
  }
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
    map.setCenter(new google.maps.LatLng( latitude, longitude));
  }
  
  window.addEventListener('click', function() {
    showMap();
    setInterval(function() {
      console.log(latitude, longitude);
      updateMap();
    }, 3000);
    window.removeEventListener('click', arguments.callee);
  });
});

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
