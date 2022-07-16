const colorselector = document.querySelector('[cor-vermelho]')
const colorselector1 = document.querySelector('[cor-laranja]')
const colorselector2 = document.querySelector('[cor-amarelo]')
const colorselector3 = document.querySelector('[cor-verde]')
const colorselector4 = document.querySelector('[cor-azul]')
const colorselector5 = document.querySelector('[cor-roxo]')
const colorselector6 = document.querySelector('[cor-rosa]')
const cleanbuttom = document.querySelector('#limparcor')
const bodyselec = document.querySelector('#body1')
const textprinc1 = document.querySelector('#textprinc1')
const textprinc2 = document.querySelector('#textprinc2')

cleanbuttom.addEventListener('click', function(clear){
    clear.preventDefault()

    bodyselec.style.background = '#FFFFFF'
    textprinc1.style.color = 'gray'
    textprinc2.style.color = 'gray'
    cleanbuttom.style.color = 'gray'
    cleanbuttom.style.border = '1px solid gray'
    return;
})

colorselector.addEventListener('click', function(rea){
    rea.preventDefault()
    
    bodyselec.style.background = '#D60000'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})

colorselector1.addEventListener('click', function(rea1){
    rea1.preventDefault()
    
    bodyselec.style.background = '#FF5100'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})

colorselector2.addEventListener('click', function(rea2){
    rea2.preventDefault()
    
    bodyselec.style.background = '#FFE600'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})

colorselector3.addEventListener('click', function(rea3){
    rea3.preventDefault()
    
    bodyselec.style.background = '#00D612'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})

colorselector4.addEventListener('click', function(rea4){
    rea4.preventDefault()
    
    bodyselec.style.background = '#006EFF'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})

colorselector5.addEventListener('click', function(rea5){
    rea5.preventDefault()
    
    bodyselec.style.background = '#7D02C4'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})

colorselector6.addEventListener('click', function(rea6){
    rea6.preventDefault()
    
    bodyselec.style.background = '#FF288C'
    textprinc1.style.color = '#FFFFFF'
    textprinc2.style.color = '#FFFFFF'
    cleanbuttom.style.color = '#FFFFFF'
    cleanbuttom.style.border = '1px solid #FFFFFF'
    return;
})



