const routes = {
    "/": () => import("./pages/main_page/main_page.jsx"),
    "/profile": () => import("./pages/profile_page/profile.jsx"),
  };
  
  // Инициализация роутера
  const initRouter = async () => {
    const root = document.getElementById("root");
    const path = window.location.pathname;
  
    // Загружаем соответствующий модуль
    const renderPage = routes[path];
    if (renderPage) {
      const module = await renderPage();
      if (module.default) {
        root.innerHTML = ""; // Очищаем содержимое
        module.default(); // Вызываем экспортированный рендеринг
      }
    } else {
      root.innerHTML = "<h1>404 - Page Not Found</h1>";
    }
  };
  
  // Перехватываем изменения в адресной строке
  window.onpopstate = () => initRouter();
  
  // Обработка кликов по ссылкам
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && e.target.dataset.link !== undefined) {
      e.preventDefault();
      window.history.pushState(null, "", e.target.href);
      initRouter();
    }
  });
  
  // Запуск роутера при загрузке
  initRouter();
  