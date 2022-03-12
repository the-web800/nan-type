let va = 10;
let min = 0;
let sec = 0;
const vd = document.getElementById("val");
const md = document.getElementById("timeone");
const sd = document.getElementById("timetwo");
let Q = ['i1.JPG','i2.JPG','i3.JPG','i4.JPG','i5.JPG','i6.JPG','i7.JPG','i8.JPG','i9.JPG','i10.JPG','i11.JPG','i12.JPG','i13.JPG'];
let Q_V = 0;
let A = ['aoumigame','shio','hetuhotu','tukutukubousi','chousennninnjinn','kazunoko','o-sutoraria','kireuriwari','tutoiidenn','byann','taito','tetu','ikomiki'];
let Q_N = Math.floor( Math.random() * Q.length);
let imd = document.getElementById('im');
let typ = document.getElementById('typ');
vd.innerHTML = va;
md.innerHTML = min;
sd.innerHTML = sec;
imd.innerHTML = '<img src="'+Q[Q_N]+'" style="width:50vw;height:27.8vw;display:block;margin-left:auto;margin-right:auto;margin-top:2rem;" id="ig">';
document.getElementById('typ').focus();
let rh = [];
rh.push(Q_N);
typ.click();
  window.addEventListener('keydown',hant);
      function hant(Event){
      let kc = Event.key;
      if(A[Q_N].charAt(Q_V)==kc){
          console.log('abc');
          Q_V++;
          typ.insertAdjacentHTML('beforeend',kc);
          if(A[Q_N].length == Q_V){
              Q_N = Math.floor( Math.random() * Q.length);
              console.log(rh);
              while(0 == 0){
                  if(rh.includes(Q_N)){
                      Q_N = Math.floor(Math.random() * Q.length);
                      continue;
                  }else{
                  rh.push(Q_N);
                  break;
                  }
              };
              if(va-1 == 0){
                 document.getElementById('im').style.display = 'none'; 
                 document.getElementById('top').style.display = 'inline-block';
                 document.getElementById('valdiv').style.display = 'none';
                 document.getElementById('time').style.display = 'none';
                 document.getElementById('typ').style.display = 'none';
                 document.getElementById('lastone').innerHTML = 'あなたは10問を'+min+'分'+sec+'秒で解きました。';
                 document.getElementById('a').style.display = 'inline';
              }
              typ.innerHTML = '';
              va--;
              vd.innerHTML = va;
              Q_V = 0;
              imd.innerHTML = '<img src="'+Q[Q_N]+'" style="width:50vw;height:27.8vw;display:block;margin-left:auto;margin-right:auto;margin-top:2rem;" id="ig">';
          };
      };
      };  
const countup = setInterval(function(){sd.innerHTML = sec++;
                      if(sec==60){
                          sec = 0;
                          min++;
                          md.innerHTML = min;
                          }
                       if(va == 0){
                            clearInterval(countup);
                       }
                      },1000);