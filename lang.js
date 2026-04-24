document.addEventListener('DOMContentLoaded', () => {
    // 從瀏覽器本地儲存讀取使用者的偏好，預設為英文
    const savedLang = localStorage.getItem('prefLang') || 'en';
    
    // 將儲存的語言設定套用到 body 上
    document.body.className = `lang-${savedLang}`;

    // 綁定切換按鈕事件
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isEn = document.body.classList.contains('lang-en');
            // 切換 CSS class
            document.body.classList.remove(isEn ? 'lang-en' : 'lang-zh');
            const newLang = isEn ? 'zh' : 'en';
            document.body.classList.add(`lang-${newLang}`);
            
            // 將新選擇存入 localStorage
            localStorage.setItem('prefLang', newLang);
        });
    }
});
