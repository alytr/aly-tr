var bMoin1=document.getElementById("moin1")
var bInput1=document.getElementById("input1")
bMoin1.addEventListener('click',function(){
  var bInputValue= bInput1.value
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput1.value=bInputValue
})

var bMoin2=document.getElementById("moin2")
var bInput2=document.getElementById("input2")
bMoin2.addEventListener('click',function(){
  var bInputValue= bInput2.value
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput2.value=bInputValue
})

var bMoin3=document.getElementById("moin3")
var bInput3=document.getElementById("input3")
bMoin3.addEventListener('click',function(){
  var bInputValue= bInput3.value
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput3.value=bInputValue
})

var bMoin4=document.getElementById("moin4")
var bInput4=document.getElementById("input4")
bMoin4.addEventListener('click',function(){
  var bInputValue= bInput4.value
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput4.value=bInputValue
})

var bPlus1=document.getElementById("plus1")
var bInput1=document.getElementById("input1")
bPlus1.addEventListener('click',function(){
  var bInputValue= bInput1.value
  bInputValue++
  if(bInputValue<1){
    bInputValue=1
  }
  bInput1.value=bInputValue
})
var bPlus2=document.getElementById("plus2")
var bInput2=document.getElementById("input2")
bPlus2.addEventListener('click',function(){
  var bInputValue= bInput2.value
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput2.value=bInputValue
})

var bPlus3=document.getElementById("plus3")
var bInput3=document.getElementById("input3")
bPlus3.addEventListener('click',function(){
  var bInputValue= bInput3.value
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput3.value=bInputValue
})

var bPlus4=document.getElementById("plus4")
var bInput4=document.getElementById("input4")
bPlus4.addEventListener('click',function(){
  var bInputValue= bInput4.value
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput4.value=bInputValue
})


var bprix1=document.getElementById("prix1")
var bTtl1=document.getElementById("ttl1")
var bPlus1=document.getElementById("plus1")
var bInput1=document.getElementById("input1")
bPlus1.addEventListener('click',function(){
  var bInputValue= bInput1.value
  var bprix1Value = bprix1.textContent
  bTtl1.textContent = bprix1Value * bInputValue
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput1.value=bInputValue
})

var bprix2=document.getElementById("prix2")
var bTtl2=document.getElementById("ttl2")
var bPlus2=document.getElementById("plus2")
var bInput2=document.getElementById("input2")
bPlus2.addEventListener('click',function(){
  var bInputValue= bInput2.value
  var bprix2Value = bprix2.textContent
  bTtl2.textContent = bprix2Value * bInputValue
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput2.value=bInputValue
})

var bprix3=document.getElementById("prix3")
var bTtl3=document.getElementById("ttl3")
var bPlus3=document.getElementById("plus3")
var bInput3=document.getElementById("input3")
bPlus3.addEventListener('click',function(){
  var bInputValue= bInput3.value
  var bprix3Value = bprix3.textContent
  bTtl3.textContent = bprix3Value * bInputValue
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput3.value=bInputValue
})

var bprix4=document.getElementById("prix4")
var bTtl4=document.getElementById("ttl4")
var bPlus4=document.getElementById("plus4")
var bInput4=document.getElementById("input4")
bPlus4.addEventListener('click',function(){
  var bInputValue= bInput4.value
  var bprix4Value = bprix4.textContent
  bTtl4.textContent = bprix4Value * bInputValue
  bInputValue++
  if(bInputValue>5){
    bInputValue=5
  }
  bInput4.value=bInputValue
})

var bprix1=document.getElementById("prix1")
var bTtl1=document.getElementById("ttl1")
var bMoin1=document.getElementById("moin1")
var bInput1=document.getElementById("input1")
bMoin1.addEventListener('click',function(){
  var bInputValue= bInput1.value
  var bprix1Value = bprix1.textContent
  bTtl1.textContent = bprix1Value * bInputValue
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput1.value=bInputValue
})

var bprix2=document.getElementById("prix2")
var bTtl2=document.getElementById("ttl2")
var bMoin2=document.getElementById("moin2")
var bInput2=document.getElementById("input2")
bMoin2.addEventListener('click',function(){
  var bInputValue= bInput2.value
  var bprix2Value = bprix2.textContent
  bTtl2.textContent = bprix2Value * bInputValue
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput2.value=bInputValue
})

var bprix3=document.getElementById("prix3")
var bTtl3=document.getElementById("ttl3")
var bMoin3=document.getElementById("moin3")
var bInput3=document.getElementById("input3")
bMoin3.addEventListener('click',function(){
  var bInputValue= bInput3.value
  var bprix3Value = bprix3.textContent
  bTtl3.textContent = bprix3Value * bInputValue
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput3.value=bInputValue
})

var bprix4=document.getElementById("prix4")
var bTtl4=document.getElementById("ttl4")
var bMoin4=document.getElementById("moin4")
var bInput4=document.getElementById("input4")
bMoin4.addEventListener('click',function(){
  var bInputValue= bInput4.value
  var bprix4Value = bprix4.textContent
  bTtl4.textContent = bprix4Value * bInputValue
  bInputValue--
  if(bInputValue<1){
    bInputValue=1
  }
  bInput4.value=bInputValue
})


var bHeart=document.getElementById("heart1");

 bHeart.addEventListener('click', function(){
  document.getElementById('heart1').style.backgroundColor = 'red';
 })

 var bHeart=document.getElementById("heart2");

 bHeart.addEventListener('click', function(){
  document.getElementById('heart2').style.backgroundColor = 'red';
 })

 var bHeart=document.getElementById("heart3");

 bHeart.addEventListener('click', function(){
  document.getElementById('heart3').style.backgroundColor = 'red';
 })


 var bHeart=document.getElementById("heart4");

 bHeart.addEventListener('click', function(){
  document.getElementById('heart4').style.backgroundColor = 'red';
 })

 
