// ============================================================
// data.js — All reviewer content lives here.
//
// To add subjects/exams, follow the same shape as below.
//
// notes and reviewer fields are raw HTML strings.
// For hidden answers, use native <details><summary>Show Answer</summary>...</details>
// No extra JS is needed for that pattern.
//
// To permanently change an exam's status for ALL visitors:
//   1. Edit the `status` field here ("upcoming" → "done").
//   2. Redeploy the site.
// The "Mark as Done" admin button only persists changes on
// the current browser/device via localStorage.
// ============================================================

const SUBJECTS = [
  {
    id: "rizal",
    name: "RIZAL",
    exams: [
      {
        id: "rizal-quiz1",
        title: "Quiz 1 (Life of Rizal)",
        type: "Quiz",
        date: "2026-09-05",
        status: "upcoming",
        notes: `<p>Placeholder notes for RIZAL Quiz 1. Add your notes here — bullet points, key dates, important names, etc.</p>
<ul>
  <li>Jose Rizal was born on June 19, 1861, in Calamba, Laguna.</li>
  <li>He was the 7th of 11 children of Francisco Mercado and Teodora Alonso.</li>
  <li>His full name: José Protasio Rizal Mercado y Alonso Realonda.</li>
</ul>`,
        reviewer: `<h3>RIZAL Quiz 1 — Reviewer</h3>
<p>Answer the following questions. Click "Show Answer" to reveal each answer.</p>

<details>
  <summary>1. Where and when was Jose Rizal born?</summary>
  <p><strong>Answer:</strong> Jose Rizal was born on <strong>June 19, 1861</strong> in <strong>Calamba, Laguna</strong>, Philippines.</p>
</details>

<details>
  <summary>2. What is Rizal's full name?</summary>
  <p><strong>Answer:</strong> José Protasio Rizal Mercado y Alonso Realonda.</p>
</details>

<details>
  <summary>3. Who were Rizal's parents?</summary>
  <p><strong>Answer:</strong> His father was <strong>Francisco Mercado Rizal</strong> and his mother was <strong>Teodora Alonso Realonda</strong>.</p>
</details>

<details>
  <summary>4. Rizal was the __ of 11 children.</summary>
  <p><strong>Answer:</strong> 7th child.</p>
</details>`
      },
      {
        id: "rizal-midterms",
        title: "Midterms",
        type: "Midterms",
        date: "2026-10-20",
        status: "upcoming",
        notes: "<p>Placeholder notes for RIZAL Midterms. Add your notes here.</p>",
        reviewer: `<h3>RIZAL Midterms — Reviewer</h3>
<p>Placeholder reviewer content. Add questions and answers below.</p>
<details>
  <summary>Sample Question</summary>
  <p><strong>Answer:</strong> Sample answer goes here.</p>
</details>`
      }
    ]
  },
  {
    id: "appdev",
    name: "APP DEV",
    exams: [
      {
        id: "appdev-quiz1",
        title: "Quiz 1 (Software Engineering)",
        type: "Quiz",
        date: "2026-09-10",
        status: "upcoming",
        notes: `<p>Placeholder notes for APP DEV Quiz 1. Cover Software Engineering fundamentals here.</p>
<ul>
  <li>Software Engineering: disciplined approach to software development.</li>
  <li>SDLC phases: Planning → Analysis → Design → Implementation → Testing → Deployment → Maintenance.</li>
  <li>Agile vs Waterfall methodologies.</li>
</ul>`,
        reviewer: `<h3>APP DEV Quiz 1 — Reviewer</h3>
<p>Review the Software Engineering fundamentals below.</p>

<details>
  <summary>1. What is Software Engineering?</summary>
  <p><strong>Answer:</strong> Software Engineering is the disciplined application of engineering principles to the design, development, testing, and maintenance of software systems.</p>
</details>

<details>
  <summary>2. List the phases of the SDLC.</summary>
  <p><strong>Answer:</strong> Planning, Requirements Analysis, System Design, Implementation (Coding), Testing, Deployment, and Maintenance.</p>
</details>

<details>
  <summary>3. What is the difference between Agile and Waterfall?</summary>
  <p><strong>Answer:</strong> <strong>Waterfall</strong> is linear and sequential — each phase must finish before the next begins. <strong>Agile</strong> is iterative and incremental — work is done in short sprints with continuous feedback.</p>
</details>`
      },
      {
        id: "appdev-quiz2",
        title: "Quiz 2 (OOP Concepts)",
        type: "Quiz",
        date: "2026-09-25",
        status: "upcoming",
        notes: `<p>Placeholder notes for APP DEV Quiz 2. Cover OOP concepts.</p>
<ul>
  <li>Four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism.</li>
  <li>Class vs Object distinction.</li>
  <li>Access modifiers: public, private, protected.</li>
</ul>`,
        reviewer: `<h3>APP DEV Quiz 2 — Reviewer</h3>

<details>
  <summary>1. What are the four pillars of OOP?</summary>
  <p><strong>Answer:</strong> Encapsulation, Abstraction, Inheritance, and Polymorphism.</p>
</details>

<details>
  <summary>2. What is Encapsulation?</summary>
  <p><strong>Answer:</strong> Encapsulation is the bundling of data (attributes) and the methods that operate on that data within a single unit (class), and restricting access to some components.</p>
</details>

<details>
  <summary>3. What is Inheritance?</summary>
  <p><strong>Answer:</strong> Inheritance is a mechanism where a child class acquires the properties and behaviors of a parent class, promoting code reuse.</p>
</details>`
      },
      {
        id: "appdev-midterms",
        title: "Midterms",
        type: "Midterms",
        date: "2026-10-15",
        status: "upcoming",
        notes: "<p>Placeholder notes for APP DEV Midterms. Add your notes here.</p>",
        reviewer: `<h3>APP DEV Midterms — Reviewer</h3>
<p>Placeholder reviewer content. Add questions and answers below.</p>
<details>
  <summary>Sample Question</summary>
  <p><strong>Answer:</strong> Sample answer goes here.</p>
</details>`
      },
      {
        id: "appdev-finals",
        title: "Finals",
        type: "Finals",
        date: "2026-12-01",
        status: "upcoming",
        notes: "<p>Placeholder notes for APP DEV Finals. Add your notes here.</p>",
        reviewer: `<h3>APP DEV Finals — Reviewer</h3>
<p>Placeholder reviewer content. Add questions and answers below.</p>
<details>
  <summary>Sample Question</summary>
  <p><strong>Answer:</strong> Sample answer goes here.</p>
</details>`
      }
    ]
  },
  {
    id: "comsci",
    name: "COM SCI",
    exams: [
      {
        id: "comsci-quiz1",
        title: "Quiz 1 (Data Structures)",
        type: "Quiz",
        date: "2026-09-08",
        status: "upcoming",
        notes: `<p>Placeholder notes for COM SCI Quiz 1. Cover basic Data Structures.</p>
<ul>
  <li>Arrays, Linked Lists, Stacks, Queues.</li>
  <li>Time complexity: O(1), O(n), O(log n), O(n²).</li>
  <li>Big-O notation basics.</li>
</ul>`,
        reviewer: `<h3>COM SCI Quiz 1 — Reviewer</h3>

<details>
  <summary>1. What is a Stack and what is its access policy?</summary>
  <p><strong>Answer:</strong> A Stack is a linear data structure that follows <strong>LIFO</strong> (Last In, First Out). The last element inserted is the first one to be removed. Operations: push (insert) and pop (remove).</p>
</details>

<details>
  <summary>2. What is a Queue and what is its access policy?</summary>
  <p><strong>Answer:</strong> A Queue is a linear data structure that follows <strong>FIFO</strong> (First In, First Out). Elements are added at the rear (enqueue) and removed from the front (dequeue).</p>
</details>

<details>
  <summary>3. What is the time complexity of accessing an element in an array by index?</summary>
  <p><strong>Answer:</strong> O(1) — constant time, because arrays allow direct index-based access.</p>
</details>`
      },
      {
        id: "comsci-midterms",
        title: "Midterms",
        type: "Midterms",
        date: "2026-10-18",
        status: "upcoming",
        notes: "<p>Placeholder notes for COM SCI Midterms.</p>",
        reviewer: `<h3>COM SCI Midterms — Reviewer</h3>
<details>
  <summary>Sample Question</summary>
  <p><strong>Answer:</strong> Sample answer goes here.</p>
</details>`
      }
    ]
  }
];
