function showSection(id) {
  let sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function showAbout(id, element) {
  let contents = document.querySelectorAll('.about-content');
  let tabs = document.querySelectorAll('.sidebar li');

  contents.forEach(c => c.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  element.classList.add('active');
}