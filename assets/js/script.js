function showArea(area) {
    const areas = document.querySelectorAll('.subject');
    areas.forEach(content => {
        content.classList.add('hidden');
    });

    document.getElementById(area).classList.remove('hidden');
}
