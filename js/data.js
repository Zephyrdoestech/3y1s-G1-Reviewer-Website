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

<h4>Data Analytics</h4>
<p>The process of examining raw data to uncover patterns, trends, relationships, and actionable insights to support decision-making. It spans data collection, cleaning, transforming, and analyzing via statistical and computational methods.</p>

<h4>Data Analytics vs. Data Analysis</h4>
<p>Data analysis focuses on inspecting and interpreting data to answer specific questions, while data analytics is the broader end-to-end discipline that turns data into business decisions.</p>

<h4>Core Importance</h4>
<p>Data Analytics:</p>
<ul>
<li>Enables evidence-based decisions</li>
<li>Boosts efficiency</li>
<li>Mitigates risks</li>
<li>Provides competitive advantages</li>
<li>Forecasts future outcomes</li>
</ul>

<hr>

<h3>Data-Driven Career Hierarchy</h3>

<h4>Data Engineering <span class="hierarchy-tag tag-base">Base</span></h4>
<p>Builds infrastructure, pipelines, and storage.</p>
<p><strong>Important technologies/concepts:</strong></p>
<ul>
<li>EDW</li>
<li>ETL</li>
<li>EDL</li>
<li>ESB</li>
</ul>

<h4>Data Analytics <span class="hierarchy-tag tag-middle">Middle</span></h4>
<p>Focuses on:</p>
<ul>
<li>Data cleaning</li>
<li>Data stewardship</li>
<li>Visualization</li>
<li>BI tools</li>
<li>Reporting dashboards</li>
</ul>

<h4>Data Science <span class="hierarchy-tag tag-top">Top</span></h4>
<p>Handles:</p>
<ul>
<li>Advanced data training</li>
<li>Experimentation</li>
<li>Machine Learning</li>
<li>AI</li>
</ul>

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
<h4>Business Intelligence <span class="era-badge">1990s–2000s</span></h4>
<p><strong>Important concepts:</strong></p>
<ul>
<li>Relational databases</li>
<li>Data warehousing</li>
<li>ETL pipelines</li>
<li>OLAP</li>
<li>Multi-dimensional analysis</li>
<li>Structured reporting dashboards</li>
</ul>
</div>

<div class="timeline-era">
<h4>Big Data & Advanced Analytics <span class="era-badge">2010s–Present</span></h4>
<p><strong>Important concepts:</strong></p>
<ul>
<li>Cloud platforms</li>
<li>Distributed computing</li>
<li>Hadoop</li>
<li>Spark</li>
<li>Real-time streaming</li>
<li>Unstructured data handling</li>
<li>AI/ML models</li>
</ul>
</div>

</div>

<hr>

<h3>4 Analytical Methods (Types of Analytics)</h3>

<div class="analytics-methods-grid">

<div class="analytics-method-card">
<h4>Descriptive Analytics</h4>
<p class="method-question"><em>"What happened?"</em></p>
<p>Summarizes historical data using:</p>
<ul>
<li>Aggregation</li>
<li>Summary statistics</li>
<li>Dashboards</li>
</ul>
<p><strong>Example:</strong> Monthly sales reports.</p>
</div>

<div class="analytics-method-card">
<h4>Diagnostic Analytics</h4>
<p class="method-question"><em>"Why did it happen?"</em></p>
<p>Investigates root causes through:</p>
<ul>
<li>Drill-down</li>
<li>Discovery techniques</li>
</ul>
<p><strong>Example:</strong> Identifying causes behind dropped web traffic.</p>
</div>

<div class="analytics-method-card">
<h4>Predictive Analytics</h4>
<p class="method-question"><em>"What is likely to happen?"</em></p>
<p>Forecasts future outcomes using:</p>
<ul>
<li>Regression models</li>
<li>Time-series forecasting</li>
</ul>
<p><strong>Example:</strong> Predicting next quarter revenue.</p>
</div>

<div class="analytics-method-card">
<h4>Prescriptive Analytics</h4>
<p class="method-question"><em>"What should we do?"</em></p>
<p>Recommends optimal actions via:</p>
<ul>
<li>Optimization algorithms</li>
<li>Simulations</li>
</ul>
<p><strong>Example:</strong> Marketing budget allocation.</p>
</div>

</div>

<hr>

