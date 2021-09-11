alert('Bienvenido a tu fruteria online de confianza')

do{
    let option = parseInt(prompt(menu))
    if(option === 4) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt('¿Desea agregar mas productos a la cuenta? S/N');

}while(resp === "S");

if(cart > 0){
    alert(`Su compra tiene un total de $${cart}`);
}

alert('Gracias, vuelva prontos')