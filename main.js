document.addEventListener('DOMContentLoaded', () => {
    // Kirish formasi elementlari
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('input');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-btn');
    const togglePassword = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('errorMessage');

    // Default login va parolni o'rnatish
    function setDefaultCredentials() {
        const defaultCredentials = {
            username: 'suxrob',
            password: '123'
        };

        // Agar `credentials` mavjud bo'lmasa, default ma'lumotlarni saqlaymiz
        if (!localStorage.getItem('credentials')) {
            localStorage.setItem('credentials', JSON.stringify(defaultCredentials));
            console.log('Default login va parol localStorage ga saqlandi.');
        }
    }

    setDefaultCredentials();

    // Maydonlarni to'ldirilganligini tekshirish
    function checkFields() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        submitButton.disabled = !(username && password);
    }

    // `input` va `password` maydonlarini tekshirish
    usernameInput.addEventListener('input', checkFields);
    passwordInput.addEventListener('input', checkFields);

    // Parolni ko'rsatish/yashirish
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = '👁';
        }
    });

    // Formani topshirish
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
    
        // localStorage dan credentials obyektini olish
        const storedCredentials = JSON.parse(localStorage.getItem('credentials'));

        if (storedCredentials && username === storedCredentials.username && password === storedCredentials.password) {
            window.location.href = 'nextpage.html'; // Agar login va parol to'g'ri bo'lsa
        } else {
            alert('Siz notugri login yoki parol kiritdingiz \n yoki SKANER qilmadingiz');
            errorMessage.textContent = 'Login yoki parol noto\'g\'ri!';
            errorMessage.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const qrCodeLink = document.getElementById('qr-code-link');
    const qrCodeModal = document.getElementById('qr-code-modal');
    const closeModal = document.getElementById('close-modal');

    qrCodeLink.addEventListener('click', () => {
        alert(`Ilitmos QR kodni skaner qiling`)
        qrCodeModal.style.display = 'block'; // Modalni ko'rsatish
    });

    closeModal.addEventListener('click', () => {
        alert(`Siz QR kodni yopayabsiz`)
        qrCodeModal.style.display = 'none'; // Modalni yashirish
    });

    // Modal oynani tashqarisiga bosganda yopish
    window.addEventListener('click', (event) => {
        if (event.target === qrCodeModal) {
            qrCodeModal.style.display = 'none';
        }
    });
});