<h3>The 7-Step Data Analytics Process</h3>

<div class="steps-list">

<div class="step-item">
<div class="step-number">1</div>
<div class="step-body">
<h4>Problem Definition</h4>
<p>Establish SMART objectives:</p>
<ul>
<li><strong>S</strong>pecific</li>
<li><strong>M</strong>easurable</li>
<li><strong>A</strong>ttainable</li>
<li><strong>R</strong>esult-Oriented</li>
<li><strong>T</strong>ime-bounded</li>
</ul>
</div>
</div>

<div class="step-item">
<div class="step-number">2</div>
<div class="step-body">
<h4>Data Collection</h4>
<p>Gather data from:</p>
<ul>
<li>Databases</li>
<li>Surveys</li>
<li>Sensors</li>
<li>APIs</li>
</ul>
<p>Remember: <strong>GIGO — Garbage In, Garbage Out</strong></p>
</div>
</div>

<div class="step-item">
<div class="step-number">3</div>
<div class="step-body">
<h4>Data Cleaning</h4>
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
<p>Identify:</p>
<ul>
<li>Distributions</li>
<li>Correlations</li>
<li>Outliers</li>
</ul>
<p>Using:</p>
<ul>
<li>Summary statistics</li>
<li>Visual charts</li>
</ul>
<p>This should happen <strong>before</strong> formal modeling.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">5</div>
<div class="step-body">
<h4>Data Analysis & Modeling</h4>
<p>Build:</p>
<ul>
<li>Statistical models</li>
<li>Regression models</li>
<li>Machine learning models</li>
</ul>
</div>
</div>

<div class="step-item">
<div class="step-number">6</div>
<div class="step-body">
<h4>Interpretation & Visualization</h4>
<p>Translate model findings into:</p>
<ul>
<li>Dashboards</li>
<li>Charts</li>
<li>Actionable insights</li>
</ul>
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
<p>High-level, long-term organizational goals.</p>
<p>Associated with: <strong>Executive management</strong></p>
</div>
<div class="tier-card">
<h5>Tactical</h5>
<p>Medium-term execution strategies.</p>
<p>Associated with: <strong>Mid-level management</strong></p>
</div>
<div class="tier-card">
<h5>Operational</h5>
<p>Day-to-day workflow optimizations.</p>
<p>Associated with: <strong>Operations managers</strong></p>
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
<p>Heterogeneous formats:</p>
<ul>
<li>Structured</li>
<li>Semi-structured</li>
<li>Unstructured</li>
</ul>
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
<ul>
<li>Customer segmentation</li>
<li>Demand forecasting</li>
<li>Automated fraud detection</li>
<li>Operational bottleneck reduction</li>
<li>Marketing ROI evaluation</li>
<li>New product development</li>
</ul>

</section>`
          },
          {
            tab: "Lesson 2",
            content: `<section class="notes-section">
<h2>Lesson 2: Overview of Data</h2>

<h3>Foundations & Hierarchy</h3>

<h4>Data</h4>
<p>Raw, unprocessed facts, numbers, symbols, or observations lacking inherent meaning on their own.</p>

<h4>Information</h4>
<p>Data processed, cleaned, and organized into meaningful context.</p>

<h4>Knowledge</h4>
<p>Actionable understanding and insights derived from interpreting information to guide decisions.</p>

<h4>Variable</h4>
<p>A measurable property that takes different values across subjects.</p>

<h4>Observation</h4>
<p>A single recorded unit or row across multiple variables.</p>

<h4>Variation</h4>
<p>Measurable differences observed across observations.</p>

<h4>Random Variable</h4>
<p>A variable whose exact outcome contains uncertainty.</p>

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

<h4>Missing Value Imputation</h4>
<p><strong>Missing Value Imputation:</strong> Techniques used to handle missing values in a dataset.</p>

<p>Methods include:</p>
<ul>
<li><strong>Listwise Deletion:</strong> Removing records that contain missing values.</li>
<li><strong>Statistical Imputation:</strong> Replacing missing values using statistical measures.</li>
<li><strong>Predictive Modeling:</strong> Using a model to estimate and replace missing values.</li>
</ul>

<p>Statistical imputation can use:</p>
<ul>
<li><strong>Mean:</strong> Replaces missing values with the average value.</li>
<li><strong>Median:</strong> Replaces missing values with the middle value.</li>
<li><strong>Mode:</strong> Replaces missing values with the most frequently occurring value.</li>
</ul>

