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
        title: "Quiz 1 - August 24 (Software Development)",
        type: "Quiz",
        date: "2026-08-24",
        status: "upcoming",
        notes: `<section class="notes-section">
<h2>APP DEV Notes — Software Development (TOPCIT)</h2>

<h3>I. Software Engineering Overview</h3>

<h4>A. Foundations</h4>
<ul>
<li><strong>Developer vs Programmer</strong>: distinguished terms in the field (developer has broader scope covering design/architecture, programmer focuses on coding).</li>
<li><strong>SDLC (Software Development Life Cycle)</strong>: Planning → Analysis → Design → Implementation → Support.</li>
<li><strong>Methodologies</strong>:
  <ul>
    <li>Prototyping (Revolutionary, Throw-away)</li>
    <li>Incremental</li>
    <li>Spiral</li>
    <li>Waterfall</li>
    <li>Agile</li>
  </ul>
</li>
<li><strong>Project scope (SMART)</strong>: Specific, Measurable, Attainable, Realistic, Time-bounded.</li>
<li><strong>Other project constraints</strong>: Cost, Time.</li>
</ul>

<h4>B. Software Engineering Defined</h4>
<blockquote>"The process of solving customers' problems by the systematic development and evolution of large, high-quality software systems within cost, time and other constraints."</blockquote>
<ul>
<li><strong>Solving customers' problems</strong> is the goal of software engineering.
  <ul>
    <li>Sometimes the solution is to buy, not build.</li>
    <li>Adding unnecessary features does not help solve the problem.</li>
    <li>Software engineers must communicate effectively to identify and understand the problem.</li>
  </ul>
</li>
</ul>

<h4>C. Stakeholders in Software Engineering</h4>
<ol>
<li>Users — those who use the software</li>
<li>Customers — those who pay for the software</li>
<li>Software developers</li>
<li>Development Managers</li>
</ol>
<p>All four roles can be fulfilled by the same person.</p>

<h4>D. Software Quality</h4>
<ul>
<li><strong>Usability</strong> — users can learn it fast and get their job done easily.</li>
<li><strong>Efficiency</strong> — doesn't waste resources such as CPU time and memory.</li>
<li><strong>Reliability</strong> — does what it is required to do without failing.</li>
<li><strong>Maintainability</strong> — can be easily changed.</li>
<li><strong>Reusability</strong> — parts can be used in other projects, so reprogramming is not needed.</li>
</ul>

<h4>E. Background and Purpose of Software Engineering</h4>
<p>It is most important to apply software engineering technology to successfully develop software that becomes more multifunctional and bigger in scale, providing technologies and techniques that support systematic management to resolve difficulties from requirements analysis to maintenance.</p>
<p><strong>3 key elements of a successful software project:</strong></p>
<ol>
<li><strong>Process</strong> — applying the definition of systematic business methods and flow (Procedures & Methods)</li>
<li><strong>Organization / People</strong> — people equipped with specialized knowledge (Process & Organization)</li>
<li><strong>Infrastructure and Technology</strong> — required for efficient operation of work methods and personnel (Tools & Equipment)</li>
</ol>

<h4>F. Second Definition of Software Engineering</h4>
<blockquote>"A discipline that studies the overall life cycle of software — such as development, operation, and maintenance — systematically, descriptively and quantitatively."</blockquote>

<h4>G. Four Key Elements of Software Engineering</h4>
<ol>
<li><strong>Method</strong>
  <ul>
    <li>Composed of project planning and estimation, system and software analysis, data structure, program structure, algorithm, coding, testing, and maintenance tasks.</li>
    <li>Methods centered on a specific language (e.g. object-oriented) or graphical notation are introduced over time.</li>
    <li>A series of evaluation standards for software quality is introduced.</li>
  </ul>
</li>
<li><strong>Tool</strong>
  <ul>
    <li>An automated or semi-automated method used to improve productivity or consistency when performing a task.</li>
    <li>Numerous tools exist across the SDLC (requirements management, modeling, configuration management, change management).</li>
    <li>When tools are integrated so information from one can be used by others, it becomes a system supporting software development.</li>
  </ul>
</li>
<li><strong>Procedure</strong>
  <ul>
    <li>Combines a method and a tool so they can be used to develop software in a rational and timely fashion.</li>
    <li>Defines the applied method, required deliverables (documents, reports), controls to guarantee quality, and the sequence of milestones for evaluating progress.</li>
  </ul>
</li>
<li><strong>People</strong>
  <ul>
    <li>Software engineering relatively depends more heavily on people because many tasks (establishment, improvement, maintenance) are performed by employees/organizations specializing in it.</li>
    <li>It is practically impossible to summarize software development in an easily accessible or graspable manner.</li>
  </ul>
</li>
</ol>

<h3>II. Lifecycle of Software Development</h3>

<h4>A. Definition</h4>
<p>The lifecycle refers to the entire process from understanding the user environment and problems to operation and maintenance. General sequence:</p>
<p><strong>Feasibility review → Development planning → Requirements analysis → Design → Implementation → Test → Operation → Maintenance</strong></p>

<h4>B. Purposes</h4>
<ul>
<li>To calculate project costs, draw up a development plan, and configure the basic framework.</li>
<li>To standardize the terms.</li>
<li>To manage a project.</li>
</ul>

<h4>C. Selecting a Software Lifecycle</h4>
<ul>
<li>An important activity for tailoring the development process of a project.</li>
<li>Selection is based on the risk and uncertainty of system development and understanding of it.</li>
<li>The selected model should minimize risks and uncertainties for the given project.</li>
<li>Most representative models: Waterfall, prototype, evolutionary, incremental.</li>
</ul>

<h4>D. Types of Software Lifecycle Models</h4>

<p><strong>1. V Model</strong></p>
<ul>
<li>Clearly shows the activities that should be performed to project managers and developers; helps customers understand development principles.</li>
<li>An ideal lifecycle model identifies and clarifies all system requirements.</li>
<li>Pairs: Requirement Analysis ↔ Acceptance Testing, System Design ↔ System Testing, Architecture Design ↔ Integration Testing, Module Design ↔ Unit Testing, with Coding at the bottom of the "V."</li>
<li>Easy to apply to a project and manage; start/end of development activities and the project can be clearly defined.</li>
<li>Emphasizes project verification and validation — explains the association between development activities (e.g. requirements analysis, design) and corresponding test activities performed at the same time.</li>
<li>Lets teams know which phase should be redone if a software fault is found during testing.</li>
</ul>

<p><strong>2. V Model with Prototyping</strong></p>
<ul>
<li>Prototyping develops a system or part of a system to understand it or resolve risks/uncertainties.</li>
<li>Leads developers and customers to a common understanding of what is needed and what should be developed.</li>
<li>Can be applied to the development phase of the Waterfall model or V model, or used as an independent lifecycle model.</li>
</ul>

<p><strong>3. Incremental Model</strong></p>
<ul>
<li>A system is developed by extending its functions several times.</li>
<li>Each phase's version runs only a few limited functions; later versions add newly added functions to those of the previous version.</li>
<li>The final system version is a complete system into which all functions are incorporated.</li>
</ul>

<p><strong>4. Evolutionary Model</strong></p>
<ul>
<li>Like the incremental model, useful when system development time needs to be reduced.</li>
<li>Unlike the incremental model, the development phase for the entire system is reiterated several times.</li>
<li>Each system version provides all functions to the user.</li>
</ul>

<h3>III. Software Development Methodology</h3>

<h4>A. Necessity of a Software Development Methodology</h4>
<ol>
<li>Improving development productivity by accumulating and reusing development experience.</li>
<li>Effective project management.</li>
<li>Providing a means of communication through formal procedures, deliverables, and unified standard terminology.</li>
<li>Assuring quality at a certain level by verifying each phase and closing it after approval.</li>
</ol>

<h4>B. Comparison of Software Development Methodologies</h4>

<table>
<tr><th>Item</th><th>Structural</th><th>Information Engineering</th><th>Object-Oriented</th><th>CBD</th></tr>
<tr>
<td>Overview</td>
<td>Focuses on business activities</td>
<td>Focuses on data</td>
<td>Identifies relationship between object and class, converts to a design model</td>
<td>Develops a reusable component or combines commercial components</td>
</tr>
<tr>
<td>Basic principle</td>
<td>Abstraction, structuralization, stepwise refinement, modularization</td>
<td>Information strategy plan, business area analysis, business system design, system development</td>
<td>Requirements definition, OO analysis (object/dynamic/functional modeling), OO design, test/deployment</td>
<td>Requirement analysis, analysis (architecture definition, use case modeling), design, development, implementation (release, training)</td>
</tr>
<tr>
<td>Characteristics</td>
<td>Divide and conquer, centered on program logic, structured with controllable modules</td>
<td>Supports corporate business systems, emphasis on data models, program logic depends on data structure (CRUD), enterprise integrated data model</td>
<td>Program unit is an object, data and logic integration, advanced modularization, reuse by inheritance, no gap between analysis and design</td>
<td>Evolution of the object methodology, emphasis on interface, interface implementation using a component, aims to reuse black box components</td>
</tr>
<tr>
<td>Major deliverables</td>
<td>Domain analysis report, data flow diagram, structural drawings, program specification</td>
<td>Domain analysis report, ERD, function chart, application structure diagram, program specification, table definition/list</td>
<td>Business process/conceptual diagram, use case/sequence/class/component diagrams</td>
<td>Business process/conceptual diagram, use case/sequence/class/component diagrams, reuse plan, .ent, EJB</td>
</tr>
<tr>
<td>Supporting tool</td>
<td>Teamwork, SA</td>
<td>Cool Gen, SA</td>
<td>Rose, SA, Palstic</td>
<td>Cool Joe, Together</td>
</tr>
<tr>
<td>Major supported language</td>
<td>COBOL, C, VB, PASCAL</td>
<td>COBOL, C, VB, PASCAL</td>
<td>C++, JAVA, VB</td>
<td>In principle, the choice of development language is unimportant</td>
</tr>
</table>

<h4>C. Software Development Phases</h4>
<ol>
<li><strong>Requirements analysis</strong>
  <ul>
    <li>The hardest thing in software development is deciding exactly what to develop.</li>
    <li>Practically the first step; the phase of understanding what the user needs.</li>
    <li>A critical phase that can reduce development costs across the entire project.</li>
    <li>Investing well in analyzing, defining, and managing requirements early can shorten the whole development period and prevent excessive costs and quality deterioration.</li>
  </ul>
</li>
<li><strong>Design</strong>
  <ul>
    <li>Requirements analysis is conceptual; design is the first step in physical realization.</li>
    <li>Determines the structure of a system composed of sub-systems, allocated to components (hardware or software).</li>
    <li>Design directly affects quality — a poorly designed system's stability deteriorates, and unstable systems are difficult to maintain.</li>
  </ul>
</li>
<li><strong>Implementation</strong>
  <ul>
    <li>Goal: program the system so requirements are satisfied based on the design specification.</li>
    <li>The program should follow the description in the detailed design and user's guide.</li>
    <li>One of the most important tasks is deciding on a coding standard and writing code clearly based on it.</li>
  </ul>
</li>
<li><strong>Testing</strong>
  <ul>
    <li>A series of processes to inspect and evaluate whether the system satisfies prescribed requirements, and how expected vs. actual results differ (manual or automated).</li>
    <li>The final step in assuring software quality — a series of tasks designed to find faults.</li>
    <li>Includes both a quality evaluation of the developed software and modification tasks to improve quality.</li>
  </ul>
</li>
</ol>

<h3>IV. Agile Development Methodology</h3>

<h4>A. Types of Agile Methodologies</h4>
<ul>
<li>Scrum — Ken Schwaber / Jeff Sutherland</li>
<li>eXtreme Programming (XP) — Kent Beck / Erich Gamma</li>
<li>Lean software development — Mary Poppendieck / Tom Poppendieck</li>
<li>Agile Unified Process (AUP) — Scott Ambler</li>
</ul>

<h4>B. Agile Development Methodology — XP</h4>
<p>XP (eXtreme Programming) was established by Kent Beck and other engineers in the late 1990s, based on lessons learned while implementing projects. It is a lightweight development method generally suitable for small and medium-sized development organizations.</p>

<p><strong>XP development flow</strong>: User story → (Structural spike / Spike, uncertain vs. reliable estimate) → Release plan → Cycle → Acceptance → Minor release. Test scenarios flow from User story to Acceptance; customer approval occurs at Acceptance.</p>

<p><strong>Key XP concepts</strong>:</p>
<ul>
<li><strong>User stories</strong> — a tool for collecting requirements and communication; briefly describe necessary matters regarding functions.</li>
<li><strong>Spike</strong> — a simple program that considers difficult requirements or potential solutions; aims to increase the reliability of user stories while reducing the risk of technical problems.</li>
<li><strong>Release planning</strong> — establishes a deployment plan for the entire project; divides one iteration into one to three weeks and keeps iterations even.</li>
<li><strong>Acceptance test</strong> — performed by the customer before release.</li>
<li><strong>Smaller releases</strong> — the final phase of the XP cycle; frequent small-scale releases provide several benefits to the customer early on.</li>
</ul>

<p><strong>XP's five values</strong>:</p>
<ul>
<li><strong>Communication</strong> — the most important thing in team-level software development; communication errors are typically found in failed projects.</li>
<li><strong>Simplicity</strong> — always ask "What is the simplest thing possible?" Keep the design simple and clear by removing unnecessary complexity.</li>
<li><strong>Feedback</strong> — gradual improvement is more effective than pursuing perfection; create feedback quickly and use it for improvement.</li>
<li><strong>Courage</strong> — cope with changes to requirements and technology and deliver them to the customer as quickly as possible.</li>
<li><strong>Respect</strong> — hides behind the first four; a person cannot implement the project properly without respecting other team members.</li>
</ul>

<p><strong>Basic XP practices</strong>:</p>
<table>
<tr><th>Category</th><th>Practice</th><th>Description</th></tr>
<tr><td rowspan="7">Development</td><td>Simple design</td><td>Keep the design as simple as possible to meet current requirements.</td></tr>
<tr><td>Test-driven development</td><td>Write test programs before writing code and automate them using test tools.</td></tr>
<tr><td>Refactoring</td><td>Redesign existing code by eliminating duplication and complexity.</td></tr>
<tr><td>Coding standard</td><td>Establish coding standards for effective communication.</td></tr>
<tr><td>Pair programming</td><td>Two developers sit and work together at one computer.</td></tr>
<tr><td>Collective code ownership</td><td>All developers share joint responsibility for the source code so anyone can modify it at any time.</td></tr>
<tr><td>Continuous integration</td><td>Perform integration work continually until the work is finished.</td></tr>
<tr><td rowspan="3">Management</td><td>Planning game</td><td>Establish the entire project and cycle plan considering business and technical aspects; keep updated through execution and feedback.</td></tr>
<tr><td>Small release</td><td>Deploy executable modules quickly so customers frequently experience how the software works.</td></tr>
<tr><td>Metaphor</td><td>Express the overall look of the system using pictures and stories that are easy to understand.</td></tr>
<tr><td rowspan="2">Environment</td><td>40 hours/week</td><td>Do not work more than 40 hours per week to maintain quality.</td></tr>
<tr><td>On-site customer</td><td>Have the customer who actually uses the system stay at the development site.</td></tr>
</table>

<h4>C. Scrum</h4>
<p>The Scrum process has three components:</p>
<ul>
<li><strong>Sprint</strong> — the repetitive development period, in units of 1 to 4 weeks by the calendar.</li>
<li><strong>Three meetings</strong> — Daily Scrum, Sprint planning, Sprint review.</li>
<li><strong>Three deliverables</strong> — Product backlog, Sprint backlog, Burndown chart.</li>
</ul>

<p><strong>Deliverables</strong>:</p>
<ul>
<li><strong>Product backlog</strong> — a breakdown of work to be done; the product manager mainly determines priority on behalf of the customer. The function defined in the product backlog is called a user story. "Story point" is the standard mainly used to estimate the user's workload.</li>
<li><strong>Sprint backlog</strong> — a list of work to be developed during a sprint. The user story and required work are defined as a task; the size of each task is estimated by the hour.</li>
<li><strong>Burndown chart</strong> — shows remaining work in the sprint backlog; shows remaining work for each iteration as a story point.</li>
</ul>

<p><strong>Meetings</strong>:</p>
<ul>
<li><strong>Sprint planning</strong> — goals are set for each sprint and items are selected from the product backlog for execution during a sprint. A person is appointed to take charge of each item and draw up a plan for each task.</li>
<li><strong>Daily Scrum</strong> — a 15-minute meeting held each day to share project progress. All team members attend and discuss what they did, what to do, and other issues.</li>
<li><strong>Sprint review</strong> — checks work progress and deliverables to see if the sprint goal was achieved. The Scrum team demonstrates what they did to attendees and receives feedback (recommended to run a demo with customer participation). The Scrum master conducts a retrospective review to find what went well, what was disappointing, and what should be improved.</li>
</ul>

<p><strong>Characteristics of Scrum</strong>:</p>
<ul>
<li><strong>Transparency</strong> — Scrum enables effective understanding of a project's status or problems using techniques such as the Scrum meeting, burndown chart, and sprint review.</li>
<li><strong>Timeboxing</strong> — concentration on a project becomes possible by limiting the time it takes to implement Scrum (e.g. daily Scrum limited to 15 minutes; sprint review performed periodically per iteration).</li>
<li><strong>Communication</strong> — much effort is made to facilitate communication among team members, e.g. sharing problems during the daily Scrum and discussing difficulty/time using planning poker.</li>
<li><strong>Empirical model</strong> — Scrum has its own process model but places emphasis on the experience of individuals participating in the project, since each project has its own intrinsic situation; the basic structure stays the same even though the specifics differ per team.</li>
</ul>

<h3>V. Software Reuse</h3>

<h4>A. Software Reuse</h4>
<p>Software reuse means developing new software using existing software or software knowledge. Reusable software or software knowledge is a reusable asset comprising design, requirements, inspection, and architecture. It is a method of standardizing knowledge about software development (function, module, configuration, etc.) and configuring it to be suitable for repeated use in order to increase development productivity.</p>

<p><strong>Purpose of software reuse</strong>:</p>
<table>
<tr><th>Goal</th><th>Contents</th></tr>
<tr><td>Responsibility</td><td>Performance such as functions, stability, speed, etc. has already been proved.</td></tr>
<tr><td>Scalability</td><td>Easy to upgrade based on proven functions.</td></tr>
<tr><td>Productivity</td><td>Improvement of the overall development process, such as cost, time, risk, etc.</td></tr>
</table>

<p><strong>Considerations when reusing software</strong>:</p>
<ul>
<li>Reuse software if productivity can be improved.</li>
<li>Base the software development process on systematic software reuse.</li>
<li>Establish a system for promoting a reuse culture.</li>
<li>Create a reuse environment through initial investment.</li>
<li>Continually improve and enhance the library.</li>
<li>Support software reuse with tools.</li>
<li>Evaluate and measure software productivity.</li>
<li>Manage a set of information deliverables for software reuse: architecture, source code, data, designs, documents, estimates (templates), human interfaces, plans, requirements, test cases.</li>
<li>Consider top-down/bottom-up development approach.</li>
<li>Consider the granularity of reusable components.</li>
</ul>

<p><strong>Effects of software reuse</strong>:</p>
<ul>
<li>Reduces the TCO (Total Cost of Ownership) of software production.</li>
<li>Creates sharing and utilization effects for producing high-quality software.</li>
<li>Promotes the sharing of information on system development and the sharing of deliverables from other projects.</li>
<li>Has an educational effect on the system structure and the method of developing a good system.</li>
</ul>

<h4>B. Reverse Engineering</h4>
<p><strong>Definition</strong>: Reverse engineering is a field of software engineering in which a developed system is deconstructed to reveal its documents, design techniques, etc. It is a series of activities aimed at understanding and modifying a system, performed during the software maintenance phase — that is, recovering information or a document corresponding to the deliverables.</p>

<p><strong>Input/Output of reverse engineering</strong>:</p>
<table>
<tr><th>Input</th><td>Data or document in the form of I/O, such as the source code, object code, work procedure, library, etc.</td></tr>
<tr><th>Output</th><td>Structure diagram, data flow chart, control flow graph, entity relationship diagram, etc.</td></tr>
</table>

<p><strong>Main reasons reverse engineering is necessary</strong>:</p>
<ul>
<li>When it is difficult to maintain a running system.</li>
<li>When frequent changes decrease a system's efficiency.</li>
<li>When redeveloping a business system based on a file system into one based on a relational database.</li>
<li>When downsizing the default mainframe.</li>
</ul>

<p><strong>Advantages of reverse engineering</strong>:</p>
<ul>
<li>Commercialized or previously developed software can be analyzed.</li>
<li>Maintainability can be improved since the data and information of the existing system can be analyzed at the design level.</li>
<li>CASE tools can be used easily by storing existing system information in a repository.</li>
</ul>

<p><strong>Types of reverse engineering</strong>:</p>
<ul>
<li><strong>Logic reverse engineering</strong> — information is extracted from the source code and stored in the physical design information storage; physical design information is obtained.</li>
<li><strong>Data reverse engineering</strong> — the existing database is modified or migrated to a new database management system.</li>
</ul>

</section>`,
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
          }
        ],
        ident: `<h3>Part II. Identification (10 items)</h3>

<ol>
<li>This 15-minute daily meeting is where all team members discuss what they did, what they will do, and any issues.
<details><summary>Show Answer</summary>Daily Scrum</details>
</li>
<li>This agile methodology was established by Kent Beck and other engineers in the late 1990s and is generally suitable for small and medium-sized development organizations.
<details><summary>Show Answer</summary>XP (eXtreme Programming)</details>
</li>
<li>This Scrum deliverable is a breakdown of work to be done, with priority mainly determined by the product manager on behalf of the customer.
<details><summary>Show Answer</summary>Product backlog</details>
</li>
<li>This Scrum deliverable shows the remaining work in the sprint backlog, tracked per iteration as a story point.
<details><summary>Show Answer</summary>Burndown chart</details>
</li>
<li>In XP, this is a simple program written to explore difficult requirements or potential solutions, aiming to increase the reliability of user stories while reducing technical risk.
<details><summary>Show Answer</summary>Spike</details>
</li>
<li>This field of software engineering deconstructs a developed system to reveal its documents and design techniques, and is performed during the maintenance phase.
<details><summary>Show Answer</summary>Reverse engineering</details>
</li>
<li>This term refers to developing new software using existing software or software knowledge in order to increase development productivity.
<details><summary>Show Answer</summary>Software reuse</details>
</li>
<li>This XP value states "Always ask, what is the simplest thing possible?" and keeps the design clear by removing unnecessary complexity.
<details><summary>Show Answer</summary>Simplicity</details>
</li>
<li>This term refers to the repetitive development period in Scrum, measured in units of 1 to 4 weeks.
<details><summary>Show Answer</summary>Sprint</details>
</li>
<li>These are the typical outputs of reverse engineering, including structure diagrams, data flow charts, control flow graphs, and entity relationship diagrams.
<details><summary>Show Answer</summary>Output of reverse engineering (design/structural documentation)</details>
</li>
</ol>`
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
        title: "Rizal Quiz 1 - August 24",
        type: "Quiz",
        date: "2026-08-24",
        status: "upcoming",
        notes: `<h3>A Tribute to Our National Hero, Dr. Jose P. Rizal</h3>

<h4>Childhood</h4>
<ul>
  <li>Born in <strong>Calamba, Laguna</strong> on <strong>June 19, 1861</strong>, the seventh child of <strong>Francisco Mercado Rizal</strong> and <strong>Teodora Alonso y Quintos</strong>.</li>
  <li>Baptized <strong>June 22, 1861</strong> as <strong>Jose Rizal Mercado</strong>, by Rev. Rufino Collantes, sponsored by Rev. Pedro Casañas.</li>
  <li><strong>September 28, 1862</strong>: the Calamba parish church burned, destroying canonical records including Rizal's baptismal record.</li>
  <li><strong>1864</strong>: at age three, learned the alphabet from his mother, his first teacher. <strong>Leon Monroy</strong> later taught him basic Latin for five months until Monroy's death.</li>
  <li><strong>1865</strong>: his sister <strong>Concepcion</strong> died at age three, the first time Rizal cried real tears.</li>
  <li>Uncles' influence:
    <ul>
      <li>Advice passed to him: work hard, be thorough and swift, think independently, and visualize everything.</li>
      <li><strong>Uncle Manuel Alberto</strong> built up his physical strength and love of the outdoors.</li>
      <li><strong>Uncle Gregorio</strong>, a scholar, instilled his love of learning.</li>
    </ul>
  </li>
  <li><strong>1869</strong>, age 8: wrote his first poem, <strong>"Sa Aking Mga Kabata,"</strong> on the theme of love for one's language.</li>
</ul>

<h4>First School (Biñan)</h4>
<ul>
  <li><strong>June 1869</strong>: Jose and his brother <strong>Paciano</strong> traveled to Biñan, where Paciano enrolled him under Maestro <strong>Justiniano Aquino Cruz</strong>.</li>
  <li>Defeated the bully <strong>Pedro</strong> using wrestling skills learned from Tio Manuel; lost an arm-wrestling match to <strong>Andres Salandanan</strong>.</li>
  <li>Studied drawing and painting under <strong>Juancho</strong>, alongside classmate <strong>Jose Guevarra</strong>.</li>
  <li>Outperformed all other students in Biñan in Spanish, Latin, and other subjects.</li>
  <li>Left Biñan on <strong>December 17, 1870</strong> aboard the steamer <strong>Talim</strong> after a letter from his sister <strong>Saturnina</strong>.</li>
  <li><strong>February 17, 1872</strong>: Fathers <strong>Gomez, Burgos, and Zamora (Gomburza)</strong> were executed by order of Governor General Izquierdo, an event that deeply affected the Rizal family.</li>
</ul>

<h4>Education</h4>
<ul>
  <li>Earned his Bachelor of Arts from <strong>Ateneo Municipal de Manila</strong> in <strong>1877</strong> (age 16), with an average of "excellent."</li>
  <li>Also in 1877, enrolled in Philosophy and Letters at the <strong>University of Santo Tomas</strong> while completing surveying and expert assessor courses at Ateneo.</li>
  <li>Finished surveying studies <strong>March 21, 1877</strong>, passed the licensing exam <strong>May 21, 1878</strong>, but the license was withheld until <strong>December 30, 1881</strong> because he was underage.</li>
  <li>Enrolled in medicine at UST in <strong>1878</strong>; did not receive top honors due to hostile treatment from professors toward Filipino students.</li>
  <li>Sailed for Spain <strong>May 3, 1882</strong> to study at <strong>Central Universidad de Madrid</strong>.</li>
  <li>Conferred Licentiate in Medicine on <strong>June 21, 1884</strong> (age 23).</li>
  <li>Completed Philosophy and Letters with "excellent" marks on <strong>June 19, 1885</strong> (age 24).</li>
</ul>

<h4>The Secret Mission and Major Works</h4>
<ul>
  <li>Mission: publish nationalistic and reformist writing in Europe to educate Filipinos and push for social reform.</li>
  <li>Mastered <strong>22 languages</strong> during his travels across Europe, America, and Asia.</li>
  <li><strong>Noli Me Tangere</strong>: published in <strong>Berlin, March 1887</strong>, exposing abuses by the Spanish clergy.</li>
  <li><strong>Sucesos de las Islas Filipinas</strong>: Rizal annotated and reprinted <strong>Antonio de Morga's</strong> work in <strong>Paris (1890)</strong> to document pre-colonial Filipino civilization.</li>
  <li><strong>El Filibusterismo</strong>: printed in <strong>Ghent, September 18, 1891</strong>, a darker sequel to the Noli.</li>
  <li>First imprisonment: <strong>Fort Santiago, July 6 to July 15, 1892</strong>, after anti-friar leaflets were found in his sister <strong>Lucia's</strong> luggage from Hong Kong.</li>
</ul>

<h4>The Exile in Dapitan</h4>
<ul>
  <li>Won a lottery and used the winnings to buy land for farming, fishing, and business.</li>
  <li>Ran a hospital and built homes for himself, visiting family, and his students.</li>
  <li>Taught languages, arts, sciences, vocational skills, and self-defense.</li>
  <li>Collected biological specimens and corresponded with scientists abroad.</li>
  <li>Built a <strong>water dam</strong> and a <strong>relief map of Mindanao</strong> together with his students.</li>
</ul>

<h4>Martyrdom</h4>
<ul>
  <li>Returned to Manila aboard the steamship <strong>Colon</strong> on <strong>November 3, 1896</strong>, after the Philippine Revolution broke out on August 26.</li>
  <li>Defended by <strong>Don Luis Taviel de Andrade</strong> in a mock court-martial on charges of rebellion, sedition, and illegal association.</li>
  <li>Governor General <strong>Camilo de Polavieja</strong> approved his death sentence on <strong>December 28, 1896</strong>.</li>
  <li>Wrote his untitled farewell poem, later known as <strong>"Mi Ultimo Adios,"</strong> in Fort Santiago before his execution.</li>
  <li>Executed by firing squad at <strong>Bagumbayan Field (Luneta)</strong> on the morning of <strong>December 30, 1896</strong>, at age <strong>35</strong>.</li>
</ul>

<h4>Attributes of Rizal</h4>
<p>A versatile figure regarded as an <strong>architect, artist, businessman, cartoonist, educator, economist, ethnologist, scientific farmer, historian, inventor, journalist, linguist, musician, mythologist, nationalist, naturalist, novelist, ophthalmic surgeon, poet, propagandist, psychologist, scientist, sculptor, sociologist, and theologian</strong>.</p>

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
          }
        ]
      }
    ]
  }
];
