function exibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem)
    callback()
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem',
    () => exibeMensagensNaOrdem('Essa é a segunda mensagem exibida na ordem',
        () => exibeMensagensNaOrdem('Essa é a terceira mensagem exibida na ordem', () => {})
    )
)