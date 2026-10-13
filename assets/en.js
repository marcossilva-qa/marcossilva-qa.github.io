// Textos em inglês. As chaves batem com os atributos data-i18n das páginas; o português fica no próprio HTML.
window.EN = {
  // ── comuns ──
  'nav.inicio': 'Home',
  'nav.sobre': 'About',
  'nav.exp': 'Experience',
  'nav.proj': 'Projects',
  'nav.contato': 'Contact',
  'tab.aria': 'Navigation',

  // ── home ──
  'meta.desc': 'Marcos Silva, Senior QA Engineer. End-to-end Web, Mobile and API test automation, from the database to the UI, with Playwright, Cypress, Appium and Postman.',
  'hero.oi': '&gt; Hi, I’m Marcos 👋',
  'hero.h1': '<span class="grad">Web, Mobile and API</span> test automation, end to end.',
  'hero.lead': 'Senior QA Engineer, ISTQB Advanced certified. I automate Web, Mobile and API tests integrated with the database: I create test data through the API, check every field in the UI and in the database, and deliver the result ready, so the team tests more and documents less.',
  'hero.b1': 'See projects',
  'hero.b2': 'Get in touch',
  'hero.b3': 'Résumé (PDF)',
  'hero.cv': 'assets/resume-marcos-silva.pdf',
  'hero.term': '<span class="c">$</span> npm run e2e -- cancelamento --todos\n<span class="a">1</span> pre-check      <span class="v">✓</span> 3 scenarios  <span class="s">⏭</span> 1 standby\n<span class="a">2</span> data (API)     <span class="v">✓</span> 39 assertions · 0 failures\n<span class="a">3</span> wait           <span class="v">✓</span> ready after 1 read\n<span class="a">4</span> UI validation  <span class="v">✓</span> 3 passed\n<span class="a">5</span> evidence       <span class="v">✓</span> report generated',

  'sobre.rot': 'About me',
  'sobre.h2': 'Who I am',
  'sobre.p1': 'I specialize in test automation focused on end-to-end flows of enterprise systems: APIs, Salesforce, databases and the screens the data goes through.',
  'sobre.p2': 'I like turning manual, slow and error-prone QA processes into reliable pipelines. I do it with data-driven tests, testable business rules, evidence generated without an operator and objective criteria instead of “I think it has finished processing”.',
  'sobre.p3': 'On my latest project, a pipeline I built came to cover more than 2,000 streaming subscription scenarios and cut the human effort of a regression cycle by 94%.',
  'num.1': 'end-to-end automated scenarios',
  'num.2': 'human effort per regression cycle',
  'num.3': 'test material to maintain',
  'num.4': 'years across QA, testing and integrations',
  'pil.1': 'Web and Mobile',
  'pil.2': 'API testing',
  'pil.2s': 'Postman, Newman, contract',
  'pil.3': 'Databases and CI/CD',

  'exp.rot': 'Experience',
  'exp.h2': 'Career',
  'exp.1q': 'Oct 2023 — present · hybrid',
  'exp.1o': 'Hitss Brasil · streaming TV subscription product in telecom',
  'exp.1l': '<li>Built the product’s end-to-end QA automation pipeline (Playwright, TypeScript, Newman): it creates test data through the API, applies the lifecycle actions, tracks each order’s orchestration in Salesforce, checks the UI, the database and the customer’s e-mail, and produces the evidence on its own.</li><li>Results: <b>2,096 scenarios</b> covered, <b>−94% human effort</b> per regression cycle and <b>−96% test material</b> to maintain.</li><li>Subscription lifecycle testing: acquisition, suspension, resumption, cancellation, chargeback, revocation and expiration, with credit card and Google Play.</li><li>API automation in Postman with JavaScript scripts, chained flows, multiple environments and test data generation; BDD scenarios with Gherkin and Cucumber.js.</li><li>Web automation with Playwright, Cypress and Selenium and Mobile automation with Appium, in Java, JavaScript and Python, with standardized evidence capture in Salesforce.</li><li>Test suites in GitLab CI/CD pipelines, version control with Git and SQL validations.</li><li>Test books in OpenText Octane, tracking in Jira and investigation of product catalog mismatches, with defect reports and evidence.</li>',
  'exp.2q': 'Mar 2021 — Oct 2023 · remote',
  'exp.2l': '<li>Designed test scenarios and test cases from business rules and acceptance criteria.</li><li>Developed and maintained automated API tests, validating contracts, authentication, responses and business rules.</li><li>Ran functional, integration and regression tests.</li><li>Prepared test data for positive, negative and exception tests.</li><li>Logged, tracked and verified defect fixes in collaboration with the development team.</li><li>Analyzed automation results and investigated failures.</li><li>Supported user acceptance testing (UAT), including scenario preparation and follow-up of the acceptance phase.</li><li>Reviewed test coverage and prioritized business-critical scenarios.</li>',
  'exp.2c': '<li>API automation</li><li>Functional testing</li><li>UAT</li>',
  'exp.3q': 'Jan 2018 — Dec 2020 · remote',
  'exp.3t': 'Integrations and API Automation Analyst (Mid-level)',
  'exp.3l': '<li>Developed and maintained REST integrations in PHP and JavaScript for internet service providers.</li><li>Integrated the IVR with systems such as IXCSoft, MK Solutions, Receitanet, Controllr and SGP.</li><li>Gathered requirements and mapped data between the integrated systems.</li><li>Implemented invoice and connection statement queries, validating and handling the API responses.</li><li>Handled communication and authentication failures and data inconsistencies.</li><li>Ran functional and integration tests to validate the IVR flows.</li><li>Analyzed logs and diagnosed integration issues.</li><li>Documented endpoints, parameters, responses and configuration procedures.</li><li>Supported integration and test routines in Jenkins.</li><li>Took part in Scrum ceremonies and followed up on deliveries with the team.</li>',
  'exp.4q': 'Nov 2014 — Nov 2016 · Salvador, Brazil',
  'exp.4t': 'Quality Assurance Intern',
  'exp.4l': '<li>Helped design and run test cases for a web financial system.</li><li>Performed functional and regression testing under the guidance of the QA team.</li><li>Prepared and modeled test data for different test scenarios.</li><li>Checked calculations, field validations and business rules of the financial processes.</li><li>Logged defects with evidence and steps to reproduce.</li><li>Retested fixes and followed up on the results.</li><li>Updated test documentation and organized the evidence.</li><li>Worked with analysts and developers to clarify expected behavior.</li>',
  'form.h': 'Education',
  'form.p': '<b>Associate degree in Systems Analysis and Development</b><br>Universidade Pitágoras Unopar Anhanguera · 2018–2020',
  'cert.h': 'Certification and languages',
  'cert.p': '<b>ISTQB CTAL-TA</b> · Certified Tester Advanced Level, Test Analyst<br>Advanced English (C1)',

  'proj.rot': 'My projects',
  'proj.h2': 'Featured projects',
  'proj.sub': 'A real, anonymized case and the same architecture as open source, with CI and published reports, so you can see how I write tests.',
  'proj.1alt': 'Case page: 2,096 scenarios, −96% test material',
  'proj.1s': 'Case · Telecom and streaming',
  'proj.1t': 'QA automation pipeline <svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  'proj.1p': 'Creates subscriptions through the API, tracks the orchestration in Salesforce, checks more than 240 fields and delivers the evidence ready. About 1,012 h freed per regression cycle.',
  'proj.2alt': 'Playwright report with all tests passing',
  'proj.2s': 'Open source · GitHub',
  'proj.2p': 'The case architecture against a public store: data-driven test data with Newman, waiting on a readiness criterion, validation with Playwright and Page Objects, and CI on GitHub Actions.',
  'proj.3alt': 'Evidence report with expected and actual fields',
  'proj.3s': 'Live · updated every business day',
  'proj.3t': 'Reports and evidence <svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  'proj.3p': 'The result of the latest CI run: test data report without credentials, Playwright report and one evidence file per scenario, with a screenshot of each screen and expected × actual.',
  'proj.3c': '<li>Evidence</li><li>htmlextra</li><li>GitHub Pages</li>',

  'stack.rot': 'My technologies',
  'stack.h2': 'Stack and tools',
  'stack.sub': 'The tools I work with most in day-to-day automation.',
  'stack.db': 'Databases',
  'stack.ling': 'Languages and delivery',

  'cont.rot': 'Contact',
  'cont.h2': 'Let’s talk?',
  'cont.sub': 'If you have a QA Automation opportunity or a test automation project, feel free to reach out.',
  'rodape': '© 2026 Marcos Silva · Handmade and tested, published on GitHub Pages.',

  // ── página do case ──
  'c.titulo': 'Case · QA Pipeline',
  'c.meta': 'Marcos Silva’s portfolio, Senior QA Engineer: end-to-end test automation with Playwright, TypeScript, Newman and Salesforce.',
  'c.nav.ctx': 'Context',
  'c.nav.arq': 'Architecture',
  'c.nav.cod': 'Open source',
  'c.tab.cod': 'Code',
  'c.voltar': '← All projects',
  'c.cargo': 'Case · Telecom and streaming',
  'c.topo': 'From test data to <span class="grad">ready evidence</span>, with no manual steps.',
  'c.lead': 'A QA automation pipeline covering the full lifecycle of streaming TV subscriptions: it creates the data through the API, tracks the orchestration in Salesforce, checks every field and delivers the evidence ready.',
  'c.b1': 'See the architecture',
  'c.term.aria': 'Illustrative example of a pipeline run',
  'c.term.t': 'pipeline · suspension',
  'c.term': `<span class="c">$</span> npm run e2e -- cartao suspensao <span class="s">"OFERTA ANUAL"</span>
<span class="a">1</span> pre-check       <span class="v">✓</span> scenario active
<span class="a">2</span> data via API    <span class="v">✓</span> customer, account and subscription
<span class="a">3</span> order 1         <span class="v">✓</span> acquisition
  orchestration   <span class="s">●</span> 12/14 items · read 3
                  <span class="v">✓</span> ready after 4 reads
<span class="a">4</span> order 2         <span class="v">✓</span> suspension
  orchestration   <span class="k">↻</span> retry on 1 item → <span class="v">✓</span> ready
<span class="a">5</span> validation      <span class="v">✓</span> 240+ fields · 0 mismatches
<span class="a">6</span> evidence        <span class="v">✓</span> document + report`,
  'c.kpis.aria': 'Case results',
  'c.kpis': `
      <div class="kpi"><b>2,096</b><span>end-to-end scenarios</span><small>44 products · 2 catalogs · 2 environments</small></div>
      <div class="kpi"><b>240+</b><span>fields checked per run</span><small>expected × actual, with a verdict</small></div>
      <div class="kpi"><b>−96%</b><span>test material to maintain</span><small>from 20,136 down to 711 requests</small></div>
      <div class="kpi"><b>≈1,012 h</b><span>freed per regression cycle*</span><small>about 6 months of one person’s work</small></div>
    `,

  'c.r1': 'Context',
  'c.h1': 'QA automation pipeline for streaming TV subscriptions',
  'c.s1': 'A telecom operator sells streaming TV subscriptions with a full lifecycle, orchestrated in Salesforce. Each scenario took hours of manual work across APIs, screens and evidence documents. I replaced that process with a pipeline that covers the whole cycle with a single command.',
  'c.contexto': `
      <div class="card">
        <h3>Scope</h3>
        <dl class="fatos">
          <div><dt>Products</dt><dd>44 (bundles, SVODs, OTTs, TVOD, EST)</dd></div>
          <div><dt>Payment methods</dt><dd>Card (2 gateways), Google Play, gift card</dd></div>
          <div><dt>Lifecycle</dt><dd>Acquisition, suspension, resumption, cancellations, chargeback, upgrade and downgrade</dd></div>
          <div><dt>Environments</dt><dd>2 sandboxes × 2 catalogs</dd></div>
        </dl>
        <p class="aviso">The code belongs to the client and is not public. The same architecture is reproduced as open source in the <a href="#projeto">public project</a>.</p>
      </div>
      <div class="card">
        <h3>My role</h3>
        <p>Architecture design, implementation of the three layers, migration of the legacy setup (Selenium/Python and Postman collections duplicated per product), documentation and presentation of the results to the client.</p>
        <ul class="chips" style="margin-top:16px">
          <li>Playwright</li><li>Strict TypeScript</li><li>Newman</li><li>Postman</li><li>Salesforce</li><li>Oracle</li><li>Node.js 24</li>
        </ul>
      </div>
    `,

  'c.r2': 'Before × after',
  'c.h2': 'Each activity changed in nature, not just in speed',
  'c.tabela': `
      <table class="tabela">
        <thead><tr><th>Activity</th><th>Before</th><th>With the pipeline</th><th>Gain</th></tr></thead>
        <tbody>
          <tr><td>Maintaining test data</td><td class="antes">20,136 requests, with the whole flow duplicated per product</td><td class="depois">711 requests: one flow per channel and a product catalog as data</td><td><span class="ganho">−96% material</span></td></tr>
          <tr><td>Running a scenario</td><td class="antes">From 10 min (SVOD) to 1 h (bundle) for acquisition, plus 10 min per lifecycle action</td><td class="depois">Runs with no operator, with about 2 min of review</td><td><span class="ganho">−94% effort*</span></td></tr>
          <tr><td>Waiting for processing</td><td class="antes">Manual follow-up, with no readiness criterion</td><td class="depois">Orchestration read every minute, with a color rule and automatic reprocessing</td><td><span class="ganho">Objective criterion</span></td></tr>
          <tr><td>Producing the evidence</td><td class="antes">About 10 screens, 50 screenshots and the document put together by hand</td><td class="depois">Document, screenshots and expected × actual report generated with no operator</td><td><span class="ganho">No manual assembly</span></td></tr>
          <tr><td>Linking data, action and evidence</td><td class="antes">Customer ID copied by hand between tools</td><td class="depois">One end-to-end command</td><td><span class="ganho">No transcription errors</span></td></tr>
        </tbody>
      </table>
    `,
  'c.nota': '* Estimate for a full cycle of 2,096 scenarios: a manual average of 31 min per scenario (≈ 1,082 h) against about 2 min of review with the pipeline (≈ 70 h). The environment’s processing wait is not included.',

  'c.r3': 'Architecture',
  'c.h3': 'Three independent projects, one pipeline',
  'c.s2': 'Each layer can still run on its own. The orchestrator copies nothing: it runs each layer inside its own project. So an improvement to any layer applies to the pipeline right away, and unique data counters are never reused.',
  'c.svgh.aria': 'The catalog feeds the data layer; the orchestrator chains data, wait and validation; validation produces the evidence',
  'c.svgh': `
        <defs><marker id="m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="ponta" d="M0,0 L10,5 L0,10 z"/></marker></defs>
        <rect class="caixa" x="10" y="80" width="150" height="90" rx="12"/>
        <text class="t3" x="30" y="108">DATA</text><text class="t1" x="30" y="132">Catalog</text><text class="t2" x="30" y="152">44 products</text>
        <rect class="caixa forte" x="210" y="20" width="580" height="210" rx="16"/>
        <text class="t3" x="230" y="46">ORCHESTRATOR · TYPESCRIPT</text>
        <rect class="caixa" x="230" y="70" width="160" height="130" rx="12"/>
        <text class="t3" x="248" y="98">LAYER 1</text><text class="t1" x="248" y="122">Data via API</text><text class="t2" x="248" y="144">data-driven Newman</text><text class="t2" x="248" y="162">6 collections</text><text class="t2" x="248" y="180">711 requests</text>
        <rect class="caixa" x="420" y="70" width="160" height="130" rx="12"/>
        <text class="t3" x="438" y="98">WAIT</text><text class="t1" x="438" y="122">Orchestration</text><text class="t2" x="438" y="144">read every minute</text><text class="t2" x="438" y="162">color rule</text><text class="t2" x="438" y="180">automatic retry</text>
        <rect class="caixa" x="610" y="70" width="160" height="130" rx="12"/>
        <text class="t3" x="628" y="98">LAYER 2</text><text class="t1" x="628" y="122">Validation</text><text class="t2" x="628" y="144">Playwright · Page Objects</text><text class="t2" x="628" y="162">Salesforce · database</text><text class="t2" x="628" y="180">customer e-mail</text>
        <rect class="caixa" x="840" y="80" width="150" height="90" rx="12"/>
        <text class="t3" x="860" y="108">OUTPUT</text><text class="t1" x="860" y="132">Evidence</text><text class="t2" x="860" y="152">document · report</text>
        <path class="seta" d="M160,125 H226" marker-end="url(#m)"/>
        <path class="seta" d="M390,135 H416" marker-end="url(#m)"/>
        <path class="seta" d="M580,135 H606" marker-end="url(#m)"/>
        <path class="seta" d="M790,125 H836" marker-end="url(#m)"/>
      `,
  'c.svgv.aria': 'Catalog, data via API, wait for the orchestration, validation and evidence, in sequence',
  'c.svgv': `
        <defs><marker id="mv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="ponta" d="M0,0 L10,5 L0,10 z"/></marker></defs>
        <rect class="caixa" x="20" y="10" width="300" height="70" rx="12"/><text class="t3" x="40" y="38">DATA</text><text class="t1" x="40" y="62">Catalog · 44 products</text>
        <rect class="caixa forte" x="10" y="110" width="320" height="330" rx="16"/><text class="t3" x="30" y="136">ORCHESTRATOR · TYPESCRIPT</text>
        <rect class="caixa" x="30" y="150" width="280" height="80" rx="12"/><text class="t1" x="48" y="182">Data via API</text><text class="t2" x="48" y="204">Newman · 6 collections · 711 requests</text>
        <rect class="caixa" x="30" y="250" width="280" height="80" rx="12"/><text class="t1" x="48" y="282">Wait for the orchestration</text><text class="t2" x="48" y="304">color rule · automatic retry</text>
        <rect class="caixa" x="30" y="350" width="280" height="80" rx="12"/><text class="t1" x="48" y="382">Validation</text><text class="t2" x="48" y="404">Playwright · Salesforce · database · e-mail</text>
        <rect class="caixa" x="20" y="470" width="300" height="70" rx="12"/><text class="t3" x="40" y="498">OUTPUT</text><text class="t1" x="40" y="522">Evidence, ready</text>
        <path class="seta" d="M170,80 V106" marker-end="url(#mv)"/><path class="seta" d="M170,230 V246" marker-end="url(#mv)"/><path class="seta" d="M170,330 V346" marker-end="url(#mv)"/><path class="seta" d="M170,440 V466" marker-end="url(#mv)"/>
      `,

  'c.r4': 'Flow',
  'c.h4': 'A single command runs the whole lifecycle',
  'c.passos': `
      <div class="passo"><h3>Pre-check</h3><p>Confirms the scenario exists and is active before using up data or a token.</p></div>
      <div class="passo"><h3>Data via API</h3><p>Customer, payment method, billing account and product, in seconds.</p></div>
      <div class="passo"><h3>Lifecycle</h3><p>Suspension, resumption, cancellations, chargeback, upgrade or downgrade.</p></div>
      <div class="passo"><h3>Orchestration checked</h3><p>Each order tracked in Salesforce, minute by minute, until it closes.</p></div>
      <div class="passo"><h3>Validation</h3><p>More than 240 fields checked, from the order to the database and the e-mail.</p></div>
      <div class="passo"><h3>Evidence</h3><p>Document, full-page screenshots and an expected × actual report.</p></div>
    `,

  'c.r5': 'Reliability',
  'c.h5': 'Mechanisms designed from real failures',
  'c.s3': 'Each one came from a problem seen in the test environment, not from a list of best practices.',
  'c.mecanismos': `
      <div class="card"><h3>Readiness criterion</h3><p>The color of each orchestration item decides when to move on. No more eyeballing the wait.</p></div>
      <div class="card"><h3>Automatic recovery</h3><p>Items with a transient error are reprocessed and followed to the end. A persistent error stops the pipeline.</p></div>
      <div class="card"><h3>No false ready</h3><p>The step’s order must exist on the account before it is checked, so the previous, already closed order is not read.</p></div>
      <div class="card"><h3>Mismatches don’t stop the run</h3><p>The flow goes to the end, produces all the evidence and fails with the full list of mismatches.</p></div>
      <div class="card"><h3>Technical failures isolated</h3><p>A screen problem produces a trace and page context, kept apart from the business result.</p></div>
      <div class="card"><h3>Controlled session</h3><p>Single login, MFA with a trusted device and logout always confirmed.</p></div>
      <div class="card"><h3>No data reused</h3><p>Unique, persistent counters for partner tokens and gift cards, shared across the projects.</p></div>
      <div class="card"><h3>Reports without secrets</h3><p>Headers and bodies with credentials hidden, worked out from the collection itself, and every report scanned at the end.</p></div>
    `,

  'c.r6': 'Result',
  'c.h6': 'A defect no screen showed',
  'c.defeito': `
      <div>
        <p style="margin:0 0 10px;color:var(--ink-2)">In the billing call for the annual plan, the validation flagged an <b>installment count different from the expected one</b>: a field that doesn’t appear on any screen and that visual checks can’t reach.</p>
        <p style="margin:0;color:var(--ink-2)">The mismatch was detected automatically, went into the evidence and was logged as a defect.</p>
      </div>
      <div class="esperado-obtido" aria-label="Illustrative example of a check">
        <div class="linha-ok">✓ product ........ expected = actual</div>
        <div class="linha-ok">✓ amount ......... expected = actual</div>
        <div class="linha-ok">✓ billing period . expected = actual</div>
        <div class="linha-div">✗ installments ... expected ≠ actual</div>
      </div>
    `,

  'c.r7': 'Engineering',
  'c.h7': 'The cheapest checks run first',
  'c.s4': 'Static checks and unit tests take seconds and run before any execution in Salesforce.',
  'c.piramide': `
      <div class="p1">End to end<small>2,096 scenarios in Salesforce</small></div>
      <div class="p2">Unit tests<small>99 tests of business rules, catalog and evidence</small></div>
      <div class="p3">Static checks<small>1,499 scripts and 547 chained requests in the collections checked in 0.4 s</small></div>
    `,
  'c.praticas': `
      <div class="card"><h3>Page Object Model</h3><p>Each screen mapped only once. Maintenance in a single place.</p></div>
      <div class="card"><h3>Data-driven</h3><p>Scenarios and products are data, not code. A new product needs no new code.</p></div>
      <div class="card"><h3>Checked extrapolation</h3><p>New scenarios are derived from references mapped live, and the rule must reproduce the ones already validated before generating.</p></div>
    `,

  'c.r8': 'Public project · open source',
  'c.h8': 'The same architecture, so you can see the code',
  'c.s5': 'A replica of the pipeline against ServeRest, a public store built for test practice. It has the same layers, the same techniques and CI with published reports.',
  'c.projeto': `
        <h3>qa-e2e-pipeline</h3>
        <ul class="lista">
          <li>Data-driven test data with <b>Newman</b>: one collection folder per lifecycle step</li>
          <li>Pre-check that rejects a standby scenario <b>before</b> creating data</li>
          <li>Waiting on an objective readiness criterion, implemented as a pure, tested rule</li>
          <li>Field-by-field validation with <b>Playwright</b> and Page Objects, with evidence and a masked password</li>
          <li>Reports without credentials, with what to hide worked out from the collection itself</li>
          <li>CI on GitHub Actions: quality, E2E matrix, scheduled runs and GitHub Pages</li>
        </ul>
        <div class="acoes" style="margin-top:20px">
          <a class="btn primario" href="https://github.com/marcossilva-qa/qa-e2e-pipeline">See the repository</a>
          <a class="btn" href="https://marcossilva-qa.github.io/qa-e2e-pipeline/">Latest run reports</a>
        </div>
      `,
  'c.term2.aria': 'Example of a terminal run',
  'c.term2': `<span class="c">$</span> npm run e2e -- cancelamento --todos

<span class="a">1. Pre-check</span>
  <span class="s">⏭</span>  WEBCAM_HD: standby
  <span class="v">✓</span>  FONE_BT: AQUISICAO → COMPRA → CANCELAMENTO
  <span class="v">✓</span>  TECLADO_MEC: AQUISICAO → COMPRA → CANCELAMENTO
  <span class="v">✓</span>  MONITOR_27: AQUISICAO → COMPRA → CANCELAMENTO
<span class="a">2. Test data</span> (Newman · 3 products)
  21 requests · 39 assertions · 0 failures
<span class="a">3. Waiting for the final state</span>
  <span class="v">✓</span>  FONE_BT: ready after 1 read
  <span class="v">✓</span>  TECLADO_MEC: ready after 1 read
  <span class="v">✓</span>  MONITOR_27: ready after 1 read
<span class="a">4. Validation and evidence</span> (Playwright)
  3 passed
<span class="a">5. Summary</span>
  <span class="v">✓</span>  FONE_BT        passed
  <span class="v">✓</span>  TECLADO_MEC    passed
  <span class="v">✓</span>  MONITOR_27     passed`,
  'c.contato': `
      <h2>Want to talk about this case?</h2>
      <div class="acoes"><a class="btn primario" href="../#contato">Get in touch</a><a class="btn" href="../#projetos">See other projects</a></div>
    `,
  'c.rodape': 'Marcos Silva · QA Automation · The case does not identify the client, the team or real subscriber data.',
};
