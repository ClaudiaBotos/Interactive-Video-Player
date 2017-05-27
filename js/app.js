const video= document.getElementById('video');
const l1= document.getElementById('l1');
const l2= document.getElementById('l2');
const l3= document.getElementById('l3');
const l4= document.getElementById('l4');
const l5= document.getElementById('l5');
const l6= document.getElementById('l6');
const l7= document.getElementById('l7');
const l8= document.getElementById('l8');
const l9= document.getElementById('l9');
const l10= document.getElementById('l10');
const l11= document.getElementById('l11');
const l12= document.getElementById('l12');
const l13= document.getElementById('l13');
const l14= document.getElementById('l14');
const l15= document.getElementById('l15');
const l16= document.getElementById('l16');


//Jump the video player when the user clicks on the transcript


l1.addEventListener('click',  ()=>{
      video.currentTime= 0.240;       
      });


l2.addEventListener('click',  ()=>{
      video.currentTime= 4.130;       
     });

l3.addEventListener('click',  ()=>{
      video.currentTime= 7.535;       
      });

l4.addEventListener('click',  ()=>{
     video.currentTime= 11.270;       
      });

l5.addEventListener('click',  ()=>{
      video.currentTime= 13.960;       
      });

l6.addEventListener('click',  ()=>{
      video.currentTime= 17.940;       
      });
    

l7.addEventListener('click',  ()=>{
      video.currentTime= 22.370;       
      });


l8.addEventListener('click',  ()=>{
      video.currentTime= 26.880;       
      });

l9.addEventListener('click',  ()=>{
      video.currentTime= 32.100;       
       });
    
l10.addEventListener('click',  ()=>{
     video.currentTime= 34.730;       
     });

l11.addEventListener('click',  ()=>{
      video.currentTime= 39.350;       
       });
l12.addEventListener('click',  ()=>{
      video.currentTime= 42.350;       
     });

l13.addEventListener('click',  ()=>{
     video.currentTime= 46.300;       
      });

l14.addEventListener('click',  ()=>{
      video.currentTime= 49.270;       
      });

l15.addEventListener('click',  ()=>{
      video.currentTime= 53.760;       
      });

l16.addEventListener('click',  ()=>{
      video.currentTime= 57.780;       
      });
    


//Apply highlight as time changes, to the transcript

video.addEventListener('timeupdate', ()=>{
  if (video.currentTime > 0.023 && video.currentTime <= 4.130 ) {
    l1.style.color="#72c6ed";
  } else  {
   l1.style.color="black";
  }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 4.130 && video.currentTime <= 7.535) {
        l2.style.color='#72c6ed';
    } else {
        l2.style.color='black';
    }
    
});

video.addEventListener('timeupdate', ()=> {
    if(video.currentTime > 7.535 && video.currentTime <= 11.270){
        l3.style.color='#72c6ed';
    } else {
        l3.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 11.270 && video.currentTime <= 13.960)
    {
      l4.style.color='#72c6ed';  
    } else {
        l4.style.color='black';
    }
});

video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 13.960 && video.currentTime <= 17.940)
    {
      l5.style.color='#72c6ed';  
    } else {
        l5.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 17.940 && video.currentTime <= 22.370)
    {
      l6.style.color='#72c6ed';  
    } else {
        l6.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 22.370 && video.currentTime <= 26.880)
    {
      l7.style.color='#72c6ed';  
    } else {
        l7.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 26.880 && video.currentTime <= 30.920)
    {
      l8.style.color='#72c6ed';  
    } else {
        l8.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 32.100 && video.currentTime <= 34.730)
    {
      l9.style.color='#72c6ed';  
    } else {
        l9.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 34.730 && video.currentTime <= 39.430)
    {
      l10.style.color='#72c6ed';  
    } else {
        l10.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 39.430 && video.currentTime <= 41.190)
    {
      l11.style.color='#72c6ed';  
    } else {
        l11.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 42.350 && video.currentTime <= 46.300)
    {
      l12.style.color='#72c6ed';  
    } else {
        l12.style.color='black';
    }
});

video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 46.300 && video.currentTime <= 49.270)
    {
      l13.style.color='#72c6ed';  
    } else {
        l13.style.color='black';
    }
});



video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 49.270 && video.currentTime <= 53.760)
    {
      l14.style.color='#72c6ed';  
    } else {
        l14.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 53.760 && video.currentTime <= 57.780)
    {
      l15.style.color='#72c6ed';  
    } else {
        l15.style.color='black';
    }
});


video.addEventListener('timeupdate', ()=>{
    if(video.currentTime > 57.780 && video.currentTime <= 59.99)
    {
      l16.style.color='#72c6ed';  
    } else {
        l16.style.color='black';
    }
});







