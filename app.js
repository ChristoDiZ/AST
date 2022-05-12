function loadImage1(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}
function loadImage2(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load',  async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});      
 
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let cliente = document.getElementById('cliente').value;
        let supervisor = document.getElementById('supervisor').value;
        let areaLugar = document.getElementById('areaLugar').value;
        let pts = document.getElementById('pts').value;
        let trabajoDesc = document.getElementById('trabajoDesc').value;
        let tipoActividad = document.getElementById('tipoActividad').value;
        let pregunta1 = document.getElementById('pregunta1').value;
        let pregunta2 = document.getElementById('pregunta2').value;
        let pregunta3 = document.getElementById('pregunta3').value;
        let pregunta4 = document.getElementById('pregunta4').value;
        let pregunta5 = document.getElementById('pregunta5').value;
        let pregunta6 = document.getElementById('pregunta6').value;
        let pregunta7 = document.getElementById('pregunta7').value;
        let factible = document.getElementById('factible').value;
        let descripcionSecuencia1 = document.getElementById('descripcionSecuencia1').value;
        let riesgo1 = document.getElementById('riesgo1').value;
        let medidas1 = document.getElementById('medidas1').value;
        let nivel1 = document.getElementById('nivel1').value;
        let descripcionSecuencia2 = document.getElementById('descripcionSecuencia2').value;
        let riesgo2 = document.getElementById('riesgo2').value;
        let medidas2 = document.getElementById('medidas2').value;
        let nivel2 = document.getElementById('nivel2').value;
        let descripcionSecuencia3 = document.getElementById('descripcionSecuencia3').value;
        let riesgo3 = document.getElementById('riesgo3').value;
        let medidas3 = document.getElementById('medidas3').value;
        let nivel3 = document.getElementById('nivel3').value;
        let cascoSeguridad = document.querySelector('input[name="cascoSeguridad"]:checked').value;
        let lente = document.getElementById('lente').value;
        let facial = document.getElementById('facial').value;

        generatePDF(cliente,supervisor,areaLugar,pts,trabajoDesc,tipoActividad,pregunta1,
            pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,factible,descripcionSecuencia1,riesgo1,
            medidas1,nivel1,descripcionSecuencia2,riesgo2,medidas2,nivel2,descripcionSecuencia3,riesgo3,
            medidas3,nivel3,cascoSeguridad,lente,facial);
    })

});

