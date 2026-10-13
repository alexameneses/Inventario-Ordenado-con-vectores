class Inventario {
    constructor() {
        this.productos = [];
    }
agregar(datos, nuevo) {
    for (let i=0; i<datos.length; i++) {
    if (datos[i].codigo == nuevo.codigo)
        return;
}
    if (datos.length == 0)
        datos.push(nuevo);
    else {
        if (nuevo.codigo<datos[0].codigo) {
            for (let j=datos.length; j>0; j--)
                datos[j] = datos[j - 1];

            datos[0] = nuevo;
        }
        else {
            for (let i=0; i<datos.length-1; i++) {
                if (nuevo.codigo>=datos[i].codigo &&
                    nuevo.codigo<datos[i+1].codigo) {
                    for (let j=datos.length; j> i+1; j--)
                        datos[j] = datos[j-1];
                    datos[i+1] = nuevo;
                    return;
                }
            }
            datos.push(nuevo);
        }
    }
}    
    extraerPrimero(){
        let primero = this.productos[0];
        for(let i = 0; i < this.productos.length-1; i++ )
            this.productos[i]=this.productos[i+1];
        this.productos.pop();
        return primero;
    }
    
    eliminar(codigo){  
       let inicio = 0;
       let fin = this.productos.length-1;

       while(inicio <= fin){
        let medio = Math.floor((inicio+fin)/2);
        if(this.productos[medio].codigo == codigo){
            for(let i=medio; i< this.productos.length - 1; i++){ 
                    this.productos[i] = this.productos[i+1];
            }
            this.productos.pop();
            return;    
            }
                else {
                    if( codigo > this.productos[medio].codigo )
                         inicio = medio +1;
                        else
                            fin = medio-1;
                        } 
                    }  
                    return null;   
                }
    
    
    listar(){
        let lista = "";
        for(let i = 0; i < this.productos.length; i++)
            lista += this.productos[i].infoHtml() + " ";
        
        return lista;
    }
    
    buscar(codigo){
       let inicio = 0;
       let fin = this.productos.length-1;

       while(inicio <= fin){
        let medio = Math.floor((inicio+fin)/2);
        if(this.productos[medio].codigo == codigo)
            return this.productos[medio];
        else {
        if( codigo > this.productos[medio].codigo )
            inicio = medio +1;
        else
        fin = medio-1;
       } 
    }  
    return null;
}

    listarInverso(){
        let listar="";
        for(let i=this.productos.length-1; i>=0; i--)
            listar += this.productos[i].infoHtml() + " ";
        return listar;
    }

}



