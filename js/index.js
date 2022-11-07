const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

$backward.addEventListener('click',handleBackward)

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log('Para atrás 10 segundos', $video.currentTime)
}

$forward.addEventListener('click',handleForward)

function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log('Para adelante 10 segundos', $video.currentTime)
}


const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleloaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    console.log('hola', $video.currentTime)
}

$progress.addEventListener('input',handleInput)
function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}