async function generatePDF(cliente,supervisor,areaLugar,pts,trabajoDesc,tipoActividad,pregunta1,
    pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,factible,descripcionSecuencia1,riesgo1,
    medidas1,nivel1,descripcionSecuencia2,riesgo2,medidas2,nivel2,descripcionSecuencia3,riesgo3,
    medidas3,nivel3,cascoSeguridad,lente,facial) {
    const image = await loadImage1("c1.jpg");  
    const signatureImage = signaturePad.toDataURL();//firma

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 605, 792); //Firma
    
    pdf.setFontSize(8);
    pdf.text(cliente, 60, 94);
    pdf.text(supervisor, 123, 111);
    pdf.text(areaLugar, 435,94);
    pdf.text(pts, 408, 129);
    pdf.text(trabajoDesc, 160, 182);

    pdf.setFillColor(0,0,0);

    if (parseInt(tipoActividad) === 0) {
        pdf.circle(262, 218, 4,'FD');
    } else {
        pdf.circle(338.5, 217, 4,'FD');       
    }

    if (parseInt(pregunta1) === 0) {
        pdf.circle(498, 308, 4,'FD');
    } else if(parseInt(pregunta1) === 2){
        pdf.circle(566, 308, 4,'FD');     
    } else  {        
        pdf.circle(531, 308, 4,'FD');
    }
    if (parseInt(pregunta2) === 0) {
        pdf.circle(498, 340, 4,'FD');
    } else if(parseInt(pregunta2) === 2){
        pdf.circle(566, 340, 4,'FD');     
    } else  {        
        pdf.circle(531, 340, 4,'FD');
    }
    if (parseInt(pregunta3) === 0) {
        pdf.circle(498, 365, 4,'FD');
    } else if(parseInt(pregunta3) === 2){
        pdf.circle(566, 365, 4,'FD');     
    } else  {        
        pdf.circle(531, 365, 4,'FD');
    }
    if (parseInt(pregunta4) === 0) {
        pdf.circle(498, 390, 4,'FD');
    } else if(parseInt(pregunta4) === 2){
        pdf.circle(566, 390, 4,'FD');     
    } else  {        
        pdf.circle(531, 390, 4,'FD');
    }
    if (parseInt(pregunta5) === 0) {
        pdf.circle(498, 417, 4,'FD');
    } else if(parseInt(pregunta5) === 2){
        pdf.circle(566, 417, 4,'FD');     
    } else  {        
        pdf.circle(531, 417, 4,'FD');
    }
    if (parseInt(pregunta6) === 0) {
        pdf.circle(498, 444, 4,'FD');
    } else if(parseInt(pregunta6) === 2){
        pdf.circle(566, 444, 4,'FD');     
    } else  {        
        pdf.circle(531, 444, 4,'FD');
    }
    if (parseInt(pregunta7) === 0) {
        pdf.circle(498, 471, 4,'FD');
    } else if(parseInt(pregunta7) === 2){
        pdf.circle(566, 471, 4,'FD');     
    } else  {        
        pdf.circle(531, 471, 4,'FD');
    }
    if (parseInt(factible) === 0) {
        pdf.circle(239, 545, 4,'FD');
    } else {
        pdf.circle(368.5, 545, 4,'FD');       
    }

    //accion 1
    pdf.text(descripcionSecuencia1, 30, 581);
    pdf.text(riesgo1, 195, 581);
    pdf.text(medidas1, 410, 581);
    pdf.text(nivel1, 360, 581);
    //accion 2
    pdf.text(descripcionSecuencia2, 30, 620);
    pdf.text(riesgo2, 295, 620);
    pdf.text(medidas2, 410, 620);
    pdf.text(nivel2, 360, 620);
    //accion 3
    pdf.text(descripcionSecuencia3, 30, 670);
    pdf.text(riesgo3, 195, 670);
    pdf.text(medidas3, 410, 670);
    pdf.text(nivel3, 360, 670);

    

    const dateI = new Date();
    pdf.text(dateI.getUTCDate().toString(), 129, 130);
    pdf.text('/'+(dateI.getUTCMonth() + 1).toString(), 139, 130);
    pdf.text('/'+dateI.getUTCFullYear().toString(), 149, 130);

    const date = new Date();
    pdf.text(date.getUTCDate().toString(), 137, 147);
    pdf.text('/'+(date.getUTCMonth() + 1).toString(), 146, 147);
    pdf.text('/'+date.getUTCFullYear().toString(), 156, 147);

    //2da hoja
    pdf.addPage();
    const image2 = await loadImage2("c2.jpg");     

    pdf.addImage(image2, 'PNG', 0, 0, 605, 792);

    
    if (parseInt(cascoSeguridad) === 1)
        pdf.circle(131.2, 125.5, 2,'FD');
    
    if (parseInt(lente) === 0)
        pdf.circle(131.2, 136.5, 2,'FD');

    if (parseInt(facial) === 0)
        pdf.circle(131, 147.5, 2,'FD');

    

    pdf.save("AST.pdf");
    
}

a = 0;
function addPersonal (){
        a++;

        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline');
           
            div.innerHTML = '<div class="row ">'+a+'<div class="col-md-3">'+a+' <input type="text" class="form-control " id="descripcionSecuencia2">'+a+'  </div>';
            document.getElementById('canciones').appendChild(div);document.getElementById('canciones').appendChild(div);
}

