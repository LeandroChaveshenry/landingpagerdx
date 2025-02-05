function formatPhone(input) {
    // Remove caracteres não numéricos
    let value = input.value.replace(/\D/g, '');

    // Verifica se o valor tem mais de 10 dígitos e aplica a formatação
    if (value.length > 10) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/(\d+)/, '($1');
    }

    input.value = value; // Atualiza o valor do campo
}

function validateEmail(email) {
    // Regex para validar o formato do e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    let errorMessage = '';

    // Verifica se nenhum campo foi preenchido
    if (nome === '' && email === '' && telefone === '') {
        errorMessage = 'É necessário preencher os dados.';
    } else {
        // Verifica campos individuais
        if (nome === '') {
            errorMessage += 'Por favor, preencha seu nome completo.\n';
        }

        if (email === '') {
            errorMessage += 'Por favor, preencha seu e-mail.\n';
        } else if (!validateEmail(email)) {
            errorMessage += 'Por favor, insira um e-mail válido.\n';
        }

        if (telefone === '') {
            errorMessage += 'Por favor, preencha seu telefone.\n';
        }
    }

    if (errorMessage) {
        alert(errorMessage); // Exibe todas as mensagens de erro
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário
}
