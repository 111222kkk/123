document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('healthyDietForm'); // 获取表单元素
    const resultDiv = document.getElementById('result'); // 获取结果显示区域

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        // 获取表单中的数据
        const name = document.getElementById('name').value; // 获取姓名
        const age = parseInt(document.getElementById('age').value); // 获取年龄
        const weight = parseFloat(document.getElementById('weight').value); // 获取体重
        const height = parseFloat(document.getElementById('height').value); // 获取身高

        // 计算BMI（体重指数）
        const heightInMeters = height / 100; // 将身高转换为米
        const bmi = weight / (heightInMeters * heightInMeters); // 计算BMI

        // 确定BMI分类
        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = '体重过轻';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = '正常体重';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = '超重';
        } else {
            bmiCategory = '肥胖';
        }

        // 在结果显示区域显示计算结果
        resultDiv.innerHTML = `
            <h3>结果</h3>
            <p>姓名: ${name}</p>
            <p>年龄: ${age}</p>
            <p>体重: ${weight} kg</p>
            <p>身高: ${height} cm</p>
            <p>BMI: ${bmi.toFixed(2)}</p>
            <p>分类: ${bmiCategory}</p>
        `;
    });
});