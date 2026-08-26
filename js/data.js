// ============================================================
// data.js: All reviewer content lives here.
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
    id: "appdev",
    name: "APP DEV",
    exams: [
      {
        id: "appdev-quiz1",
        title: "Quiz 1 - Software Development",
        type: "Quiz",
        date: "2026-08-24",
        status: "done",
        notes: `<section class="notes-section">
<h2>Software Development (TOPCIT)</h2>

<h3>I. Software Engineering Overview</h3>

<div class="five-vs-grid">
  <div class="v-card">
    <div class="v-letter">SDLC</div>
    <h5>Lifecycle</h5>
    <p>Planning → Analysis → Design → Implementation → Support.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">SMART</div>
    <h5>Project Scope</h5>
    <p>Specific, Measurable, Attainable, Realistic, Time-bounded.</p>
  </div>
</div>

<h4>Software Engineering Defined</h4>
<blockquote>"The process of solving customers' problems by the systematic development and evolution of large, high-quality software systems within cost, time and other constraints."</blockquote>

<h4>Stakeholders</h4>
<div class="decision-tiers">
  <div class="tier-card">
    <h5>Users & Customers</h5>
    <p>Those who use and those who pay for the software.</p>
  </div>
  <div class="tier-card">
    <h5>Developers</h5>
    <p>Those who build the software.</p>
  </div>
  <div class="tier-card">
    <h5>Managers</h5>
    <p>Those who oversee the development.</p>
  </div>
</div>

<hr>

<h3>II. Software Quality Dimensions</h3>
<div class="quality-dims-grid">
  <div class="quality-dim-card">
    <div class="dim-number">1</div>
    <div class="dim-body">
      <h5>Usability</h5>
      <p>Users can learn it fast and get their job done easily.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">2</div>
    <div class="dim-body">
      <h5>Efficiency</h5>
      <p>Doesn't waste resources such as CPU time and memory.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">3</div>
    <div class="dim-body">
      <h5>Reliability</h5>
      <p>Does what it is required to do without failing.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">4</div>
    <div class="dim-body">
      <h5>Maintainability</h5>
      <p>Can be easily changed.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">5</div>
    <div class="dim-body">
      <h5>Reusability</h5>
      <p>Parts can be used in other projects.</p>
    </div>
  </div>
</div>

<hr>

<h3>III. Development Lifecycle Models</h3>
<div class="evolution-timeline">

<div class="timeline-era">
<h4>V Model</h4>
<ul>
  <li>Clearly shows activities and tests (Requirements ↔ Acceptance, Design ↔ System).</li>
  <li>Start/end of activities are clearly defined.</li>
  <li>Emphasizes verification and validation.</li>
</ul>
</div>

<div class="timeline-era">
<h4>Prototyping</h4>
<ul>
  <li>Develops a part of a system to resolve risks/uncertainties.</li>
  <li>Creates common understanding with customers.</li>
</ul>
</div>

<div class="timeline-era">
<h4>Incremental & Evolutionary</h4>
<ul>
  <li><strong>Incremental</strong>: System extended in phases; each version adds new functions.</li>
  <li><strong>Evolutionary</strong>: Reiterates the entire development phase several times; each version provides all functions.</li>
</ul>
</div>
</div>

<hr>

<h3>IV. Agile Development (XP & Scrum)</h3>

<h4>eXtreme Programming (XP)</h4>
<p>Lightweight method suitable for small/medium teams. Values: <strong>Communication, Simplicity, Feedback, Courage, Respect</strong>.</p>
<ul>
  <li><strong>User Stories</strong>: Collects requirements and acts as a communication tool.</li>
  <li><strong>Spike</strong>: Simple program to resolve technical uncertainties.</li>
  <li><strong>Pair Programming</strong>: Two developers work at one computer.</li>
  <li><strong>Test-driven Development (TDD)</strong>: Write tests before code.</li>
</ul>

<h4>Scrum <span class="hierarchy-tag tag-middle">Framework</span></h4>
<div class="decision-tiers">
  <div class="tier-card">
    <h5>Sprint</h5>
    <p>The repetitive development period (1-4 weeks).</p>
  </div>
  <div class="tier-card">
    <h5>3 Meetings</h5>
    <p>Daily Scrum, Sprint Planning, Sprint Review.</p>
  </div>
  <div class="tier-card">
    <h5>3 Deliverables</h5>
    <p>Product Backlog, Sprint Backlog, Burndown Chart.</p>
  </div>
</div>

<hr>

<h3>V. Reverse Engineering</h3>
<p>Deconstructing a developed system to reveal its documents and design. Aimed at understanding and modifying a system during the maintenance phase.</p>

<div class="five-vs-grid">
  <div class="v-card">
    <div class="v-letter">L</div>
    <h5>Logic Reverse Engineering</h5>
    <p>Information extracted from source code to obtain physical design.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">D</div>
    <h5>Data Reverse Engineering</h5>
    <p>Modifying or migrating an existing database to a new DBMS.</p>
  </div>
</div>

</section>
`,
        reviewer: {
          mcq: [
            {
              question: "1. What is the correct order of the SDLC phases as presented?",
              options: [
                "A. Design, Planning, Analysis, Implementation, Support",
                "B. Planning, Analysis, Design, Implementation, Support",
                "C. Analysis, Planning, Design, Support, Implementation",
                "D. Planning, Design, Analysis, Implementation, Support"
              ],
              correctIndex: 1
            },
            {
              question: "2. Which methodology includes \"Revolutionary\" and \"Throw-away\" as its two types?",
              options: [
                "A. Waterfall",
                "B. Spiral",
                "C. Prototyping",
                "D. Agile"
              ],
              correctIndex: 2
            },
            {
              question: "3. In the SMART criteria for project scope, what does \"A\" stand for?",
              options: [
                "A. Accurate",
                "B. Attainable",
                "C. Achievable Only",
                "D. Adaptive"
              ],
              correctIndex: 1
            },
            {
              question: "4. Aside from Scope, what are the two other major project constraints listed in the slides?",
              options: [
                "A. Quality and Risk",
                "B. Cost and Time",
                "C. Team and Tools",
                "D. Design and Testing"
              ],
              correctIndex: 1
            },
            {
              question: "5. How is Software Engineering defined in terms of its goal regarding customers?",
              options: [
                "A. Building the most technically advanced system possible",
                "B. Solving customers' problems within cost, time, and other constraints",
                "C. Maximizing the number of features in a system",
                "D. Replacing programmers with automated tools"
              ],
              correctIndex: 1
            },
            {
              question: "6. Which statement about solving customers' problems is TRUE per the slides?",
              options: [
                "A. Adding unnecessary features always helps solve the problem",
                "B. The solution is always to build, never to buy",
                "C. Sometimes the solution is to buy, not build",
                "D. Communication with customers is optional"
              ],
              correctIndex: 2
            },
            {
              question: "7. Who are the four stakeholders in Software Engineering?",
              options: [
                "A. Users, Testers, Managers, Vendors",
                "B. Users, Customers, Software developers, Development Managers",
                "C. Clients, Coders, QA, Sales",
                "D. Analysts, Designers, Testers, Support staff"
              ],
              correctIndex: 1
            },
            {
              question: "8. Can all four stakeholder roles be fulfilled by the same person?",
              options: [
                "A. No, they must always be different individuals",
                "B. Yes, all four roles can be fulfilled by the same person",
                "C. Only Users and Customers can overlap",
                "D. Only in small projects, according to the slides"
              ],
              correctIndex: 1
            },
            {
              question: "9. Which software quality attribute means a system does not waste resources such as CPU time and memory?",
              options: [
                "A. Usability",
                "B. Efficiency",
                "C. Reliability",
                "D. Maintainability"
              ],
              correctIndex: 1
            },
            {
              question: "10. Which software quality attribute means a system does what it is required to do without failing?",
              options: [
                "A. Reliability",
                "B. Reusability",
                "C. Usability",
                "D. Maintainability"
              ],
              correctIndex: 0
            },
            {
              question: "11. \"Its parts can be used in other projects, so reprogramming is not needed\" describes which quality attribute?",
              options: [
                "A. Maintainability",
                "B. Efficiency",
                "C. Reusability",
                "D. Usability"
              ],
              correctIndex: 2
            },
            {
              question: "12. What are the three key elements needed for a successful software project (per the diagram)?",
              options: [
                "A. Process, People, Technology",
                "B. Planning, Design, Testing",
                "C. Cost, Time, Scope",
                "D. Method, Tool, Procedure"
              ],
              correctIndex: 0
            },
            {
              question: "13. Which is the more detailed second definition of Software Engineering given in the slides?",
              options: [
                "A. A tool for writing code faster",
                "B. A discipline that studies the overall life cycle of software systematically, descriptively, and quantitatively",
                "C. A branch of mathematics for algorithm design",
                "D. A management framework for hiring developers"
              ],
              correctIndex: 1
            },
            {
              question: "14. Which of the four key elements of software engineering is \"an automated or semi-automated method used to improve productivity or consistency when performing a task\"?",
              options: [
                "A. Method",
                "B. Tool",
                "C. Procedure",
                "D. People"
              ],
              correctIndex: 1
            },
            {
              question: "15. Which key element \"combines a method and a tool so they can be used to develop software in a rational and timely fashion\"?",
              options: [
                "A. Procedure",
                "B. Tool",
                "C. People",
                "D. Method"
              ],
              correctIndex: 0
            },
            {
              question: "16. What is the correct general sequence of the software life cycle as defined in the slides?",
              options: [
                "A. Design → Requirements analysis → Feasibility review → Implementation → Test → Development planning → Operation → Maintenance",
                "B. Feasibility review → Development planning → Requirements analysis → Design → Implementation → Test → Operation → Maintenance",
                "C. Requirements analysis → Design → Feasibility review → Test → Implementation → Maintenance → Operation",
                "D. Development planning → Feasibility review → Design → Requirements analysis → Test → Implementation → Operation → Maintenance"
              ],
              correctIndex: 1
            },
            {
              question: "17. Which of the following is NOT listed as one of the most representative software lifecycle models?",
              options: [
                "A. Waterfall model",
                "B. Prototype model",
                "C. Agile Scrum model",
                "D. Incremental model"
              ],
              correctIndex: 2
            },
            {
              question: "18. Which lifecycle model clearly shows the activities to be performed to project managers and developers, and emphasizes verification and validation?",
              options: [
                "A. Incremental model",
                "B. V model",
                "C. Evolutionary model",
                "D. Spiral model"
              ],
              correctIndex: 1
            },
            {
              question: "19. In the V model, which testing activity pairs with \"Requirement Analysis\"?",
              options: [
                "A. Unit Testing",
                "B. Integration Testing",
                "C. Acceptance Testing",
                "D. System Testing"
              ],
              correctIndex: 2
            },
            {
              question: "20. What is the main purpose of prototyping when applied within the V model or Waterfall model?",
              options: [
                "A. To finalize the coding standard",
                "B. To help developers and customers commonly understand what is needed and what should be developed",
                "C. To replace the testing phase",
                "D. To reduce documentation requirements"
              ],
              correctIndex: 1
            },
            {
              question: "21. In the Incremental model, what characterizes the final system version?",
              options: [
                "A. It only contains the last added feature",
                "B. It is a complete system into which all functions are incorporated",
                "C. It discards all previous versions",
                "D. It is identical to the first version"
              ],
              correctIndex: 1
            },
            {
              question: "22. How does the Evolutionary model differ from the Incremental model?",
              options: [
                "A. It does not use lifecycles at all",
                "B. The development phase for the entire system is reiterated several times, with each version providing all functions",
                "C. It never produces a complete system",
                "D. It is only used for hardware projects"
              ],
              correctIndex: 1
            },
            {
              question: "23. Which of the following is NOT one of the stated reasons a software development methodology is necessary?",
              options: [
                "A. Improving development productivity by reusing experience",
                "B. Effective project management",
                "C. Guaranteeing zero-cost development",
                "D. Assuring quality through phase verification and approval"
              ],
              correctIndex: 2
            },
            {
              question: "24. Which methodology focuses on business activities and uses abstraction, structuralization, stepwise refinement, and modularization?",
              options: [
                "A. Structural methodology",
                "B. Information engineering methodology",
                "C. Object-oriented methodology",
                "D. CBD methodology"
              ],
              correctIndex: 0
            },
            {
              question: "25. Which methodology focuses on data and emphasizes an enterprise integrated data model?",
              options: [
                "A. CBD methodology",
                "B. Object-oriented methodology",
                "C. Information engineering methodology",
                "D. Structural methodology"
              ],
              correctIndex: 2
            },
            {
              question: "26. Which methodology treats a program unit as an object, integrates data and logic, and allows reuse by inheritance?",
              options: [
                "A. Structural methodology",
                "B. Object-oriented methodology",
                "C. Information engineering methodology",
                "D. CBD methodology"
              ],
              correctIndex: 1
            },
            {
              question: "27. Which methodology emphasizes interface and aims to reuse \"black box\" commercial components?",
              options: [
                "A. CBD methodology",
                "B. Structural methodology",
                "C. Information engineering methodology",
                "D. Object-oriented methodology"
              ],
              correctIndex: 0
            },
            {
              question: "28. During which software development phase is deciding \"exactly what to develop\" described as the hardest task?",
              options: [
                "A. Design",
                "B. Requirements analysis",
                "C. Implementation",
                "D. Testing"
              ],
              correctIndex: 1
            },
            {
              question: "29. Which phase is described as \"the first step in physical realization\" of a system?",
              options: [
                "A. Requirements analysis",
                "B. Design",
                "C. Implementation",
                "D. Testing"
              ],
              correctIndex: 1
            },
            {
              question: "30. What is described as the final step in assuring software quality?",
              options: [
                "A. Design",
                "B. Requirements analysis",
                "C. Testing",
                "D. Implementation"
              ],
              correctIndex: 2
            },
            {
              question: "31. Which SDLC model represents development and testing activities as two corresponding sides of a \"V\"?",
              options: [
                "A. Incremental Model",
                "B. Evolutionary Model",
                "C. V Model",
                "D. Prototype Model"
              ],
              correctIndex: 2
            },
            {
              question: "32. In the V Model, Requirement Analysis is paired with which testing activity?",
              options: [
                "A. Unit Testing",
                "B. Integration Testing",
                "C. System Testing",
                "D. Acceptance Testing"
              ],
              correctIndex: 3
            },
            {
              question: "33. Which SDLC model develops a system by adding functions through several versions until the final version is complete?",
              options: [
                "A. V Model",
                "B. Incremental Model",
                "C. Evolutionary Model",
                "D. Waterfall Model"
              ],
              correctIndex: 1
            },
            {
              question: "34. What distinguishes the Evolutionary Model from the Incremental Model?",
              options: [
                "A. It does not involve testing",
                "B. Each version provides only one function",
                "C. The development phase for the entire system is repeated several times",
                "D. It requires a prototype before coding"
              ],
              correctIndex: 2
            },
            {
              question: "35. What is the main purpose of prototyping?",
              options: [
                "A. To eliminate software testing",
                "B. To understand the system and resolve risks or uncertainties",
                "C. To replace requirements analysis",
                "D. To produce the final system immediately"
              ],
              correctIndex: 1
            },
            {
              question: "36. Who are associated with the development of Scrum?",
              options: [
                "A. Kent Beck and Erich Gamma",
                "B. Ken Schwaber and Jeff Sutherland",
                "C. Mary and Tom Poppendieck",
                "D. Scott Ambler and Kent Beck"
              ],
              correctIndex: 1
            },
            {
              question: "37. Which Agile methodology was established by Kent Beck and other engineers in the late 1990s?",
              options: [
                "A. Scrum",
                "B. Lean Software Development",
                "C. Extreme Programming (XP)",
                "D. Agile Unified Process"
              ],
              correctIndex: 2
            },
            {
              question: "38. In XP, what is a brief description of the functions or requirements needed by the customer?",
              options: [
                "A. Spike",
                "B. User Story",
                "C. Sprint Backlog",
                "D. Burndown Chart"
              ],
              correctIndex: 1
            },
            {
              question: "39. What is the primary purpose of a Spike in XP?",
              options: [
                "A. To release the final product",
                "B. To estimate salaries of developers",
                "C. To investigate difficult requirements or potential technical solutions",
                "D. To replace acceptance testing"
              ],
              correctIndex: 2
            },
            {
              question: "40. Which XP practice involves writing tests before writing the actual code?",
              options: [
                "A. Refactoring",
                "B. Pair Programming",
                "C. Test-Driven Development",
                "D. Continuous Integration"
              ],
              correctIndex: 2
            },
            {
              question: "41. Which XP practice removes duplication and unnecessary complexity from existing code?",
              options: [
                "A. Refactoring",
                "B. Simple Design",
                "C. Planning Game",
                "D. Metaphor"
              ],
              correctIndex: 0
            },
            {
              question: "42. Which of the following is NOT one of XP's five values?",
              options: [
                "A. Communication",
                "B. Simplicity",
                "C. Feedback",
                "D. Transparency"
              ],
              correctIndex: 3
            },
            {
              question: "43. Which XP value emphasizes accepting and responding to changes in requirements and technology?",
              options: [
                "A. Respect",
                "B. Courage",
                "C. Simplicity",
                "D. Communication"
              ],
              correctIndex: 1
            },
            {
              question: "44. What is the XP practice where two developers work together at one computer?",
              options: [
                "A. Collective Code Ownership",
                "B. Pair Programming",
                "C. Continuous Integration",
                "D. On-Site Customer"
              ],
              correctIndex: 1
            },
            {
              question: "45. Which XP practice means that all developers share responsibility for the source code?",
              options: [
                "A. Collective Code Ownership",
                "B. Coding Standard",
                "C. Simple Design",
                "D. Planning Game"
              ],
              correctIndex: 0
            },
            {
              question: "46. In Scrum, what is the repetitive development period that typically lasts 1 to 4 weeks?",
              options: [
                "A. Cycle",
                "B. Sprint",
                "C. Release",
                "D. Iteration Review"
              ],
              correctIndex: 1
            },
            {
              question: "47. Which Scrum deliverable contains the prioritized list of work to be done for the product?",
              options: [
                "A. Sprint Backlog",
                "B. Burndown Chart",
                "C. Product Backlog",
                "D. User Story"
              ],
              correctIndex: 2
            },
            {
              question: "48. Which Scrum meeting is normally limited to 15 minutes and focuses on project progress?",
              options: [
                "A. Sprint Review",
                "B. Sprint Planning",
                "C. Daily Scrum",
                "D. Release Planning"
              ],
              correctIndex: 2
            },
            {
              question: "49. Which Scrum artifact shows the amount of work remaining during a sprint?",
              options: [
                "A. Product Backlog",
                "B. Sprint Backlog",
                "C. Burndown Chart",
                "D. User Story"
              ],
              correctIndex: 2
            },
            {
              question: "50. What is the primary purpose of software reuse?",
              options: [
                "A. To avoid using existing software components",
                "B. To increase development productivity by using existing software or software knowledge",
                "C. To eliminate the need for software testing",
                "D. To ensure every system is developed from scratch"
              ],
              correctIndex: 1
            }
          ],
          ident: [
            {
              question: "This 15-minute daily meeting is where all team members discuss what they did, what they will do, and any issues.",
              answer: "Daily Scrum",
              accept: ["daily scrum", "daily scrum meeting", "scrum"]
            },
            {
              question: "This agile methodology was established by Kent Beck and other engineers in the late 1990s and is generally suitable for small and medium-sized development organizations.",
              answer: "XP (eXtreme Programming)",
              accept: ["xp", "extreme programming", "xp (extreme programming)", "eXtreme Programming"]
            },
            {
              question: "This Scrum deliverable is a breakdown of work to be done, with priority mainly determined by the product manager on behalf of the customer.",
              answer: "Product backlog",
              accept: ["product backlog", "backlog"]
            },
            {
              question: "This Scrum deliverable shows the remaining work in the sprint backlog, tracked per iteration as a story point.",
              answer: "Burndown chart",
              accept: ["burndown chart", "burn down chart", "burndown"]
            },
            {
              question: "In XP, this is a simple program written to explore difficult requirements or potential solutions, aiming to increase the reliability of user stories while reducing technical risk.",
              answer: "Spike",
              accept: ["spike", "structural spike"]
            },
            {
              question: "This field of software engineering deconstructs a developed system to reveal its documents and design techniques, and is performed during the maintenance phase.",
              answer: "Reverse engineering",
              accept: ["reverse engineering"]
            },
            {
              question: "This term refers to developing new software using existing software or software knowledge in order to increase development productivity.",
              answer: "Software reuse",
              accept: ["software reuse", "reuse"]
            },
            {
              question: "This XP value states \"Always ask, what is the simplest thing possible?\" and keeps the design clear by removing unnecessary complexity.",
              answer: "Simplicity",
              accept: ["simplicity"]
            },
            {
              question: "This term refers to the repetitive development period in Scrum, measured in units of 1 to 4 weeks.",
              answer: "Sprint",
              accept: ["sprint", "sprints"]
            },
            {
              question: "These are the typical outputs of reverse engineering, including structure diagrams, data flow charts, control flow graphs, and entity relationship diagrams.",
              answer: "Output of reverse engineering",
              accept: ["output of reverse engineering", "design/structural documentation", "design documentation", "structural documentation", "structure diagrams", "design documents"]
            }
          ]
        }
      }
    ]
  },
  {
    id: "rizal",
    name: "RIZAL",
    exams: [
      {
        id: "rizal-quiz1",
        title: "Quiz 1 - Tribute to Jose Rizal",
        type: "Quiz",
        date: "2026-08-24",
        status: "done",
        notes: `<section class="notes-section">
<h2>A Tribute to Our National Hero, Dr. Jose P. Rizal</h2>

<h3>The Life of Rizal</h3>
<div class="evolution-timeline">

<div class="timeline-era">
<h4>Childhood <span class="era-badge">1861–1869</span></h4>
<ul>
  <li>Born in <strong>Calamba, Laguna</strong> on <strong>June 19, 1861</strong> to Francisco Mercado Rizal and Teodora Alonso y Quintos.</li>
  <li>Baptized as <strong>Jose Rizal Mercado</strong>.</li>
  <li>Learned the alphabet from his mother at age 3.</li>
  <li>Wrote his first poem, <strong>"Sa Aking Mga Kabata,"</strong> at age 8.</li>
  <li>Influenced by Uncles Manuel (physical strength/outdoors) and Gregorio (love of learning).</li>
</ul>
</div>

<div class="timeline-era">
<h4>First School (Biñan) <span class="era-badge">1869–1870</span></h4>
<ul>
  <li>Studied under Maestro <strong>Justiniano Aquino Cruz</strong>.</li>
  <li>Defeated the bully Pedro but lost an arm-wrestling match to Andres Salandanan.</li>
  <li>Studied drawing and painting under Juancho.</li>
  <li>Outperformed all students in Spanish, Latin, and other subjects.</li>
</ul>
</div>

<div class="timeline-era">
<h4>Education <span class="era-badge">1877–1885</span></h4>
<ul>
  <li>Bachelor of Arts from <strong>Ateneo Municipal de Manila</strong> (1877) with an average of "excellent."</li>
  <li>Enrolled in Philosophy, Letters, and Medicine at <strong>University of Santo Tomas</strong>.</li>
  <li>Traveled to Spain to study at <strong>Central Universidad de Madrid</strong> (1882).</li>
  <li>Conferred Licentiate in Medicine (1884) and completed Philosophy and Letters (1885).</li>
</ul>
</div>

<div class="timeline-era">
<h4>Secret Mission & Works <span class="era-badge">1887–1892</span></h4>
<ul>
  <li>Mission: publish nationalistic and reformist writing in Europe to educate Filipinos and push for social reform.</li>
  <li>Published <strong>Noli Me Tangere</strong> (1887, Berlin) and <strong>El Filibusterismo</strong> (1891, Ghent).</li>
  <li>Mastered 22 languages.</li>
  <li>Imprisoned in Fort Santiago (1892).</li>
</ul>
</div>

<div class="timeline-era">
<h4>Exile in Dapitan <span class="era-badge">1892–1896</span></h4>
<ul>
  <li>Ran a hospital, built homes, and taught students.</li>
  <li>Collected biological specimens and corresponded with scientists abroad.</li>
  <li>Built a water dam and a relief map of Mindanao.</li>
</ul>
</div>

<div class="timeline-era">
<h4>Martyrdom <span class="era-badge">1896</span></h4>
<ul>
  <li>Defended by Don Luis Taviel de Andrade in a mock court-martial.</li>
  <li>Wrote his untitled farewell poem, <strong>"Mi Ultimo Adios."</strong></li>
  <li>Executed by firing squad at Bagumbayan Field on <strong>December 30, 1896</strong> at age 35.</li>
</ul>
</div>

</div>

<hr>
<h3>Attributes of Rizal</h3>
<div class="five-vs-grid">
  <div class="v-card">
    <div class="v-letter">A</div>
    <h5>Arts & Letters</h5>
    <p>Poet, Novelist, Journalist, Sculptor, Painter, Linguist.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">S</div>
    <h5>Sciences</h5>
    <p>Ophthalmic Surgeon, Scientist, Ethnologist, Sociologist, Psychologist.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">P</div>
    <h5>Professions</h5>
    <p>Educator, Architect, Engineer, Farmer, Businessman, Economist.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">N</div>
    <h5>Nationalism</h5>
    <p>Propagandist, Reformist, Martyr, Hero, Mythologist.</p>
  </div>
</div>
</section>
`,
        reviewer: [
          {
            question: "1. Where was Jose Rizal born?",
            options: ["A) Manila", "B) Calamba, Laguna", "C) Dapitan", "D) Biñan"],
            correctIndex: 1
          },
          {
            question: "2. On what date was Rizal born?",
            options: ["A) June 19, 1861", "B) June 22, 1861", "C) December 30, 1861", "D) September 28, 1861"],
            correctIndex: 0
          },
          {
            question: "3. Who were Rizal's parents?",
            options: ["A) Paciano and Saturnina", "B) Francisco Mercado Rizal and Teodora Alonso y Quintos", "C) Leon Monroy and Concepcion", "D) Gregorio and Manuel Alberto"],
            correctIndex: 1
          },
          {
            question: "4. What was Rizal's birth order among his siblings?",
            options: ["A) First child", "B) Fourth child", "C) Seventh child", "D) Youngest child"],
            correctIndex: 2
          },
          {
            question: "5. Who baptized Rizal, and what name was recorded?",
            options: ["A) Rev. Pedro Casañas baptized him as Jose Mercado", "B) Rev. Rufino Collantes baptized him as Jose Rizal Mercado", "C) Rev. Rufino Collantes baptized him as Jose Protacio", "D) Rev. Pedro Casañas baptized him as Jose Alonso"],
            correctIndex: 1
          },
          {
            question: "6. What happened to Rizal's baptismal records in 1862?",
            options: ["A) They were lost during a flood", "B) They were burned when the Calamba parochial church caught fire", "C) They were destroyed during the revolution", "D) They were never recorded"],
            correctIndex: 1
          },
          {
            question: "7. Who was Rizal's first teacher?",
            options: ["A) Leon Monroy", "B) His mother, Teodora Alonso", "C) His father, Francisco", "D) Uncle Gregorio"],
            correctIndex: 1
          },
          {
            question: "8. Who taught Rizal the rudiments of Latin, and for how long?",
            options: ["A) Leon Monroy, for five months", "B) Juancho, for one year", "C) Justiniano Aquino Cruz, for five months", "D) Uncle Manuel, for five months"],
            correctIndex: 0
          },
          {
            question: "9. Which sibling's death caused Rizal to cry real tears for the first time?",
            options: ["A) Saturnina", "B) Paciano", "C) Concepcion", "D) Josefa"],
            correctIndex: 2
          },
          {
            question: "10. What did Uncle Manuel Alberto contribute to Rizal's upbringing?",
            options: ["A) Love of education", "B) Building his physical strength and love for nature", "C) Skill in drawing", "D) Skill in Latin"],
            correctIndex: 1
          },
          {
            question: "11. What did Uncle Gregorio instill in young Rizal?",
            options: ["A) Love for open air", "B) Love for wrestling", "C) Love for education", "D) Love for the sea"],
            correctIndex: 2
          },
          {
            question: "12. What was the title and theme of Rizal's first poem, written at age eight?",
            options: ["A) \"Mi Ultimo Adios\" - farewell to country", "B) \"Sa Aking Mga Kabata\" - love of one's language", "C) \"Noli Me Tangere\" - social reform", "D) \"El Filibusterismo\" - revolution"],
            correctIndex: 1
          },
          {
            question: "13. Who brought Rizal to his first school in Biñan?",
            options: ["A) His father Francisco", "B) His brother Paciano", "C) His uncle Manuel", "D) Maestro Justiniano"],
            correctIndex: 1
          },
          {
            question: "14. Who was the schoolmaster in Biñan?",
            options: ["A) Juancho", "B) Justiniano Aquino Cruz", "C) Leon Monroy", "D) Pedro Casañas"],
            correctIndex: 1
          },
          {
            question: "15. What skill helped Rizal defeat the bully Pedro in Biñan?",
            options: ["A) Boxing", "B) Wrestling learned from Tio Manuel", "C) Fencing", "D) Running"],
            correctIndex: 1
          },
          {
            question: "16. Who defeated Rizal in an arm-wrestling match in Biñan?",
            options: ["A) Jose Guevarra", "B) Andres Salandanan", "C) Pedro", "D) Justiniano Cruz"],
            correctIndex: 1
          },
          {
            question: "17. Under whom did Rizal study drawing and painting in Biñan?",
            options: ["A) Juancho", "B) Jose Guevarra", "C) Justiniano Cruz", "D) Leon Monroy"],
            correctIndex: 0
          },
          {
            question: "18. Why did Rizal leave Biñan on December 17, 1870?",
            options: ["A) He finished his studies", "B) He received a letter from his sister Saturnina", "C) His father called him home", "D) The school closed"],
            correctIndex: 1
          },
          {
            question: "19. Who were executed on February 17, 1872, an event that deeply affected the Rizal family?",
            options: ["A) Rizal's uncles", "B) Fathers Gomez, Burgos, and Zamora (Gomburza)", "C) Leon Monroy and Juancho", "D) Governor General Izquierdo's officers"],
            correctIndex: 1
          },
          {
            question: "20. From which school did Rizal earn his Bachelor of Arts in 1877?",
            options: ["A) University of Santo Tomas", "B) Ateneo Municipal de Manila", "C) Universidad de Madrid", "D) Colegio de San Juan de Letran"],
            correctIndex: 1
          },
          {
            question: "21. What did Rizal study at UST while also taking surveying courses at Ateneo in 1877?",
            options: ["A) Medicine", "B) Philosophy and Letters", "C) Law", "D) Theology"],
            correctIndex: 1
          },
          {
            question: "22. When was Rizal's surveyor license finally granted, and why was it delayed?",
            options: ["A) Immediately after passing the exam in 1878", "B) December 30, 1881, because he was underage at the time he passed the exam", "C) 1885, after finishing his studies in Spain", "D) It was never granted"],
            correctIndex: 1
          },
          {
            question: "23. Why did Rizal not attain high scholastic honors in medicine at UST?",
            options: ["A) He was often absent", "B) Hostile professors toward Filipino students", "C) He preferred surveying", "D) He transferred schools too often"],
            correctIndex: 1
          },
          {
            question: "24. When did Rizal sail for Spain, and what university did he enter?",
            options: ["A) May 3, 1882, Central Universidad de Madrid", "B) June 19, 1885, University of Barcelona", "C) 1878, University of Santo Tomas", "D) 1877, Ateneo Municipal"],
            correctIndex: 0
          },
          {
            question: "25. When was Rizal conferred his Licentiate in Medicine, and at what age?",
            options: ["A) June 19, 1885, age 24", "B) June 21, 1884, age 23", "C) May 3, 1882, age 21", "D) December 30, 1881, age 20"],
            correctIndex: 1
          },
          {
            question: "26. How many languages did Rizal reportedly master?",
            options: ["A) 12", "B) 15", "C) 22", "D) 30"],
            correctIndex: 2
          },
          {
            question: "27. What was the purpose of Rizal's \"secret mission\" in Europe?",
            options: ["A) To study medicine exclusively", "B) To publish nationalistic and reformist works to educate countrymen and demand social reforms", "C) To recruit soldiers for the revolution", "D) To negotiate directly with the Spanish crown"],
            correctIndex: 1
          },
          {
            question: "28. Where and when was Noli Me Tangere published?",
            options: ["A) Ghent, September 1891", "B) Berlin, March 1887", "C) Paris, 1890", "D) Madrid, 1882"],
            correctIndex: 1
          },
          {
            question: "29. Whose work did Rizal annotate and reprint in Paris in 1890 to showcase pre-colonial Filipino civilization?",
            options: ["A) Antonio de Morga's Sucesos de las Islas Filipinas", "B) Andres Bonifacio's writings", "C) Gomburza's letters", "D) Francisco Mercado's diaries"],
            correctIndex: 0
          },
          {
            question: "30. Where and when was El Filibusterismo printed?",
            options: ["A) Berlin, March 1887", "B) Ghent, September 18, 1891", "C) Madrid, June 1885", "D) Manila, 1892"],
            correctIndex: 1
          },
          {
            question: "31. Why was Rizal first detained in Fort Santiago in July 1892?",
            options: ["A) For writing El Filibusterismo", "B) Anti-friar leaflets found in his sister Lucia's luggage from Hong Kong", "C) For organizing the Katipunan", "D) For leaving Dapitan without permission"],
            correctIndex: 1
          },
          {
            question: "32. What activities did Rizal pursue in Dapitan after winning a lottery and buying land?",
            options: ["A) Farming, fishing, and business", "B) Law practice", "C) Painting and sculpture only", "D) Politics"],
            correctIndex: 0
          },
          {
            question: "33. What scientific/engineering projects did Rizal complete with his students in Dapitan?",
            options: ["A) A lighthouse and a bridge", "B) A water dam and a relief map of Mindanao", "C) A church and a school building only", "D) A railway line"],
            correctIndex: 1
          },
          {
            question: "34. What poem did Rizal write in Fort Santiago before his execution?",
            options: ["A) Sa Aking Mga Kabata", "B) Mi Ultimo Adios (untitled farewell poem)", "C) A dedication to Noli Me Tangere", "D) A letter to Governor Polavieja"],
            correctIndex: 1
          },
          {
            question: "35. On what date and at what age was Rizal executed, and where?",
            options: ["A) December 30, 1896, age 35, at Bagumbayan Field (Luneta)", "B) December 28, 1896, age 34, at Fort Santiago", "C) November 3, 1896, age 35, at Dapitan", "D) February 17, 1896, age 35, at Calamba"],
            correctIndex: 0
          },
          {
            question: "36. Rizal is remembered as a versatile genius recognized in many fields. Which of the following best reflects that range?",
            options: ["A) Only a novelist and poet", "B) Architect, artist, scientist, inventor, and ophthalmic surgeon, among many other roles", "C) Only a doctor and linguist", "D) Only a farmer and businessman"],
            correctIndex: 1
          },
          {
            question: "37. Besides farming, fishing, and business, what medical service did Rizal provide in Dapitan?",
            options: ["A) He ran a hospital", "B) He trained army medics", "C) He built a pharmacy chain", "D) He performed surgery only in Manila"],
            correctIndex: 0
          },
          {
            question: "38. What subjects did Rizal teach his students in Dapitan?",
            options: ["A) Only Latin and Spanish", "B) Languages, arts, sciences, vocational skills, and self-defense", "C) Only surveying", "D) Only medicine"],
            correctIndex: 1
          },
          {
            question: "39. What scientific activity did Rizal engage in during his exile in Dapitan besides teaching and engineering projects?",
            options: ["A) He collected biological specimens and corresponded with international scientists", "B) He conducted chemical weapons research", "C) He wrote medical textbooks for UST", "D) He ran a printing press"],
            correctIndex: 0
          },
          {
            question: "40. What ship brought Rizal back to Manila on November 3, 1896?",
            options: ["A) The Talim", "B) The Colon", "C) The San Pablo", "D) The Don Juan"],
            correctIndex: 1
          },
          {
            question: "41. What major event had broken out shortly before Rizal's return to Manila in 1896?",
            options: ["A) The Cavite Mutiny", "B) The Philippine Revolution (August 26, 1896)", "C) The Spanish-American War", "D) The Gomburza execution"],
            correctIndex: 1
          },
          {
            question: "42. Who served as Rizal's defense counsel during his mock court-martial?",
            options: ["A) Don Luis Taviel de Andrade", "B) Andres Bonifacio", "C) Camilo de Polavieja", "D) Antonio de Morga"],
            correctIndex: 0
          },
          {
            question: "43. What charges was Rizal tried for in his mock court-martial?",
            options: ["A) Treason and espionage", "B) Rebellion, sedition, and illegal association", "C) Heresy and blasphemy", "D) Smuggling and tax evasion"],
            correctIndex: 1
          },
          {
            question: "44. Who approved Rizal's death sentence, and when?",
            options: ["A) Governor General Izquierdo, February 1872", "B) Governor General Camilo de Polavieja, December 28, 1896", "C) Governor General Polavieja, November 3, 1896", "D) King Alfonso XIII, January 1897"],
            correctIndex: 1
          },
          {
            question: "45. When did Rizal complete his studies in Philosophy and Letters with \"excellent\" marks, and at what age?",
            options: ["A) June 21, 1884, age 23", "B) June 19, 1885, age 24", "C) May 3, 1882, age 21", "D) December 30, 1881, age 20"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "dataanalytics",
    name: "DATA ANALYTICS",
    exams: [
      {
        id: "dataanalytics-quiz1",
        title: "Quiz 1 - Lesson 1 and 2",
        type: "Quiz",
        date: "2026-08-27",
        status: "upcoming",
        notesLessons: [
          {
            tab: "Lesson 1",
            content: `<section class="notes-section">
<h2>Lesson 1: Introduction to Data Analytics</h2>

<h3>Data Analytics Overview</h3>

<div class="decision-tiers">
  <div class="tier-card">
    <h5>Data Analytics</h5>
    <p>The broader end-to-end discipline that turns data into business decisions by uncovering patterns, trends, and actionable insights. Spans data collection, cleaning, transforming, and analyzing.</p>
  </div>
  <div class="tier-card">
    <h5>Data Analysis</h5>
    <p>Focuses on inspecting and interpreting data to answer specific questions.</p>
  </div>
</div>

<h4>Core Importance</h4>
<div class="quality-dims-grid">
  <div class="quality-dim-card">
    <div class="dim-number">1</div>
    <div class="dim-body">
      <h5>Evidence-based</h5>
      <p>Enables evidence-based decisions.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">2</div>
    <div class="dim-body">
      <h5>Efficiency</h5>
      <p>Boosts efficiency.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">3</div>
    <div class="dim-body">
      <h5>Risk Mitigation</h5>
      <p>Mitigates risks.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">4</div>
    <div class="dim-body">
      <h5>Advantage</h5>
      <p>Provides competitive advantages.</p>
    </div>
  </div>
  <div class="quality-dim-card">
    <div class="dim-number">5</div>
    <div class="dim-body">
      <h5>Forecasting</h5>
      <p>Forecasts future outcomes.</p>
    </div>
  </div>
</div>

<hr>

<h3>Data-Driven Career Hierarchy</h3>

<div class="decision-tiers">
  <div class="tier-card">
    <h5>Data Engineering <span class="hierarchy-tag tag-base">Base</span></h5>
    <p>Builds infrastructure, pipelines, and storage.</p>
    <p><strong>Concepts:</strong> EDW, ETL, EDL, ESB</p>
  </div>
  <div class="tier-card">
    <h5>Data Analytics <span class="hierarchy-tag tag-middle">Middle</span></h5>
    <p>Data cleaning, stewardship, visualization, BI tools, and reporting dashboards.</p>
  </div>
  <div class="tier-card">
    <h5>Data Science <span class="hierarchy-tag tag-top">Top</span></h5>
    <p>Advanced data training, experimentation, Machine Learning, and AI.</p>
  </div>
</div>

<hr>

<h3>Evolution of Data Analytics</h3>

<div class="evolution-timeline">

<div class="timeline-era">
<h4>Early Data Processing <span class="era-badge">1960s–1980s</span></h4>
<p><strong>Important concepts:</strong></p>
<ul>
<li>Mainframe computers</li>
<li>Batch processing</li>
<li>Punch cards</li>
<li>COBOL</li>
<li>Early hierarchical databases</li>
<li>Flat file databases</li>
<li>Basic reporting</li>
</ul>
</div>

<div class="timeline-era">
<h4>Relational Databases & BI <span class="era-badge">1980s–2000s</span></h4>
<p><strong>Important concepts:</strong></p>
<ul>
<li>RDBMS (Relational Database Management Systems)</li>
<li>SQL</li>
<li>Data Warehousing</li>
<li>Client-server architecture</li>
<li>Dashboards</li>
<li>Early Data Mining</li>
<li>OLAP (Online Analytical Processing)</li>
</ul>
</div>

<div class="timeline-era">
<h4>Big Data Era <span class="era-badge">2000s–2010s</span></h4>
<p><strong>Important concepts:</strong></p>
<ul>
<li>Hadoop</li>
<li>NoSQL databases</li>
<li>Cloud Computing (AWS, Azure)</li>
<li>MapReduce</li>
<li>Spark</li>
<li>Social media data analysis</li>
<li>IoT data streams</li>
</ul>
</div>

<div class="timeline-era">
<h4>AI & Advanced Analytics <span class="era-badge">2010s–Present</span></h4>
<p><strong>Important concepts:</strong></p>
<ul>
<li>Machine Learning</li>
<li>Deep Learning</li>
<li>Real-time analytics</li>
<li>Predictive analytics</li>
<li>Prescriptive analytics</li>
<li>Edge computing</li>
<li>Automated ML (AutoML)</li>
</ul>
</div>

</div>

<hr>

<h3>Lifecycle of Data Analytics</h3>

<div class="evolution-timeline">

<div class="step-item">
<div class="step-number">1</div>
<div class="step-body">
<h4>Business Problem Understanding</h4>
<p>Align analytics with organizational objectives.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">2</div>
<div class="step-body">
<h4>Data Collection</h4>
<p>Gather data from internal and external sources.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">3</div>
<div class="step-body">
<h4>Data Cleaning & Preparation</h4>
<p>Resolve:</p>
<ul>
<li>Missing values</li>
<li>Duplicate entries</li>
<li>Data inconsistencies</li>
</ul>
</div>
</div>

<div class="step-item">
<div class="step-number">4</div>
<div class="step-body">
<h4>Data Exploration (EDA)</h4>
<p>Identify distributions, correlations, and outliers using summary statistics and visual charts. This happens <strong>before</strong> formal modeling.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">5</div>
<div class="step-body">
<h4>Data Analysis & Modeling</h4>
<p>Build statistical models, regression models, and machine learning models.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">6</div>
<div class="step-body">
<h4>Interpretation & Visualization</h4>
<p>Translate model findings into dashboards, charts, and actionable insights.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">7</div>
<div class="step-body">
<h4>Decision-Making</h4>
<p>Implement data-driven actions across organizational tiers.</p>
<div class="decision-tiers">
<div class="tier-card">
<h5>Strategic</h5>
<p>High-level, long-term organizational goals (Executive management).</p>
</div>
<div class="tier-card">
<h5>Tactical</h5>
<p>Medium-term execution strategies (Mid-level management).</p>
</div>
<div class="tier-card">
<h5>Operational</h5>
<p>Day-to-day workflow optimizations (Operations managers).</p>
</div>
</div>
</div>
</div>

</div>

<hr>

<h3>Big Data & The 5 Vs</h3>

<h4>Big Data</h4>
<p>Datasets whose scale, speed, and complexity exceed the handling capacity of traditional relational databases.</p>

<div class="five-vs-grid">
<div class="v-card">
<div class="v-letter">V</div>
<h5>Volume</h5>
<p>Massive scale of generated data.</p>
</div>
<div class="v-card">
<div class="v-letter">V</div>
<h5>Velocity</h5>
<p>Rapid speed of incoming and streaming data.</p>
</div>
<div class="v-card">
<div class="v-letter">V</div>
<h5>Variety</h5>
<p>Heterogeneous formats: Structured, Semi-structured, Unstructured.</p>
</div>
<div class="v-card">
<div class="v-letter">V</div>
<h5>Veracity</h5>
<p>Trustworthiness, accuracy, and quality of data.</p>
</div>
<div class="v-card">
<div class="v-letter">V</div>
<h5>Value</h5>
<p>Meaningful business impact and actionable insights derived.</p>
</div>
</div>

<hr>

<h3>Core Business Applications</h3>
<div class="decision-tiers">
  <div class="tier-card"><h5>Customer segmentation</h5></div>
  <div class="tier-card"><h5>Demand forecasting</h5></div>
  <div class="tier-card"><h5>Automated fraud detection</h5></div>
  <div class="tier-card"><h5>Operational bottleneck reduction</h5></div>
  <div class="tier-card"><h5>Marketing ROI evaluation</h5></div>
  <div class="tier-card"><h5>New product development</h5></div>
</div>

</section>
`
          },
          {
            tab: "Lesson 2",
            content: `<section class="notes-section">
<h2>Lesson 2: Overview of Data</h2>

<h3>Foundations & Hierarchy</h3>
<div class="evolution-timeline">
  <div class="timeline-era">
    <h4>Data</h4>
    <p>Raw, unprocessed facts, numbers, symbols, or observations lacking inherent meaning on their own.</p>
  </div>
  <div class="timeline-era">
    <h4>Information</h4>
    <p>Data processed, cleaned, and organized into meaningful context.</p>
  </div>
  <div class="timeline-era">
    <h4>Knowledge</h4>
    <p>Actionable understanding and insights derived from interpreting information to guide decisions.</p>
  </div>
</div>

<div class="five-vs-grid">
  <div class="v-card">
    <div class="v-letter">Var</div>
    <h5>Variable</h5>
    <p>A measurable property taking different values across subjects.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">Obs</div>
    <h5>Observation</h5>
    <p>A single recorded unit or row across multiple variables.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">Var</div>
    <h5>Variation</h5>
    <p>Measurable differences observed across observations.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">RVar</div>
    <h5>Random Variable</h5>
    <p>A variable whose exact outcome contains uncertainty.</p>
  </div>
</div>

<hr>

<h3>Data Classifications</h3>

<div class="table-responsive">
<table class="data-table">
<thead>
<tr>
<th>Classification Type</th>
<th>Subcategory</th>
<th>Description</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3"><strong>By Structure</strong></td>
<td>Structured</td>
<td>Relational, strict rows and columns, easily queried via SQL</td>
<td>SQL tables, Excel sheets</td>
</tr>
<tr>
<td>Semi-Structured</td>
<td>Non-tabular, uses key-value pairs, tags, or hierarchies</td>
<td>JSON, XML, server logs</td>
</tr>
<tr>
<td>Unstructured</td>
<td>Free-form, lacks predefined schemas, requires NLP/Vision</td>
<td>Images, video, raw text, emails</td>
</tr>
<tr>
<td rowspan="2"><strong>By Nature</strong></td>
<td>Qualitative</td>
<td>Categorical descriptions, labels, and attributes</td>
<td>Feedback, colors, job titles</td>
</tr>
<tr>
<td>Quantitative</td>
<td>Measurable numerical values and counts</td>
<td>Age, revenue, temperature</td>
</tr>
<tr>
<td rowspan="2"><strong>By Source</strong></td>
<td>Primary</td>
<td>Collected firsthand for a direct research purpose</td>
<td>Surveys, interviews, IoT sensors</td>
</tr>
<tr>
<td>Secondary</td>
<td>Pre-existing data published by third parties</td>
<td>Repositories, industry reports</td>
</tr>
<tr>
<td><strong>By Origin</strong></td>
<td>Internal vs. External</td>
<td>Company transaction records vs. public web datasets</td>
<td>HR files vs. economic indexes</td>
</tr>
</tbody>
</table>
</div>

<hr>

<h3>Sampling & Sample Size Formulas</h3>

<h4>Population (N)</h4>
<p>The complete collection of all entities under study.</p>

<h4>Sample (n)</h4>
<p>A representative subset drawn from the population to make statistical inferences.</p>

<hr>

<h4>1. Slovin-Yamane Formula</h4>
<p>Used when population <strong>N</strong> is finite/known with unknown variance.</p>

<div class="formula-block">
<div class="formula">n = N / (1 + Ne²)</div>
</div>

<p>Where:</p>
<ul>
<li><strong>e</strong> = margin of error as a decimal</li>
</ul>

<h4>2. Cochran Formula</h4>
<p>Used for proportions in large or infinite populations.</p>

<div class="formula-block">
<div class="formula">n = (Z² · p · q) / e²</div>
</div>

<p>Where:</p>
<ul>
<li><strong>Z</strong> = critical score</li>
<li><strong>p</strong> = estimated proportion</li>
<li><strong>q = 1 − p</strong></li>
<li><strong>e</strong> = precision</li>
</ul>
<p>Default: <strong>p = 0.50</strong></p>

<h4>Common Z-scores</h4>
<div class="z-scores-grid">
<div class="z-score-item"><span class="z-conf">90%</span> <span class="z-arrow">→</span> <span class="z-val">1.645</span></div>
<div class="z-score-item"><span class="z-conf">95%</span> <span class="z-arrow">→</span> <span class="z-val">1.96</span></div>
<div class="z-score-item"><span class="z-conf">99%</span> <span class="z-arrow">→</span> <span class="z-val">2.576</span></div>
</div>

<hr>

<h3>4 Levels of Measurement</h3>

<div class="table-responsive">
<table class="data-table measurement-table">
<thead>
<tr>
<th>Level</th>
<th>Scale Type</th>
<th>Characteristics</th>
<th>Compatible Statistics</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Nominal</strong></td>
<td>Categorical</td>
<td>Named categories without inherent order</td>
<td>Mode, Chi-square</td>
<td>Gender, blood type, ID numbers</td>
</tr>
<tr>
<td><strong>Ordinal</strong></td>
<td>Categorical</td>
<td>Ranked order, but unequal or unknown distances</td>
<td>Median, Spearman correlation</td>
<td>Satisfaction ranks (Low/Med/High)</td>
</tr>
<tr>
<td><strong>Interval</strong></td>
<td>Metric</td>
<td>Equal intervals between values, <span class="highlight-concept highlight-no-zero">no true zero</span></td>
<td>Mean, Std Dev, t-test, ANOVA</td>
<td>Temperature in °C/°F, IQ score</td>
</tr>
<tr>
<td><strong>Ratio</strong></td>
<td>Metric</td>
<td>Equal intervals with an <span class="highlight-concept highlight-abs-zero">absolute, meaningful zero</span></td>
<td>All parametric tests, ratios</td>
<td>Income, age, distance, weight</td>
</tr>
</tbody>
</table>
</div>

<hr>

<h3>Data Quality & Data Preparation</h3>

<h4>6 Dimensions of Quality</h4>

<div class="quality-dims-grid">

<div class="quality-dim-card">
<div class="dim-number">1</div>
<div class="dim-body">
<h5>Consistency</h5>
<p>No contradictory values across databases.</p>
</div>
</div>

<div class="quality-dim-card">
<div class="dim-number">2</div>
<div class="dim-body">
<h5>Uniqueness</h5>
<p>Zero duplicate entries.</p>
</div>
</div>

<div class="quality-dim-card">
<div class="dim-number">3</div>
<div class="dim-body">
<h5>Timeliness</h5>
<p>Data is up-to-date and accessible.</p>
</div>
</div>

<div class="quality-dim-card">
<div class="dim-number">4</div>
<div class="dim-body">
<h5>Validity</h5>
<p>Complies with defined schemas, types, and constraints.</p>
</div>
</div>

<div class="quality-dim-card">
<div class="dim-number">5</div>
<div class="dim-body">
<h5>Accuracy</h5>
<p>Reflects real-world truth correctly.</p>
</div>
</div>

<div class="quality-dim-card">
<div class="dim-number">6</div>
<div class="dim-body">
<h5>Completeness</h5>
<p>No missing mandatory fields.</p>
</div>
</div>

</div>

<hr>

<h3>Data Preparation Techniques</h3>

<div class="decision-tiers">
  <div class="tier-card">
    <h5>Missing Value Imputation</h5>
    <p>Methods: <strong>Listwise Deletion</strong>, <strong>Statistical Imputation</strong> (Mean, Median, Mode), <strong>Predictive Modeling</strong>.</p>
  </div>
  <div class="tier-card">
    <h5>Deduplication</h5>
    <p>Removing identical or duplicate rows to avoid sample overrepresentation.</p>
  </div>
  <div class="tier-card">
    <h5>Outlier Handling</h5>
    <p>Managing extreme values using <strong>Z-score</strong>, <strong>IQR</strong>, or <strong>Boxplots</strong>.</p>
  </div>
  <div class="tier-card">
    <h5>Data Transformation</h5>
    <p>Converting data. Methods: <strong>Categorical Encoding</strong>, <strong>One-Hot Encoding</strong>, <strong>Label Encoding</strong>, <strong>Feature Engineering</strong>.</p>
  </div>
</div>

<h4>Scaling & Normalization</h4>
<div class="five-vs-grid">
  <div class="v-card">
    <div class="v-letter">MM</div>
    <h5>Min-Max Normalization</h5>
    <p>Rescales values into a fixed <strong>[0, 1]</strong> interval.</p>
  </div>
  <div class="v-card">
    <div class="v-letter">Z</div>
    <h5>Z-score Standardization</h5>
    <p>Transforms values to Mean μ = 0, Standard deviation σ = 1.</p>
  </div>
</div>

</section>
`
          }
        ],
        notes: null,
        reviewer: {
          mcq: [
            {
              question: "1. A company wants to know its total sales for each month during the previous year. Which type of analytics should it use?",
              options: [
                "A. Predictive Analytics",
                "B. Prescriptive Analytics",
                "C. Descriptive Analytics",
                "D. Diagnostic Analytics"
              ],
              correctIndex: 2
            },
            {
              question: "2. A retail company notices that website traffic suddenly decreased and wants to determine the reason. Which type of analytics is most appropriate?",
              options: [
                "A. Descriptive",
                "B. Diagnostic",
                "C. Predictive",
                "D. Prescriptive"
              ],
              correctIndex: 1
            },
            {
              question: "3. A bank uses historical transaction data to estimate which customers are most likely to default on loans next year. What type of analytics is this?",
              options: [
                "A. Descriptive",
                "B. Diagnostic",
                "C. Predictive",
                "D. Prescriptive"
              ],
              correctIndex: 2
            },
            {
              question: "4. A company uses an optimization algorithm to determine how its advertising budget should be distributed among different platforms. What type of analytics is being used?",
              options: [
                "A. Descriptive",
                "B. Diagnostic",
                "C. Predictive",
                "D. Prescriptive"
              ],
              correctIndex: 3
            },
            {
              question: "5. A data analyst receives a dataset containing duplicate customer records, missing ages, and inconsistent spellings of cities. Which step should address these problems?",
              options: [
                "A. Problem Definition",
                "B. Data Collection",
                "C. Data Cleaning",
                "D. Decision-Making"
              ],
              correctIndex: 2
            },
            {
              question: "6. A researcher creates charts and calculates summary statistics before building a formal model to understand the distribution of the data. What process is this?",
              options: [
                "A. Data Exploration",
                "B. Data Collection",
                "C. Data Transformation",
                "D. Decision-Making"
              ],
              correctIndex: 0
            },
            {
              question: "7. A manager wants to establish a specific, measurable, attainable, result-oriented, and time-bounded objective before collecting data. Which step is being performed?",
              options: [
                "A. Data Cleaning",
                "B. Problem Definition",
                "C. Data Modeling",
                "D. Visualization"
              ],
              correctIndex: 1
            },
            {
              question: "8. A company collects customer information through an online survey specifically for its current research project. What type of data source is this?",
              options: [
                "A. Secondary",
                "B. External",
                "C. Primary",
                "D. Historical"
              ],
              correctIndex: 2
            },
            {
              question: "9. A student uses an existing government dataset published online for a research project. What type of data is this based on source?",
              options: [
                "A. Primary",
                "B. Secondary",
                "C. Internal",
                "D. Experimental"
              ],
              correctIndex: 1
            },
            {
              question: "10. A company stores employee records in a database with clearly defined rows and columns that can be queried using SQL. How should the data be classified by structure?",
              options: [
                "A. Unstructured",
                "B. Semi-structured",
                "C. Structured",
                "D. Qualitative"
              ],
              correctIndex: 2
            },
            {
              question: "11. A developer receives customer information stored in JSON files using key-value pairs. How should this data be classified by structure?",
              options: [
                "A. Structured",
                "B. Semi-structured",
                "C. Unstructured",
                "D. Quantitative"
              ],
              correctIndex: 1
            },
            {
              question: "12. A company analyzes thousands of customer emails, photographs, and videos. These data types do not follow a predefined table structure. What type of data are they?",
              options: [
                "A. Structured",
                "B. Semi-structured",
                "C. Unstructured",
                "D. Relational"
              ],
              correctIndex: 2
            },
            {
              question: "13. A researcher records the favorite color of each participant. What is the nature of this variable?",
              options: [
                "A. Quantitative",
                "B. Qualitative",
                "C. Continuous",
                "D. Ratio"
              ],
              correctIndex: 1
            },
            {
              question: "14. A fitness application records the weight of every user in kilograms. How should this variable be classified by nature?",
              options: [
                "A. Qualitative",
                "B. Quantitative",
                "C. Nominal",
                "D. Ordinal"
              ],
              correctIndex: 1
            },
            {
              question: "15. A university wants to survey students about their satisfaction. It has a known population of 5,000 students and wants to use a formula appropriate for a finite population with an assumed margin of error. Which formula from the lesson is most appropriate?",
              options: [
                "A. Cochran Formula",
                "B. Slovin-Yamane Formula",
                "C. Z-score Formula",
                "D. IQR Formula"
              ],
              correctIndex: 1
            },
            {
              question: "16. A researcher is estimating a population proportion and has a very large or effectively infinite population. Which formula is appropriate?",
              options: [
                "A. Slovin-Yamane",
                "B. Cochran",
                "C. Min-Max",
                "D. Z-score"
              ],
              correctIndex: 1
            },
            {
              question: "17. A survey researcher wants a 95% confidence level for a Cochran sample-size calculation. Which Z-score should be used?",
              options: [
                "A. 1.645",
                "B. 1.96",
                "C. 2.576",
                "D. 3.00"
              ],
              correctIndex: 1
            },
            {
              question: "18. A teacher records students' blood types: A, B, AB, and O. There is no ranking among the categories. What level of measurement is appropriate?",
              options: [
                "A. Nominal",
                "B. Ordinal",
                "C. Interval",
                "D. Ratio"
              ],
              correctIndex: 0
            },
            {
              question: "19. Customers rate a restaurant as Poor, Fair, Good, or Excellent. The categories have an order, but the exact distance between categories is not known. What level of measurement is this?",
              options: [
                "A. Nominal",
                "B. Ordinal",
                "C. Interval",
                "D. Ratio"
              ],
              correctIndex: 1
            },
            {
              question: "20. A weather station records temperature in degrees Celsius. The differences between values are meaningful, but 0°C does not mean that temperature completely does not exist. What level of measurement is this?",
              options: [
                "A. Nominal",
                "B. Ordinal",
                "C. Interval",
                "D. Ratio"
              ],
              correctIndex: 2
            },
            {
              question: "21. A researcher records the distance traveled by each participant in kilometers. A distance of 0 km represents the absence of distance. What level of measurement is this?",
              options: [
                "A. Nominal",
                "B. Ordinal",
                "C. Interval",
                "D. Ratio"
              ],
              correctIndex: 3
            },
            {
              question: "22. A database contains two records for the same customer, causing that customer to be counted twice. Which data-quality dimension is most directly violated?",
              options: [
                "A. Timeliness",
                "B. Uniqueness",
                "C. Validity",
                "D. Accuracy"
              ],
              correctIndex: 1
            },
            {
              question: "23. A company stores a customer's age as \"twenty years old\" even though the database requires a numerical integer. Which data-quality dimension is primarily violated?",
              options: [
                "A. Validity",
                "B. Timeliness",
                "C. Completeness",
                "D. Uniqueness"
              ],
              correctIndex: 0
            },
            {
              question: "24. A hospital database contains a patient's correct address, but the address has not been updated for five years. Which data-quality dimension is primarily affected?",
              options: [
                "A. Accuracy",
                "B. Timeliness",
                "C. Uniqueness",
                "D. Validity"
              ],
              correctIndex: 1
            },
            {
              question: "25. A dataset contains a person's recorded age as 25, but the person's actual age is 24. Which data-quality dimension is violated?",
              options: [
                "A. Accuracy",
                "B. Completeness",
                "C. Consistency",
                "D. Uniqueness"
              ],
              correctIndex: 0
            },
            {
              question: "26. A dataset contains thousands of records, but many required email fields are blank. Which data-quality dimension is primarily affected?",
              options: [
                "A. Validity",
                "B. Timeliness",
                "C. Completeness",
                "D. Accuracy"
              ],
              correctIndex: 2
            },
            {
              question: "27. A machine-learning model requires numerical input, but the dataset contains a \"Department\" variable with values such as IT, HR, and Finance. Which preparation technique can convert these categories into numerical features?",
              options: [
                "A. Deduplication",
                "B. Categorical Encoding",
                "C. Outlier Removal",
                "D. Normalization"
              ],
              correctIndex: 1
            },
            {
              question: "28. A dataset contains extreme values that are unusually far from the majority of observations. Which technique can help identify these values?",
              options: [
                "A. Z-score or IQR",
                "B. One-Hot Encoding only",
                "C. Deduplication",
                "D. Listwise deletion only"
              ],
              correctIndex: 0
            },
            {
              question: "29. A machine-learning algorithm performs poorly because one feature ranges from 0 to 10 while another ranges from 0 to 100,000. Which technique can help put the variables on comparable scales?",
              options: [
                "A. Deduplication",
                "B. Scaling and Normalization",
                "C. Data Collection",
                "D. Sampling"
              ],
              correctIndex: 1
            },
            {
              question: "30. A company receives massive amounts of social-media posts every second from users around the world. Which Big Data \"V\" describes the speed at which this data arrives?",
              options: [
                "A. Volume",
                "B. Variety",
                "C. Velocity",
                "D. Veracity"
              ],
              correctIndex: 2
            }
          ],
          enum: [
            {
              question: "What are the 5 parts of a SMART objective?",
              requiredAnswerCount: 5,
              ordered: true,
              accept: [
                ["specific"],
                ["measurable"],
                ["attainable"],
                ["result-oriented", "result oriented"],
                ["time-bounded", "time bounded", "timebound"]
              ]
            },
            {
              question: "What are the 4 types of Data Analytics?",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["descriptive analytics", "descriptive"],
                ["diagnostic analytics", "diagnostic"],
                ["predictive analytics", "predictive"],
                ["prescriptive analytics", "prescriptive"]
              ]
            },
            {
              question: "What are the 7 steps of the Data Analytics Process?",
              requiredAnswerCount: 7,
              ordered: true,
              accept: [
                ["problem definition"],
                ["data collection"],
                ["data cleaning"],
                ["data exploration", "data exploration (eda)", "eda"],
                ["data analysis & modeling", "data analysis and modeling", "data analysis & modelling", "data analysis"],
                ["interpretation & visualization", "interpretation and visualization", "interpretation & visualisation"],
                ["decision-making", "decision making", "decisionmaking"]
              ]
            },
            {
              question: "What are the 5 Vs of Big Data?",
              requiredAnswerCount: 5,
              ordered: false,
              accept: [
                ["volume"],
                ["velocity"],
                ["variety"],
                ["veracity"],
                ["value"]
              ]
            },
            {
              question: "What are the 3 levels of organizational decision-making?",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["strategic"],
                ["tactical"],
                ["operational"]
              ]
            },
            {
              question: "What are the 3 areas in the data-driven career hierarchy?",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["data engineering"],
                ["data analytics"],
                ["data science"]
              ]
            },
            {
              question: "What are the 3 periods in the evolution of Data Analytics?",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["early data processing"],
                ["business intelligence"],
                ["big data & advanced analytics", "big data and advanced analytics", "big data"]
              ]
            },
            {
              question: "What are the 3 types of data based on structure?",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["structured"],
                ["semi-structured", "semi structured", "semistructured"],
                ["unstructured"]
              ]
            },
            {
              question: "What are the 2 types of data based on nature?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["qualitative"],
                ["quantitative"]
              ]
            },
            {
              question: "What are the 2 types of data based on source?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["primary"],
                ["secondary"]
              ]
            },
            {
              question: "What are the 2 types of data based on origin?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["internal"],
                ["external"]
              ]
            },
            {
              question: "What are the 4 levels of measurement?",
              requiredAnswerCount: 4,
              ordered: true,
              accept: [
                ["nominal"],
                ["ordinal"],
                ["interval"],
                ["ratio"]
              ]
            },
            {
              question: "What are the 6 dimensions of Data Quality?",
              requiredAnswerCount: 6,
              ordered: false,
              accept: [
                ["consistency"],
                ["uniqueness"],
                ["timeliness"],
                ["validity"],
                ["accuracy"],
                ["completeness"]
              ]
            },
            {
              question: "What are the 3 methods for handling missing values?",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["listwise deletion"],
                ["statistical imputation"],
                ["predictive modeling", "predictive modelling"]
              ]
            },
            {
              question: "What are the 3 statistical methods for imputing missing values?",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["mean"],
                ["median"],
                ["mode"]
              ]
            },
            {
              question: "What are the 2 methods commonly used to identify outliers?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["z-score", "z score", "zscore"],
                ["iqr", "interquartile range"]
              ]
            },
            {
              question: "What are the 2 categorical encoding techniques?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["one-hot encoding", "one hot encoding", "onehot encoding"],
                ["label encoding"]
              ]
            },
            {
              question: "What are the 2 data scaling techniques?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["min-max normalization", "min max normalization", "minmax normalization"],
                ["z-score standardization", "z score standardization", "zscore standardization"]
              ]
            },
            {
              question: "What are the 3 levels of the Data-Information-Knowledge hierarchy?",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["data"],
                ["information"],
                ["knowledge"]
              ]
            },
            {
              question: "What are the 2 formulas used to determine sample size?",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["slovin-yamane", "slovin yamane", "slovin"],
                ["cochran", "cochran formula"]
              ]
            },
            {
              question: "What are the 3 common confidence levels and their Z-scores?",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["90% = 1.645", "90 = 1.645", "1.645"],
                ["95% = 1.96", "95 = 1.96", "1.96"],
                ["99% = 2.576", "99 = 2.576", "2.576"]
              ]
            },
            {
              question: "What are the 4 common sources of data?",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["databases", "database"],
                ["surveys", "survey"],
                ["sensors", "sensor"],
                ["apis", "api"]
              ]
            }
          ]
        }
      }
    ]
  }
];
