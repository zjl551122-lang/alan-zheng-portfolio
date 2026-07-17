const skills = [
  { index: "01", title: "LLM Engineering", text: "Qwen3 · LoRA / QLoRA · SFT · Prompt Engineering · 模型评测与推理优化" },
  { index: "02", title: "RAG & Agents", text: "Agentic RAG · LangChain · LangGraph · Milvus · MCP · Tool Calling · Review Agent" },
  { index: "03", title: "NLP & Data", text: "NER · GLiNER · BERT · Transformers · 数据标注 · 语料清洗 · 隐私脱敏" },
  { index: "04", title: "Production", text: "Python · PyTorch · FastAPI · Docker · Git · 模型服务与业务系统集成" },
];

const projects = [
  {
    number: "01",
    label: "LEGAL AI / 2024—2026",
    title: "智能文书辅助生成系统",
    summary: "围绕裁判文书、调解协议与会议笔录等司法场景，构建 Qwen3 + Agentic RAG 多阶段协同工作流。",
    results: ["司法知识库与混合检索", "多 Agent 案件分析与文书生成", "Review Agent 一致性与引用校验"],
    stack: "Qwen3 · LangGraph · Milvus · MCP",
  },
  {
    number: "02",
    label: "PRIVACY AI / 2024—2026",
    title: "训练语料隐私治理平台",
    summary: "面向电子卷宗与裁判文书，自动识别并脱敏姓名、证件号、手机号、地址等敏感信息。",
    results: ["司法领域 NER 数据集", "自动脱敏与质量评估流水线", "模型服务与知识库流程集成"],
    stack: "GLiNER · BERT NER · LoRA · Label Studio",
  },
];

const interests = [
  { title: "AI 前沿", text: "持续跟进大模型、Agent 与检索增强技术，把新想法落成可用系统。" },
  { title: "编程实践", text: "喜欢用 Vibe Coding 快速验证产品设想，也重视工程质量与可维护性。" },
  { title: "推活", text: "Liella! · 大熊和奏。用舞台、音乐与角色故事为日常充电。" },
  { title: "语言学习", text: "英语 CET-6、日语 JLPT N1；享受语言带来的另一种思考方式。" },
];

const schedule = [
  { date: "NOW", title: "作品集持续建设", text: "整理代表项目、技术决策与可复用经验，让成果更可见。", status: "进行中" },
  { date: "NEXT", title: "Agentic RAG 深化", text: "继续探索多 Agent 协作、评测体系与高可靠生产落地。", status: "下一步" },
  { date: "ONGOING", title: "学习与分享", text: "跟进模型前沿，沉淀技术笔记，并寻找有挑战的协作机会。", status: "长期" },
];

function ArrowIcon() {
  return <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 14 14 4M6 4h8v8" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="返回顶部">ALAN<span>1012</span></a>
        <nav aria-label="主导航">
          <a href="#work">项目</a><a href="#skills">技能</a><a href="#about">关于</a><a href="#schedule">日程</a>
        </nav>
        <a className="navCta" href="https://x.com/Alan1012_wkn" target="_blank" rel="noreferrer">保持联系 <ArrowIcon /></a>
      </header>

      <section id="top" className="hero shell">
        <div className="eyebrow"><i /> AI ALGORITHM ENGINEER · BEIJING</div>
        <h1>把复杂的 AI，<br /><em>做成可靠的产品。</em></h1>
        <div className="heroBottom">
          <p>你好，我是 <strong>郑佳乐 / Alan</strong>。专注大模型应用、NLP 与 Agentic RAG，用工程化方法连接模型能力与真实业务。</p>
          <div className="socials">
            <a href="https://x.com/Alan1012_wkn" target="_blank" rel="noreferrer"><span>X / TWITTER</span><b>@Alan1012_wkn</b><ArrowIcon /></a>
            <a href="https://www.instagram.com/alanwkn_1012/" target="_blank" rel="noreferrer"><span>INSTAGRAM</span><b>@alanwkn_1012</b><ArrowIcon /></a>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="orb"><span>LLM</span><span>RAG</span><span>AGENT</span></div>
          <div className="coordinate">39.9042° N<br />116.4074° E</div>
          <div className="scroll">SCROLL TO EXPLORE ↓</div>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="sectionHead"><span>01 / SELECTED WORK</span><h2>代表项目</h2><p>从数据、模型到 Agent 工作流，构建可交付的 AI 系统。</p></div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="projectTop"><span>{project.number}</span><small>{project.label}</small></div>
              <h3>{project.title}</h3><p>{project.summary}</p>
              <ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
              <div className="stack">{project.stack}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section dark">
        <div className="shell">
          <div className="sectionHead inverse"><span>02 / CAPABILITIES</span><h2>职业技能</h2><p>两年 AI 应用算法经验，关注准确性、可解释性与工程落地。</p></div>
          <div className="skillGrid">
            {skills.map((skill) => <article key={skill.index}><span>{skill.index}</span><h3>{skill.title}</h3><p>{skill.text}</p></article>)}
          </div>
          <div className="ticker"><span>PYTHON</span><i>✳</i><span>PYTORCH</span><i>✳</i><span>LANGGRAPH</span><i>✳</i><span>QWEN3</span><i>✳</i><span>MILVUS</span></div>
        </div>
      </section>

      <section id="about" className="section shell about">
        <div className="sectionHead"><span>03 / BEYOND CODE</span><h2>工作之外</h2><p>保持好奇，也保持手感。</p></div>
        <div className="aboutGrid">
          <div className="portraitMark" aria-hidden="true"><span>A</span><small>ALAN<br />ZHENG</small></div>
          <div className="interestList">{interests.map((item, i) => <article key={item.title}><b>0{i + 1}</b><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="schedule" className="section shell schedule">
        <div className="sectionHead"><span>04 / WHAT'S NEXT</span><h2>接下来的安排</h2><p>计划会更新，方向很清晰：持续学习，持续交付。</p></div>
        <div className="timeline">
          {schedule.map((item) => <article key={item.date}><div className="timeDot" /><span>{item.date}</span><h3>{item.title}</h3><p>{item.text}</p><small>{item.status}</small></article>)}
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <div><span>LET'S BUILD SOMETHING USEFUL.</span><h2>一起把想法<br />变成现实。</h2></div>
          <div className="footerLinks">
            <a href="https://x.com/Alan1012_wkn" target="_blank" rel="noreferrer">X / TWITTER <ArrowIcon /></a>
            <a href="https://www.instagram.com/alanwkn_1012/" target="_blank" rel="noreferrer">INSTAGRAM <ArrowIcon /></a>
          </div>
        </div>
        <div className="shell copyright"><span>© 2026 ALAN ZHENG</span><span>DESIGNED WITH INTENT · BUILT WITH AI</span></div>
      </footer>
    </main>
  );
}
