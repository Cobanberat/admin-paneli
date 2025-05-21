    document.querySelectorAll('.cb-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.cb-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
