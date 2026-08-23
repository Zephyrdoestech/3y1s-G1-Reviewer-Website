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
            options: ["A) \"Mi Ultimo Adios\" — farewell to country", "B) \"Sa Aking Mga Kabata\" — love of one's language", "C) \"Noli Me Tangere\" — social reform", "D) \"El Filibusterismo\" — revolution"],
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
