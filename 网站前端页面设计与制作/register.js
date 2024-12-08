document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单数据
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 表单验证
        if (password !== confirmPassword) {
            displayMessage('两次输入的密码不匹配。', 'error');
            return;
        }

        // 模拟异步请求（例如，发送数据到服务器）
        setTimeout(function() {
            // 假设服务器验证成功
            displayMessage('注册成功！', 'success');
            // 清空表单
            form.reset();
        }, 1500); // 1.5秒后显示消息
    });

    function displayMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type; // 'success' 或 'error'
    }
});

// 添加输入字段的即时验证
document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.validity.valid) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
});