# Reviewer Para Tanan

An easy-to-use study companion for **3rd Year, 1st Semester (G1)**. It brings subject reviewers, exam schedules, practice quizzes, and recall exercises into one focused website.

## What’s inside

- Subject-based reviewer browser for **App Development**, **Rizal**, and **Data Analytics**
- Upcoming and completed exam overview
- Lesson notes with clear navigation
- Multiple-choice and enumeration practice quizzes
- Automatic score feedback and answer review
- Three visual themes plus light and dark modes
- Responsive layout for desktop and mobile
- Optional client-side admin mode for updating exam status

## Getting started

This is a dependency-free static site. No installation or build step is needed.

1. Open [`index.html`](index.html) in a modern browser.
2. Choose an exam from the home page, or select **Browse all subjects**.
3. Study the notes and take the practice quizzes.

For the best local-development experience, serve this folder with any static-file server, then open the site in your browser.

## Project structure

```text
├── index.html        # Page structure and app views
├── css/
│   ├── style.css     # Core responsive styling
│   └── themes.css    # Theme and colour-mode variables
├── js/
│   ├── data.js       # Subjects, lessons, exams, and quiz content
│   └── app.js        # Rendering, navigation, quizzes, and preferences
└── assets/
    └── gcash-qr.jpg  # Donation QR image
```

## Customizing content

Most content lives in [`js/data.js`](js/data.js). Update the `SUBJECTS` data there to add or edit subjects, exam dates, study notes, and quiz questions.

The site remembers the selected visual theme, colour mode, and any status changes made in admin mode in the browser’s local storage. The included admin check is deliberately client-side and is not suitable for protecting sensitive actions or data.

## Built with

HTML, CSS, and vanilla JavaScript.

---

Made for G1 students. Study hard! 📚
