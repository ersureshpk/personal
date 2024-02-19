function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.getElementsByClassName('content-section');

    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    section.style.display = 'block';
}

