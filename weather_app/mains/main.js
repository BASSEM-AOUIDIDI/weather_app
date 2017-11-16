
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude
    var long = position.coords.longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long
$.ajax(url)
.done(function (data) {
// update the UI
$('.place').text(data.name)
var temp = $('.temp').text(data.main.temp)
$('.wind1').text('speed = ' + data.wind.speed)
$('.wind2').text('deg = ' + data.wind.deg)
$(".back").attr('src','https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F02d.png?1499366021821');

  function convertTemp() {
    var $temp = $('.temp')
    var currentVal = $temp.text()
    var newValue = currentVal * 9 / 5 + 32
    $temp.text(newValue)
  }

$('#convert').click(convertTemp)
})
.fail(function (error) {
  console.log(error)
})
  })
}
