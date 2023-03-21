window.addEventListener("load", () => {
    const loader = document.querySelector(".dots-container");
    // loader.style.opacity = "0"
    setTimeout(() => {
        // document.body.remove("dots-container")
        loader.style.display = "none"
        
    },1000);
});

$(".hover-1").hover(function () {
    $(".dropdown-content-1").show(1000)
    // $(".dropdown-content-2").hide()
    
});
$(".dropdown-content-1").mouseleave(function() {
    $(this).hide(1000)
});
$(".hover-2").mouseenter(function () {
    $(".dropdown-content-2").show(1000)
    
});
$(".dropdown-content-2").mouseleave(function() {
    $(this).hide(1000)
});
$(".hover").mouseenter(function () {
    $(".dropdown-content-3").show(1000)
    
});
$(".dropdown-content-3").mouseleave(function() {
    $(this).hide(1000)
});

$(".hover-2").hover(function () {
    $(".dropdown-content-1").hide(500)
    $(".dropdown-content-3").hide(500)
    // $(".dropdown-content-1").hide(500)

    
});
$(".hover-1").hover(function () {
    $(".dropdown-content-2").hide(500)
    $(".dropdown-content-3").hide(500)
    
});
$(".hover").hover(function () {
    $(".dropdown-content-2").hide(500)
    $(".dropdown-content-1").hide(500)
});
// $(document).ready(function () {
//     $(".slider").u();
//   });
//   $(".ticker").slider(() => {
//     $(".slider").slider(e) 
//   })



