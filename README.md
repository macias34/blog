//S TODO : W api thumbnails stwórz widok dla pojedynczego thumbnaila






📦backend
 ┃
 ┣ 📂Controllers //D Kontrolery
 ┃
 ┃  
 ┣ 📂Helpers //D Narzędzia pomocnicze
 ┃ ┃ 
 ┃ ┗ 📜tools.js //F Obliczanie
 ┃ 
 ┃ 
 ┣ 📂prisma
 ┃ ┃ 
 ┃ ┗ 📜schema.prisma //F Schemat bazy danych
 ┃ 
 ┃ 
 ┣ 📂Routes //D Routy do api
 ┃ ┃ 
 ┃ ┣ 📜categories.js //F Kategorie
 ┃ ┃ 
 ┃ ┣ 📜imgs.js //F Zdjęcia
 ┃ ┃ 
 ┃ ┗ 📜posts.js //F Posty
 ┃ 
 ┃ 
 ┗ 📜app.js //F Główna aplikacja


 📦frontend
 ┃ 
 ┣ 📂lib //D Folder na reusable komponenty
 ┃ ┃ 
 ┃ ┣ 📂Admin //D Admin panel UI
 ┃ ┃ ┃ 
 ┃ ┃ ┣ 📂Categories //S Kategorie w Adminie
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜CategoriesAdd.svelte //C Przycisk "+" do wyświetlania forma CategoriesForm
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜CategoriesEdit.svelte //C Form do edycji kategorii
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜CategoriesForm.svelte // C Form do dodania kategorii
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜CategoriesGrid.svelte //C Wyświetla wszystkie kategorie oraz wyświetla CategoriesEdit
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜CategoriesPanel.svelte //C Wyświetla CategoriesAdd i CategoriesGrid, fetchuje kategorie z /routes/categories.svelte 
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜CategoriesPosts.svelte //C Wyświetla posty w których jest ta kategoria
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┗ 📜CategorySingle.svelte //C Wyświetla pojedyńczą kategorię
 ┃ ┃ ┃
 ┃ ┃ ┃
 ┃ ┃ ┣ 📂Posts //S Posty w Adminie
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜PostAdd.svelte //C Przycisk "+" do dodawania postów, pokazuje form PostForm
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜PostEdit.svelte //C Form do edycji postu, ma w sobie Editor i ThumbnailInput 
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜PostForm.svelte //C Form do dodania postu, ma w sobie Editor i ThumbnailInput
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜PostsGrid.svelte //C Wyświetla wszystkie posty, ma w sobie PostEdit
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📜PostSingle.svelte //C Wyświetla pojedyńczy post
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┗ 📜PostsPanel.svelte //C Wyświetla PostAdd i PostsGrid, fetchuje posty z /routes/posts
 ┃ ┃ ┃
 ┃ ┃ ┃ 
 ┃ ┃ ┗ 📂UI //S UI do Admina
 ┃ ┃   ┃
 ┃ ┃   ┣ 📜AdminNav.svelte //C Sidebar w Adminie
 ┃ ┃   ┃ 
 ┃ ┃   ┗ 📜Editor.svelte //C WYSIWYG Edytor
 ┃ ┃ 
 ┃ ┃
 ┃ ┣ 📂Helpers //D Pomocnicze narzędzia
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜AdminTools.js //F Ogólne narzędzia Adminowe ~ shadeColor, generateExcerpt, getBase64 
 ┃ ┃ ┃ 
 ┃ ┃ ┣ 📜formValidation.js //F Walidacja formów
 ┃ ┃ ┃ 
 ┃ ┃ ┗ 📜Requests.js //f Requesty do komponentów
 ┃ ┃
 ┃ ┃
 ┃ ┣ 📂Post //D Posty na stronie głównej
 ┃ ┃ ┃ 
 ┃ ┃ ┣ 📜PostCategories.svelte //C Wyświetla kategorie, które ma post
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜PostGrid.svelte //C Wyświetla wszystkie posty na stronie głównej
 ┃ ┃ ┃
 ┃ ┃ ┗ 📜PostSingle.svelte //C Wyświetla pojedyńczy Post
 ┃ ┃
 ┃ ┃
 ┃ ┣ 📂PostPage //D Strona postu
 ┃ ┃ ┃ 
 ┃ ┃ ┣ 📜Description.svelte //C Opis postu
 ┃ ┃ ┃
 ┃ ┃ ┗ 📜Header.svelte //C Header postu
 ┃ ┃  
 ┃ ┃
 ┃ ┣ 📂UI //D Reusable elementy do lib
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜Button.svelte //C Przycisk, różne rodzaje
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜Header.svelte //C Header na stronę główną
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜Input.svelte //C Inputy, różne rodzaje
 ┃ ┃ ┃
 ┃ ┃ ┗ 📜Popup.svelte //C Popup, można customować
 ┃
 ┃
 ┣ 📂routes //D Routy dla strony
 ┃ ┃
 ┃ ┃
 ┃ ┣ 📂admin //D Routy dla Admina
 ┃ ┃ ┃
 ┃ ┃ ┃
 ┃ ┃ ┣ 📂categories //S Route Kategorii w Adminie
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┗ 📜index@admin.svelte //C Index dla kategorii w Adminie, tam fetchują się kategorię
 ┃ ┃ ┃
 ┃ ┃ ┃
 ┃ ┃ ┣ 📂posts //S Route Postów w Adminie
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┗ 📜index@admin.svelte //C Index dla postów w Adminie, tam fetchują się posty do admin panela
 ┃ ┃ ┃
 ┃ ┃ ┃
 ┃ ┃ ┗ 📜index@admin.svelte //C Index dla Admin panela
 ┃ ┃
 ┃ ┣  📜index.svelte //C Index dla strony głównej, tam fetchują się wszystkie posty
 ┃ ┃
 ┃ ┣  📜[slug].svelte //C Szablon dla pojedyńczego postu, tam fetchują się pojedyńcze posty po ID
 ┃ ┃
 ┃ ┣  📜__layout-admin.svelte //C Layout w adminie
 ┃ ┃
 ┃ ┣  📜__layout.svelte //C Layout dla reszty stron
 ┃ ┃
 ┃ ┃
 ┗ 📂scss
   ┃
   ┣ 📜quill.scss //F WYSYWIG Edytor SCSS
   ┃
   ┣ 📜_media_queries.scss //F MEDIA QUERIES SCSS
   ┃
   ┗ 📜_variables.scss //F Zmienne SCSS