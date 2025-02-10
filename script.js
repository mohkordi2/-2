// إضافة الحدث لفتح وإغلاق القائمة عند الضغط على زر الـ Menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    // تبديل الكلاس show بين إظهار وإخفاء القائمة
    document.querySelector('nav ul').classList.toggle('show');
});





// إغلاق الرسالة الترحيبية عند النقر على الزر
document.getElementById('close-welcome').addEventListener('click', function () {
    document.getElementById('welcome-message').style.display = 'none';
});



function openModal(title, details) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-details").innerText = details;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}