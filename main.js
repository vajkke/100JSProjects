// buttons
const gamesBtn = document.querySelector('.games');
const userInterfaceBtn = document.querySelector('.user-interface');
const appsBtn = document.querySelector('.apps');

// project categories
const allProjects = document.querySelectorAll('.project');
const gameProjects = document.querySelectorAll('.game');
const UIProjects = document.querySelectorAll('.ui');
const appsProjects = document.querySelectorAll('.app');

gamesBtn.addEventListener('click', function () {
  allProjects.forEach(project => {
    project.classList.add('hiddenProject');
  });
  gameProjects.forEach(game => {
    game.classList.remove('hiddenProject');
  });
});

userInterfaceBtn.addEventListener('click', function () {
  allProjects.forEach(project => {
    project.classList.add('hiddenProject');
  });
  UIProjects.forEach(ui => {
    ui.classList.remove('hiddenProject');
  });
});

appsBtn.addEventListener('click', function () {
  allProjects.forEach(project => {
    project.classList.add('hiddenProject');
  });
  appsProjects.forEach(app => {
    app.classList.remove('hiddenProject');
  });
});
