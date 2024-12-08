document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 清除之前的消息
        messageDiv.textContent = '';
        messageDiv.className = '';

        // 获取表单数据
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 表单验证
        if (!username || !password) {
            messageDiv.textContent = '用户名和密码不能为空。';
            messageDiv.className = 'error';
            return;
        }

        // 模拟异步登录验证
        setTimeout(function() {
            if (username == password) {
                messageDiv.textContent = '登录成功！';
                messageDiv.className = 'success';
                // 重定向到首页或其他页面
                window.location.href = 'index.html'; // 实际应用中，这应该是服务器验证成功后的操作
            } else {
                messageDiv.textContent = '用户名或密码错误。';
                messageDiv.className = 'error';
            }
        }, 1500); // 1.5秒后显示消息
    });
});