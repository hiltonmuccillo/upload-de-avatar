// Upload do Avatar - Javascript
(function(){        
    var uploadInput = document.querySelector('#upload-input');
    var perfilAvatar = document.querySelector('#avatar');

    // Quando o input de upload de arquivo mudar
    uploadInput.addEventListener('change', function () {
        if (uploadInput.files && uploadInput.files[0]) {
            var file = uploadInput.files[0];

            // Verifica se o tamanho do arquivo é menor ou igual a 1 MB
            if (file.size <= 1024 * 1024) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    // Atualiza a imagem de perfil com a nova imagem
                    perfilAvatar.querySelector('img').src = e.target.result;
                };

                reader.readAsDataURL(file);
            } else {
                // Exibe uma mensagem de alerta dentro do modal
                var alertModalBody = document.getElementById('alertModalBody');
                alertModalBody.innerHTML = '<h5>O tamanho do arquivo deve ser no máximo 1 MB.</h5>';
                
                var avatarModal = new bootstrap.Modal(document.getElementById('avatarModal'));
                avatarModal.show();

                // Limpa o valor do input para evitar o carregamento do arquivo grande
                uploadInput.value = '';
            }
        }
    });

    // Quando a imagem de perfil for clicada
    perfilAvatar.addEventListener('click', function () {
        // Ativa o clique no input de upload de arquivo
        uploadInput.click();
    });   
})();