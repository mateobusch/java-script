// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo") ;
    let saludo = document.querySelector("#saludo");
    let span =   document.querySelector("span") ;
    titulo.addEventListener("mouseover", function(){
      let nombre= prompt("Como te llamas?")
      if (nombre.length==0){
        saludo.innerText ="BIENVENID@"
      } else{
        saludo.innerText ="BIENVENIDO@ " + nombre;
      }
      saludo.style.textTransform ="uppercase";
      span.style.display="inline"
      titulo.style.display="none"
    });
    let bienvenida= document.querySelector(".bienvenida")
    let personajes= this.document.querySelector(".personajes")
    span.addEventListener("click", function(){
        
    if (bienvenida) bienvenida.style.display = 'none';
    if (personajes) personajes.style.display = 'flex'; 
  
    })
    let bart       = this.document.querySelector('#bart');
    let lisa       = this.document.querySelector('#lisa');
    let homero     = this.document.querySelector('#homero');
    let marge      = this.document.querySelector('#marge');
    let maggie     = this.document.querySelector('#maggie');
    let milhouse   = this.document.querySelector('#milhouse');
    let burns      = this.document.querySelector('#burns');
    let bobPatinio = this.document.querySelector('#bobPatinio');
    let flanders   = this.document.querySelector('#flanders');
    let duffman    = this.document.querySelector('#duffman');
    let gorgory    = this.document.querySelector('#gorgory');
    let nelson     = this.document.querySelector('#nelson');
    bart.addEventListener("click", function(){
        bart.style.backgroundColor
    })
    homero.addEventListener("click", function(){
        homero.style.backgroundColor= "yellow"
    })
    milhouse.addEventListener("click", function(){
        milhouse.style.backgroundColor= "yellow"
    })
    nelson.addEventListener("click", function(){
        nelson.style.backgroundColor= "yellow"
    })
    lisa.addEventListener("dblclick", function(){
        lisa.style.backgroundColor= "yellow"
    })
    bobPatinio.addEventListener("dblclick", function(){
        bobPatinio.style.backgroundColor= "yellow"
    })
    duffman.addEventListener("dblclick", function(){
        duffman.style.backgroundColor= "yellow"
    })
    marge.addEventListener("mouseover", function(){
        marge.style.backgroundColor= "yellow"
    })
    burns.addEventListener("mouseover", function(){
        burns.style.backgroundColor= "yellow"
    })
    flanders.addEventListener("mouseover", function(){
        flanders.style.backgroundColor= "yellow"
    })
    gorgory.addEventListener("mouseover", function(){
        gorgory.style.backgroundColor= "yellow"
    })
    maggie.addEventListener("mouseout", function(){
        maggie.style.backgroundColor= "yellow"
    })
    bart.addEventListener("click", function(){
        bart.style.backgroundColor= "yellow"
    })
    homero.addEventListener("click", function(){
        homero.style.backgroundColor= "yellow"
    })
    milhouse.addEventListener("click", function(){
        milhouse.style.backgroundColor= "yellow"
    })
    nelson.addEventListener("click", function(){
        nelson.style.backgroundColor= "yellow"
    })
    lisa.addEventListener("dblclick", function(){
        lisa.style.backgroundColor= "yellow"
    })
    bobPatinio.addEventListener("dblclick", function(){
        bobPatinio.style.backgroundColor= "yellow"
    })
    duffman.addEventListener("dblclick", function(){
        duffman.style.backgroundColor= "yellow"
    })
    marge.addEventListener("mouseover", function(){
        marge.style.backgroundColor= "yellow"
    })
    burns.addEventListener("mouseover", function(){
        burns.style.backgroundColor= "yellow"
    })
    flanders.addEventListener("mouseover", function(){
        flanders.style.backgroundColor= "yellow"
    })
    gorgory.addEventListener("mouseover", function(){
        gorgory.style.backgroundColor= "yellow"
    })
    maggie.addEventListener("mouseout", function(){
        maggie.style.backgroundColor= "yellow"
    })
    let boton = document.querySelector(".boton")
    boton.addEventListener("click", function(e){
        
    })

    
 
    
    
 
    
    
    
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    
 }) 
