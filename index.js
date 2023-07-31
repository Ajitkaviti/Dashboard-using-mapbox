function upmap()
   {
  fetch("./data.json")
       .then(response => response.json())
       .then(dat =>{
                 console.log(dat.data)
            dat.data.forEach(e => {
                lat= e.latitude;
                long= e.longitude;
                cases= e.infected;
                
                
                if(cases<=255){
                     colo = `rgb(0 , ${cases} , 0)`   
                }
                else if(cases>255 && cases<=450){
                    cases= cases-200;
                    colo= ` rgb( 0 , 0 ,${cases})`
                }
                else if(cases>450&&cases<700){
                    colo= " rgb(255 ,165 ,0)"
                }
                else{
                    colo= " rgb(250 ,0 ,0)"
                }



               

                 new mapboxgl.Marker({
                    draggable: false,
                   color:colo
                      })
                    .setLngLat([long, lat])
                    .addTo(map);


            });
       })

}

upmap();