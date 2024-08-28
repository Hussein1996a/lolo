document.getElementById('startButton').addEventListener('click', function() {
    // تغيير لون الخلفية بالكامل إلى الأصفر
    document.body.classList.add('page-yellow');
    
    // إزالة محتويات الصفحة القديمة
    document.querySelector('.game-container').style.display = 'none';
    
    // دالة لتوليد حرف عشوائي
    function getRandomLetter() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letters[Math.floor(Math.random() * letters.length)];
    }
    
    // حفظ الأحرف العشوائية في مصفوفة
    const randomLetters = [];
    
    // إنشاء الكرات الثلاثة وإضافتها إلى الصفحة
    for (let i = 0; i < 3; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball';
        
        // تعيين حرف عشوائي للكرة
        const randomLetter = getRandomLetter();
        ball.textContent = randomLetter;
        randomLetters.push(randomLetter);

        // إضافة الكرة إلى الصفحة
        document.body.appendChild(ball);
        
        // إزالة الحرف بعد 3 ثوانٍ
        setTimeout(function() {
            ball.textContent = '';
        }, 3000);
    }
    
    // عرض حقل الإدخال بعد 3 ثوانٍ
    setTimeout(function() {
        document.getElementById('inputContainer').style.display = 'block';
    }, 3000);
    
    // التحقق من الحرف المدخل عند النقر على زر "Check"
    document.getElementById('checkButton').addEventListener('click', function() {
        const userInput = document.getElementById('userInput').value.toUpperCase();
        const resultMessage = document.getElementById('resultMessage');
        
        if (randomLetters.includes(userInput)) {
            resultMessage.textContent = 'true';
            resultMessage.className = 'true-message';
        } else {
            resultMessage.textContent = 'game over';
            resultMessage.className = 'false-message';
            
            // إعادة توجيه المستخدم إلى صفحة "Start Game" بعد 2 ثانية
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
    });
});