<h4>Deduplication</h4>
<p><strong>Deduplication:</strong> Removing identical or duplicate rows to avoid sample overrepresentation.</p>

<h4>Outlier Handling</h4>
<p><strong>Outlier Handling:</strong> Identifying and managing extreme values that differ substantially from the majority of observations.</p>

<p>Methods include:</p>
<ul>
<li><strong>Z-score:</strong> Used to identify observations that are unusually far from the mean.</li>
<li><strong>IQR (Interquartile Range):</strong> A measure used to identify the spread of the middle 50% of the data and help detect outliers.</li>
<li><strong>Boxplots:</strong> Visual charts that can be used to identify extreme values and potential outliers.</li>
</ul>

<h4>Data Transformation</h4>
<p><strong>Data Transformation:</strong> Converting or modifying data into a suitable format for analysis or modeling.</p>

<p>Includes:</p>
<ul>
<li><strong>Categorical Encoding:</strong> Converting categorical data into numerical representations.</li>
<li><strong>One-Hot Encoding:</strong> Represents categories using separate binary variables.</li>
<li><strong>Label Encoding:</strong> Assigns numerical labels to categories.</li>
<li><strong>Feature Engineering:</strong> Creating or modifying variables to make them more useful for analysis or modeling.</li>
</ul>

<h4>Scaling & Normalization</h4>

<h5>Min-Max Normalization</h5>
<p>Rescales values into a fixed <strong>[0, 1]</strong> interval.</p>

<h5>Z-score Standardization</h5>
<p>Transforms values to:</p>
<ul>
<li>Mean μ = 0</li>
<li>Standard deviation σ = 1</li>
</ul>

