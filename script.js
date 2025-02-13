document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    alert('Дякуємо за реєстрацію, ' + name + '! Ми зв’яжемося з вами за номером ' + phone);
});
