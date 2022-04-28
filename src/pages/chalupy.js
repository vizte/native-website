const card = document.querySelectorAll('.card');
                        
card.onmousemove = function(e){
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
};

let allImages = [document.querySelector('.popup-image1'), document.querySelector('.popup-image2'),
    document.querySelector('.popup-image3'), document.querySelector('.popup-image4'), document.querySelector('.popup-image5'), document.querySelector('.popup-image6'),
    document.querySelector('.popup-image7'), document.querySelector('.popup-image8'), document.querySelector('.popup-image9'), document.querySelector('.popup-image10'),
    document.querySelector('.popup-image11'), document.querySelector('.popup-image12'), document.querySelector('.popup-image13'), document.querySelector('.popup-image14'),
    document.querySelector('.popup-image15'), document.querySelector('.popup-image16'), document.querySelector('.popup-image17'), document.querySelector('.popup-image18'),
    document.querySelector('.popup-image19'), document.querySelector('.popup-image20'), document.querySelector('.popup-image21'), document.querySelector('.popup-image22'),
    document.querySelector('.popup-image23'), document.querySelector('.popup-image24'), document.querySelector('.popup-image25'), document.querySelector('.popup-image26'),
    document.querySelector('.popup-image27'), document.querySelector('.popup-image28'), document.querySelector('.popup-image29'), document.querySelector('.popup-image30'),
    document.querySelector('.popup-image31'), document.querySelector('.popup-image32'), document.querySelector('.popup-image33'), document.querySelector('.popup-image34'),
    document.querySelector('.popup-image35'), document.querySelector('.popup-image36'), document.querySelector('.popup-image37'), document.querySelector('.popup-image38'),
    document.querySelector('.popup-image39'), document.querySelector('.popup-image40'), document.querySelector('.popup-image41'), document.querySelector('.popup-image42'),
    document.querySelector('.popup-image43'), document.querySelector('.popup-image44'), document.querySelector('.popup-image45'), document.querySelector('.popup-image46'),
    document.querySelector('.popup-image47'), document.querySelector('.popup-image48'), document.querySelector('.popup-image49'), document.querySelector('.popup-image50'),
    document.querySelector('.popup-image51'), document.querySelector('.popup-image52')]; 