</section>`
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
              question: "Enumerate the 4 types of analytics.",
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
              question: "Enumerate the 7 steps of the Data Analytics Process.",
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
              question: "Enumerate the 5 Vs of Big Data.",
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
              question: "Enumerate the 3 levels of organizational decision-making.",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["strategic"],
                ["tactical"],
                ["operational"]
              ]
            },
            {
              question: "Enumerate the 3 areas in the data-driven career hierarchy.",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["data engineering"],
                ["data analytics"],
                ["data science"]
              ]
            },
            {
              question: "Enumerate the 3 periods in the evolution of Data Analytics.",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["early data processing"],
                ["business intelligence"],
                ["big data & advanced analytics", "big data and advanced analytics", "big data"]
              ]
            },
            {
              question: "Enumerate 4 technologies/concepts from Early Data Processing.",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["mainframe computers", "mainframes", "mainframe"],
                ["batch processing"],
                ["punch cards", "punch card"],
                ["cobol"],
                ["early hierarchical databases", "hierarchical databases"],
                ["flat file databases", "flat-file databases", "flat files"],
                ["basic reporting"]
              ]
            },
            {
              question: "Enumerate 4 technologies/concepts associated with Business Intelligence.",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["relational databases", "relational database"],
                ["data warehousing", "data warehouse"],
                ["etl pipelines", "etl pipeline", "etl"],
                ["olap"],
                ["multi-dimensional analysis", "multidimensional analysis"],
                ["structured reporting dashboards", "reporting dashboards"]
              ]
            },
            {
              question: "Enumerate 4 technologies/concepts associated with Big Data & Advanced Analytics.",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["cloud platforms", "cloud platform", "cloud"],
                ["distributed computing"],
                ["hadoop"],
                ["spark"],
                ["real-time streaming", "real time streaming", "realtime streaming"],
                ["unstructured data handling"],
                ["ai", "artificial intelligence"],
                ["machine learning", "ml"],
                ["ai/ml models", "ai/ml"]
              ]
            },
            {
              question: "Enumerate the 4 data collection sources mentioned in the lesson.",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["databases", "database"],
                ["surveys", "survey"],
                ["sensors", "sensor"],
                ["apis", "api"]
              ]
            },
            {
              question: "Enumerate the 3 classifications of data by structure: the type with strict rows and columns, the type using key-value pairs or tags, and the type without a predefined schema.",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["structured"],
                ["semi-structured", "semi structured", "semistructured"],
                ["unstructured"]
              ]
            },
            {
              question: "Enumerate the 2 classifications of data by nature: one described by characteristics or labels, and the other represented by numbers.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["qualitative"],
                ["quantitative"]
              ]
            },
            {
              question: "Enumerate the 2 classifications of data by source: data collected firsthand for a specific purpose, and data obtained from existing sources.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["primary"],
                ["secondary"]
              ]
            },
            {
              question: "Enumerate the 2 classifications of data by origin: data generated from within an organization, and data acquired from outside the organization.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["internal"],
                ["external"]
              ]
            },
            {
              question: "Enumerate the 4 levels of measurement: named categories without order, ranked categories, equal intervals without a true zero, and equal intervals with a meaningful zero.",
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
              question: "Enumerate the 6 dimensions of Data Quality, including whether data is consistent, unique, timely, valid, accurate, and complete.",
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
              question: "Enumerate the 3 approaches to handling missing values: removing rows, filling with statistical metrics, and using algorithms to guess the value.",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["listwise deletion"],
                ["statistical imputation"],
                ["predictive modeling", "predictive modelling"]
              ]
            },
            {
              question: "Enumerate the 3 statistical methods for missing-value imputation.",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["mean"],
                ["median"],
                ["mode"]
              ]
            },
            {
              question: "Enumerate the 2 methods used to identify outliers: measuring standard deviations from the mean, and using the spread between quartiles.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["z-score", "z score", "zscore"],
                ["iqr", "interquartile range"]
              ]
            },
            {
              question: "Enumerate the 2 categorical encoding techniques: creating binary columns for each category, and assigning a unique integer to each category.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["one-hot encoding", "one hot encoding", "onehot encoding"],
                ["label encoding"]
              ]
            },
            {
              question: "Enumerate the 2 scaling techniques: shifting values to a specific range like 0 to 1, and centering data around a mean of 0.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["min-max normalization", "min max normalization", "minmax normalization"],
                ["z-score standardization", "z score standardization", "zscore standardization"]
              ]
            },
            {
              question: "Enumerate the 2 main types of data based on nature.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["qualitative"],
                ["quantitative"]
              ]
            },
            {
              question: "Enumerate the 2 types of data based on source.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["primary"],
                ["secondary"]
              ]
            },
            {
              question: "Enumerate the 2 types of data based on origin.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["internal"],
                ["external"]
              ]
            },
            {
              question: "Enumerate the 3 concepts that form the foundation of how data is transformed into meaningful understanding and actionable insights.",
              requiredAnswerCount: 3,
              ordered: true,
              accept: [
                ["data"],
                ["information"],
                ["knowledge"]
              ]
            },
            {
              question: "Enumerate the 2 variables used in the Slovin-Yamane Formula.",
              requiredAnswerCount: 2,
              ordered: false,
              accept: [
                ["n", "population", "population (n)"],
                ["e", "margin of error"]
              ]
            },
            {
              question: "Enumerate the 4 variables used in the Cochran Formula.",
              requiredAnswerCount: 4,
              ordered: false,
              accept: [
                ["z", "z-score", "z score", "critical score"],
                ["p", "estimated proportion"],
                ["q", "1-p", "1 - p"],
                ["e", "precision", "margin of error"]
              ]
            },
            {
              question: "Enumerate the 3 common confidence levels used with their Z-scores.",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["90% = 1.645", "90 = 1.645", "1.645", "90%"],
                ["95% = 1.96", "95 = 1.96", "1.96", "95%"],
                ["99% = 2.576", "99 = 2.576", "2.576", "99%"]
              ]
            },
            {
              question: "Enumerate 6 business applications of Data Analytics.",
              requiredAnswerCount: 6,
              ordered: false,
              accept: [
                ["customer segmentation"],
                ["demand forecasting"],
                ["automated fraud detection", "fraud detection"],
                ["operational bottleneck reduction", "bottleneck reduction"],
                ["marketing roi evaluation", "marketing roi"],
                ["new product development", "product development"]
              ]
            },
            {
              question: "Enumerate the 3 types of data structure.",
              requiredAnswerCount: 3,
              ordered: false,
              accept: [
                ["structured"],
                ["semi-structured", "semi structured", "semistructured"],
                ["unstructured"]
              ]
            }
          ]
        }
      }
    ]
  }
];
