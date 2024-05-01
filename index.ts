import { renderToString } from "react-dom/server"; // функция преобразует React-элемент в строку, которую можно вставить в HTML
import { rectangleElement } from './Rectangle';

const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Собачка в прямоугольнике</title>
</head>
<body>
  ${renderToString(rectangleElement)}
</body>
</html>`

Bun.serve({ // Bun.serve создаёт сервер, который отдаёт HTML-страницу
  port: 8080,
  async fetch() { // колбэк fetch, который возвращает ответ Response со страницей
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      }
    });
  },
});
