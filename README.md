# Strona dla przychodni

Aplikacja webowa dla przychodni medycznej, stworzona z użyciem Reacta i Bootstrapa. Umożliwia pacjentom szybki dostęp do podstawowych usług oraz informacji.

## 🖥️ Pogląd


## 🔧 Technologie

- React
- React Router DOM
- Bootstrap 5

## ✨ Funkcje

- Strona główna z sekcjami:
    - **Baner/slider**
    - **Szybki dostęp do usług** (kafelki)
    - **Aktualności** z paginacją
- Nawigacja z dropdownem (Usługi, Aktualności, O nas, Kontakt)
- Stopka z danymi kontaktowymi, menu oraz linkami

## 📁 Struktura projektu

```
/src
├── Assets/              # Zdjęcia i obrazy
├── Components/          # Komponenty wspólne (Tile, SingleNews, Slider, AboutUs)
├── Styles/              # Pliki CSS
├── Categories.jsx       # Sekcja kafelków z usługami
├── Header.jsx           # Pasek nawigacyjny
├── Footer.jsx           # Stopka
├── Banner.jsx           # Baner + komponent AboutUs
├── News.jsx             # Sekcja aktualności z paginacją
```

## 🚀 Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja uruchomi się na `http://localhost:5173` (lub innym porcie podanym przez Vite).

## 📌 Uwagi

- Wszystkie dane są statyczne i służą jako demo.

## 📸 Podgląd aplikacji

Dodam potem...
