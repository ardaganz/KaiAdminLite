// Sidebar
    fetch('settings/sidebar.html')
        .then(response => response.text())
        .then(data => document.getElementById('sidebarArda').innerHTML = data)
        .catch(error => console.error('Error loading sidebar:', error));
        
// Navbar
    fetch('settings/navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbarArda').innerHTML = data)
        .catch(error => console.error('Error loading navbar:', error));

// Dashboard 
    fetch('settings/dashboardArda.html')
    .then(response => response.text())
    .then(data => {
        // Muat konten HTML ke elemen
        document.getElementById('codeArda').innerHTML = data;

        // Eksekusi semua script yang ada di dalam konten yang dimuat
        const scripts = document.getElementById('codeArda').querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent; // Salin isi script
            document.body.appendChild(newScript); // Tambahkan ke body agar dieksekusi
        });
    })
    .catch(error => console.error('Error loading dashboardArda.html:', error));

