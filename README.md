## VK-mini-app (тестовое задание)

---

### Описание

Простой VK-mini-app, выводящий данные о пользователе ВК и список его друзей с фотографиями.

### Установка и начало работы

Скачать и установить приложение:

```bash
git clone https://github.com/apl-by/vk-mini-app-test.git
```

```bash
npm install
```

Зарегистрировать mini-app через страницу VK [Мои приложения](https://vk.com/away.php?to=https://vk.com/apps?act=manage):

- Укажите название приложения
- Выберите платформу — Встраиваемое приложение
- Выберите тип — VK Mini Apps

После создания приложения перейдите в **Настройки**, и на панелях **"Версия для мобильных клиентов"**, **"Версия для vk.com"**, **"Версия для m.vk.com"** включить **Режим разработки** и ввеcти url для разработки:

```bash
https://localhost:10888
```

После чего произвести запуск сервера:

```bash
npm start
```

и открыть приложение из вкладки VK **Мои приложения**