/* Set  */
document.querySelector("#card1").onclick = () =>{
    let image = document.querySelector('.popup-image1').style.display = 'block';    
}
document.querySelector('#popup-image1_span').onclick = () =>{
    document.querySelector('.popup-image1').style.display = 'none';
}
document.querySelector("#card2").onclick = () =>{    
    document.querySelector('.popup-image2').style.display = 'block';
}
document.querySelector('#popup-image2_span').onclick = () =>{
    document.querySelector('.popup-image2').style.display = 'none';
}
document.querySelector("#card3").onclick = () =>{    
    document.querySelector('.popup-image3').style.display = 'block';
}
document.querySelector('#popup-image3_span').onclick = () =>{
    document.querySelector('.popup-image3').style.display = 'none';
}
document.querySelector("#card4").onclick = () =>{    
    document.querySelector('.popup-image4').style.display = 'block';
}
document.querySelector('#popup-image4_span').onclick = () =>{
    document.querySelector('.popup-image4').style.display = 'none';
}
document.querySelector("#card5").onclick = () =>{
    let image = document.querySelector('.popup-image5').style.display = 'block';    
}
document.querySelector('#popup-image5_span').onclick = () =>{
    document.querySelector('.popup-image5').style.display = 'none';
}
document.querySelector("#card6").onclick = () =>{    
    document.querySelector('.popup-image6').style.display = 'block';
}
document.querySelector('#popup-image6_span').onclick = () =>{
    document.querySelector('.popup-image6').style.display = 'none';
}
document.querySelector("#card7").onclick = () =>{    
    document.querySelector('.popup-image7').style.display = 'block';
}
document.querySelector('#popup-image7_span').onclick = () =>{
    document.querySelector('.popup-image7').style.display = 'none';
}
document.querySelector("#card8").onclick = () =>{    
    document.querySelector('.popup-image8').style.display = 'block';
}
document.querySelector('#popup-image8_span').onclick = () =>{
    document.querySelector('.popup-image8').style.display = 'none';
}
document.querySelector("#card9").onclick = () =>{
    let image = document.querySelector('.popup-image9').style.display = 'block';    
}
document.querySelector('#popup-image9_span').onclick = () =>{
    document.querySelector('.popup-image9').style.display = 'none';
}
document.querySelector("#card10").onclick = () =>{    
    document.querySelector('.popup-image10').style.display = 'block';
}
document.querySelector('#popup-image10_span').onclick = () =>{
    document.querySelector('.popup-image10').style.display = 'none';
}
document.querySelector("#card11").onclick = () =>{    
    document.querySelector('.popup-image11').style.display = 'block';
}
document.querySelector('#popup-image11_span').onclick = () =>{
    document.querySelector('.popup-image11').style.display = 'none';
}
document.querySelector("#card12").onclick = () =>{    
    document.querySelector('.popup-image12').style.display = 'block';
}
document.querySelector('#popup-image12_span').onclick = () =>{
    document.querySelector('.popup-image12').style.display = 'none';
}
document.querySelector("#card13").onclick = () =>{    
    document.querySelector('.popup-image13').style.display = 'block';
}
document.querySelector('#popup-image13_span').onclick = () =>{
    document.querySelector('.popup-image13').style.display = 'none';
}
document.querySelector("#card14").onclick = () =>{    
    document.querySelector('.popup-image14').style.display = 'block';
}
document.querySelector('#popup-image14_span').onclick = () =>{
    document.querySelector('.popup-image14').style.display = 'none';
}
document.querySelector("#card15").onclick = () =>{    
    document.querySelector('.popup-image15').style.display = 'block';
}
document.querySelector('#popup-image15_span').onclick = () =>{
    document.querySelector('.popup-image15').style.display = 'none';
}
document.querySelector("#card16").onclick = () =>{    
    document.querySelector('.popup-image16').style.display = 'block';
}
document.querySelector('#popup-image16_span').onclick = () =>{
    document.querySelector('.popup-image16').style.display = 'none';
}
document.querySelector("#card17").onclick = () =>{    
    document.querySelector('.popup-image17').style.display = 'block';
}
document.querySelector('#popup-image17_span').onclick = () =>{
    document.querySelector('.popup-image17').style.display = 'none';
}
document.querySelector("#card18").onclick = () =>{    
    document.querySelector('.popup-image18').style.display = 'block';
}
document.querySelector('#popup-image18_span').onclick = () =>{
    document.querySelector('.popup-image18').style.display = 'none';
}
document.querySelector("#card19").onclick = () =>{    
    document.querySelector('.popup-image19').style.display = 'block';
}
document.querySelector('#popup-image19_span').onclick = () =>{
    document.querySelector('.popup-image19').style.display = 'none';
}
document.querySelector("#card20").onclick = () =>{    
    document.querySelector('.popup-image20').style.display = 'block';
}
document.querySelector('#popup-image20_span').onclick = () =>{
    document.querySelector('.popup-image20').style.display = 'none';
}
document.querySelector("#card21").onclick = () =>{    
    document.querySelector('.popup-image21').style.display = 'block';
}
document.querySelector('#popup-image21_span').onclick = () =>{
    document.querySelector('.popup-image21').style.display = 'none';
}
document.querySelector("#card22").onclick = () =>{    
    document.querySelector('.popup-image22').style.display = 'block';
}
document.querySelector('#popup-image22_span').onclick = () =>{
    document.querySelector('.popup-image22').style.display = 'none';
}
document.querySelector("#card23").onclick = () =>{    
    document.querySelector('.popup-image23').style.display = 'block';
}
document.querySelector('#popup-image23_span').onclick = () =>{
    document.querySelector('.popup-image23').style.display = 'none';
}
document.querySelector("#card24").onclick = () =>{    
    document.querySelector('.popup-image24').style.display = 'block';
}
document.querySelector('#popup-image24_span').onclick = () =>{
    document.querySelector('.popup-image24').style.display = 'none';
}
document.querySelector("#card25").onclick = () =>{    
    document.querySelector('.popup-image25').style.display = 'block';
}
document.querySelector('#popup-image25_span').onclick = () =>{
    document.querySelector('.popup-image25').style.display = 'none';
}
document.querySelector("#card26").onclick = () =>{    
    document.querySelector('.popup-image26').style.display = 'block';
}
document.querySelector('#popup-image26_span').onclick = () =>{
    document.querySelector('.popup-image26').style.display = 'none';
}
document.querySelector("#card27").onclick = () =>{    
    document.querySelector('.popup-image27').style.display = 'block';
}
document.querySelector('#popup-image27_span').onclick = () =>{
    document.querySelector('.popup-image27').style.display = 'none';
}
document.querySelector("#card28").onclick = () =>{    
    document.querySelector('.popup-image28').style.display = 'block';
}
document.querySelector('#popup-image28_span').onclick = () =>{
    document.querySelector('.popup-image28').style.display = 'none';
}
document.querySelector("#card29").onclick = () =>{    
    document.querySelector('.popup-image29').style.display = 'block';
}
document.querySelector('#popup-image29_span').onclick = () =>{
    document.querySelector('.popup-image29').style.display = 'none';
}
document.querySelector("#card30").onclick = () =>{    
    document.querySelector('.popup-image30').style.display = 'block';
}
document.querySelector('#popup-image30_span').onclick = () =>{
    document.querySelector('.popup-image30').style.display = 'none';
}
document.querySelector("#card31").onclick = () =>{    
    document.querySelector('.popup-image31').style.display = 'block';
}
document.querySelector('#popup-image31_span').onclick = () =>{
    document.querySelector('.popup-image31').style.display = 'none';
}
document.querySelector("#card32").onclick = () =>{    
    document.querySelector('.popup-image32').style.display = 'block';
}
document.querySelector('#popup-image32_span').onclick = () =>{
    document.querySelector('.popup-image32').style.display = 'none';
}
document.querySelector("#card33").onclick = () =>{    
    document.querySelector('.popup-image33').style.display = 'block';
}
document.querySelector('#popup-image33_span').onclick = () =>{
    document.querySelector('.popup-image33').style.display = 'none';
}
document.querySelector("#card34").onclick = () =>{    
    document.querySelector('.popup-image34').style.display = 'block';
}
document.querySelector('#popup-image34_span').onclick = () =>{
    document.querySelector('.popup-image34').style.display = 'none';
}
document.querySelector("#card35").onclick = () =>{    
    document.querySelector('.popup-image35').style.display = 'block';
}
document.querySelector('#popup-image35_span').onclick = () =>{
    document.querySelector('.popup-image35').style.display = 'none';
}
document.querySelector("#card36").onclick = () =>{    
    document.querySelector('.popup-image36').style.display = 'block';
}
document.querySelector('#popup-image36_span').onclick = () =>{
    document.querySelector('.popup-image36').style.display = 'none';
}
document.querySelector("#card37").onclick = () =>{    
    document.querySelector('.popup-image37').style.display = 'block';
}
document.querySelector('#popup-image37_span').onclick = () =>{
    document.querySelector('.popup-image37').style.display = 'none';
}
document.querySelector("#card38").onclick = () =>{    
    document.querySelector('.popup-image38').style.display = 'block';
}
document.querySelector('#popup-image38_span').onclick = () =>{
    document.querySelector('.popup-image38').style.display = 'none';
}
document.querySelector("#card39").onclick = () =>{    
    document.querySelector('.popup-image39').style.display = 'block';
}
document.querySelector('#popup-image39_span').onclick = () =>{
    document.querySelector('.popup-image39').style.display = 'none';
}
document.querySelector("#card40").onclick = () =>{    
    document.querySelector('.popup-image40').style.display = 'block';
}
document.querySelector('#popup-image40_span').onclick = () =>{
    document.querySelector('.popup-image40').style.display = 'none';
}
document.querySelector("#card41").onclick = () =>{    
    document.querySelector('.popup-image41').style.display = 'block';
}
document.querySelector('#popup-image41_span').onclick = () =>{
    document.querySelector('.popup-image41').style.display = 'none';
}
document.querySelector("#card42").onclick = () =>{    
    document.querySelector('.popup-image42').style.display = 'block';
}
document.querySelector('#popup-image42_span').onclick = () =>{
    document.querySelector('.popup-image42').style.display = 'none';
}
document.querySelector("#card43").onclick = () =>{    
    document.querySelector('.popup-image43').style.display = 'block';
}
document.querySelector('#popup-image43_span').onclick = () =>{
    document.querySelector('.popup-image43').style.display = 'none';
}
document.querySelector("#card44").onclick = () =>{    
    document.querySelector('.popup-image44').style.display = 'block';
}
document.querySelector('#popup-image44_span').onclick = () =>{
    document.querySelector('.popup-image44').style.display = 'none';
}
document.querySelector("#card45").onclick = () =>{    
    document.querySelector('.popup-image45').style.display = 'block';
}
document.querySelector('#popup-image45_span').onclick = () =>{
    document.querySelector('.popup-image45').style.display = 'none';
}
document.querySelector("#card46").onclick = () =>{    
    document.querySelector('.popup-image46').style.display = 'block';
}
document.querySelector('#popup-image46_span').onclick = () =>{
    document.querySelector('.popup-image46').style.display = 'none';
}
document.querySelector("#card47").onclick = () =>{    
    document.querySelector('.popup-image47').style.display = 'block';
}
document.querySelector('#popup-image47_span').onclick = () =>{
    document.querySelector('.popup-image47').style.display = 'none';
}
document.querySelector("#card48").onclick = () =>{    
    document.querySelector('.popup-image48').style.display = 'block';
}
document.querySelector('#popup-image48_span').onclick = () =>{
    document.querySelector('.popup-image48').style.display = 'none';
}
document.querySelector("#card49").onclick = () =>{    
    document.querySelector('.popup-image49').style.display = 'block';
}
document.querySelector('#popup-image49_span').onclick = () =>{
    document.querySelector('.popup-image49').style.display = 'none';
}
document.querySelector("#card50").onclick = () =>{    
    document.querySelector('.popup-image50').style.display = 'block';
}
document.querySelector('#popup-image50_span').onclick = () =>{
    document.querySelector('.popup-image50').style.display = 'none';
}
document.querySelector("#card51").onclick = () =>{    
    document.querySelector('.popup-image51').style.display = 'block';
}
document.querySelector('#popup-image51_span').onclick = () =>{
    document.querySelector('.popup-image51').style.display = 'none';
}
document.querySelector("#card52").onclick = () =>{    
    document.querySelector('.popup-image52').style.display = 'block';
}
document.querySelector('#popup-image52_span').onclick = () =>{
    document.querySelector('.popup-image52').style.display = 'none';
}


window.onkeyup = function (event) {
    if (event.keyCode == 27) {
     allImages.forEach(function(image){
        image.style.display = "none"
     })
    }
   }

function slide(){
let slideValue = document.getElementById("slider").value;
document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)";
console.log("polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)");
}


  let stars = document.getElementById('stars');
  let mountains_behind = document.getElementById('mountains_behind');
  let text = document.getElementById('text');
  let btn = document.getElementById('btn');
  let mountains_front = document.getElementById('mountains_front');
  let header = document.querySelector('header');

  window.addEventListener('scroll', function(){
      let value = window.scrollY;
      stars.style.left = value * 0.25 + 'px';
      mountains_behind.style.top = value * 0.5 + 'px';
      mountains_front.style.top = value * 0 + 'px';
      text.style.marginRight = value * 4 + 'px';
      text.style.marginTop = value * 1.5 + 'px';
      btn.style.marginTop = value * 1.5 + 'px';
      header.style.top = value * 0.5 + 'px';
  })
