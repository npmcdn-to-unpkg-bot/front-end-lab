// Um service worker pode ser nomeado para ser tratado as atualizações
var version = 'v1';

// Declarado os arquivos que ficarão armazenados no cache, utilizando Cache API
var files = [
    'index.html',
    'css/main.css'
];

// Adicionado o evento de install no service worker,
// o qual quando executado armazenará os arquivos em cache com o endereço da versão
this.addEventListener('install', function(event) {
    // Um evento de espera até finalizar a execução da promise
    event.waitUntil(
        caches.open(version).then(function(cache) {
            return cache.addAll(files)
        })
    )
});

// Adicionado o evento de fetch no service worker, equivalente a uma chamada ajax
this.addEventListener('fetch', function(event) {

    // Interceptar a chama, mostrando os dados da request
    console.log(event.request);

    // Informar o retorno do fetch
    event.respondWith(
        // Compara-se o retorno e retorna o valor da response ou o fetch da própria request
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
