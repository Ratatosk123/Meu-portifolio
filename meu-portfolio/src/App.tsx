import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Moon, Sun, Filter, Search, ArrowUpRight, Code2, Briefcase, GraduationCap, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// =============================
// CONFIGURAÇÃO — EDITE AQUI
// =============================
const PROFILE = {
  name: "Allan",
  role: "Desenvolvedor Full‑Stack",
  location: "São Paulo, Brasil",
  summary:
    "Desenvolvedor apaixonado por criar soluções rápidas, acessíveis e escaláveis. Foco em Vue.js, Laravel e TypeScript.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQEQDv5J0FI0YQ/profile-displayphoto-shrink_200_200/B4DZdUcm9MHAAc-/0/1749468475784?e=1758153600&v=beta&t=LapCZjMc5LyODhfqSdCd4hfatPlikHALZqX8xSTCjg8",
  email: "allanmaiagondim.amg@gmail.com",
  phone: "+55 (11) 91852‑8563",
  links: {
    github: "https://github.com/Ratatosk123",
    linkedin: "https://www.linkedin.com/in/allan-maia-gondim",
    resume: "/Currículo_Allan_Maia_Gondim_(6).pdf", // Coloque seu PDF na pasta pública
  },
};

const SKILLS = [
  { name: "HTML", level: 92 },
  { name: "Vue.js", level: 88 },
  { name: "Laravel", level: 84 },
  { name: "Vue.js", level: 70 },
  { name: "AI", level: 72 },
  { name: "Rust", level: 65 },
  { name: "MySql", level: 78 },
  { name: "React", level: 45},
  { name: "Tailwind", level: 45},
];

const TAGS = ["HTML", "TypeScript", "Laravel", "Vue.js", "Rust", "AI", "DevOps"];

const PROJECTS = [
  {
    title: "ENIAC ACADEMY",
    description:
      "Desenvolvi o portal Eniac Academy, uma plataforma web completa que conecta alunos da faculdade a oportunidades de estágio e trainee. O site serve como uma ponte direta entre os talentos da instituição e as empresas parceiras, facilitando o processo de recrutamento e o início da jornada profissional dos estudantes.",
    tags: ["Laravel", "Vue", "TypeScript"],
    year: 2025,
    live: "",
    repo: "https://github.com/Ratatosk123/Projeto-Sistema-de-Reserva-de-Hotel-",
  },
  {
    title: "Sistema de Reserva de Hotel (Projeto - Iniciante)",
    description:
      "Desenvolvi um sistema de gestão para hotéis focado em otimizar a administração de acomodações. A plataforma permite o cadastro detalhado de quartos e oferece uma interface rápida para a consulta de disponibilidade, simplificando o processo de reserva e melhorando a eficiência operacional da recepção.",
    tags: ["Python"],
    year: 2025,
    live: "",
    repo: "https://github.com/Ratatosk123/Projeto-Sistema-de-Reserva-de-Hotel-",
    highlight: true,
  },
  {
    title: "SoluMatch — Vagas com Filtro Inteligente",
    description:
      "Listagem de vagas com filtros por categoria e tipo de contratação, destaque visual e modal de detalhes.",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    year: 2025,
    live: "",
    repo: "https://github.com/Ratatosk123/Solumatch-PHP",
  },
  {
    title: "Meu portifólio",
    description:
      "Portifólio interativo com design moderno.",
    tags: ["React", "Tailwind", "TypeScript"],
    year: 2025,
    live: "",
    repo: "https://github.com/Ratatosk123/Meu-portifolio",
  },
  {
    title: "Rust (Em aprendizado - iniciante)",
    description:
      "Aprendendo a linguagem Rust para futuros projetos.",
    tags: ["Rust"],
    year: 2025,
    live: "",
    repo: "https://github.com/seuusuario/ops-dashboard",
  },
];

const EXPERIENCE = [
  {
    company: "ENIAC",
    role: "Desenvolvedor Full-stack (Estágio)",
    period: "05/2025 — Atual",
    description:
      "Liderança de equipe, gestão de projetos e desenvolvimento Web, Softwares, automações com N8N.",
  },
];

const EDUCATION = [
  {
    school: "Centro Universitário Eniac",
    course: "Gestão da Tecnologia da informação",
    period: "2023 - 2025",
  },
];

// =============================
// COMPONENTES
// =============================
const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-20">
    <div className="flex items-center gap-2 mb-6">
      {Icon && <Icon className="h-5 w-5" />}
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Header = ({ dark, setDark }) => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="font-semibold tracking-tight text-lg">{PROFILE.name}</a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {[
          ["Sobre", "about"],
          ["Projetos", "projects"],
          ["Experiência", "experience"],
          ["Contato", "contact"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="hover:underline underline-offset-4">
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => setDark(!dark)} aria-label="Alternar tema">
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button asChild>
          <a href={PROFILE.links.resume} download>
            <Download className="h-4 w-4 mr-2" /> CV
          </a>
        </Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Badge className="mb-3">{PROFILE.role}</Badge>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Olá, eu sou {PROFILE.name}
      </h1>
      <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-prose">
        {PROFILE.summary}
      </p>
      <div className="flex flex-wrap items-center gap-3 mt-6">
        <Button asChild>
          <a href="#projects">
            Ver projetos <ArrowUpRight className="h-4 w-4 ml-2" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4 mr-2" /> GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
          </a>
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {PROFILE.location}</span>
        <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> {PROFILE.email}</span>
        <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {PROFILE.phone}</span>
      </div>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-[4/3] bg-muted" style={{ backgroundImage: `url(${PROFILE.avatarUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

const Skills = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {SKILLS.map((s) => (
      <Card key={s.name}>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2"><Wrench className="h-4 w-4" />{s.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={s.level} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">{s.level}%</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Projects = () => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("desc");

  const filtered = useMemo(() => {
    let result = PROJECTS.filter((p) =>
      (tag === "All" || p.tags.includes(tag)) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()))
    );
    return result.sort((a, b) => (sort === "desc" ? b.year - a.year : a.year - b.year));
  }, [query, tag, sort]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2" />
          <Input className="pl-8 w-64" placeholder="Buscar projetos..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <Tabs value={tag} onValueChange={setTag} className="w-full md:w-auto">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="All">Todos</TabsTrigger>
            {TAGS.map((t) => (
              <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button variant="outline" onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
          <Filter className="h-4 w-4 mr-2" /> {sort === "desc" ? "Mais novos" : "Mais antigos"}
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className={p.highlight ? "ring-2 ring-primary" : ""}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code2 className="h-4 w-4" /> {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  {p.live && (
                    <Button size="sm" asChild>
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {p.repo && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        Código <Github className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ icon: Icon, title, subtitle, period, description }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary" />
    <div className="absolute left-1 top-1 w-0.5 h-full bg-border" />
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle} · {period}</p>
    {description && <p className="text-sm mt-2 text-muted-foreground">{description}</p>}
  </div>
);

const Experience = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Briefcase className="h-5 w-5" /> Experiência</CardTitle>
      </CardHeader>
      <CardContent>
        {EXPERIENCE.map((e) => (
          <TimelineItem key={e.company} icon={Briefcase} title={e.role} subtitle={e.company} period={e.period} description={e.description} />
        ))}
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Formação</CardTitle>
      </CardHeader>
      <CardContent>
        {EDUCATION.map((e) => (
          <TimelineItem key={e.school} icon={GraduationCap} title={e.course} subtitle={e.school} period={e.period} />
        ))}
      </CardContent>
    </Card>
  </div>
);

const Contact = () => (
  <Card>
    <CardHeader>
      <CardTitle>Contato</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="text-muted-foreground">Vamos conversar sobre seu projeto? Envie uma mensagem ou chame nas redes.</p>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <a href={`mailto:${PROFILE.email}`}><Mail className="h-4 w-4 mr-2" /> Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`tel:${PROFILE.phone}`}><Phone className="h-4 w-4 mr-2" /> Telefone</a>
            </Button>
          </div>
        </div>
        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada! (simulação)"); }}>
          <Input placeholder="Seu nome" required />
          <Input type="email" placeholder="Seu e‑mail" required />
          <Input placeholder="Assunto" required />
          <textarea className="w-full rounded-md border bg-background p-2 text-sm" rows={4} placeholder="Sua mensagem" required />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </CardContent>
  </Card>
);

// =============================
// APP
// =============================
export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <Header dark={dark} setDark={setDark} />

        <main id="home" className="max-w-6xl mx-auto px-4 py-10 space-y-14">
          <Hero />

          <Section id="about" title="Sobre mim">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    Trabalho com desenvolvimento web focado em performance, acessibilidade e experiência do usuário. Gosto de criar interfaces limpas, componentes reutilizáveis e automatizar processos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Habilidades</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Skills />
            </div>
          </Section>

          <Section id="projects" title="Projetos" icon={Code2}>
            <Projects />
          </Section>

          <Section id="experience" title="Carreira" icon={Briefcase}>
            <Experience />
          </Section>

          <Section id="contact" title="Contato">
            <Contact />
          </Section>
        </main>

        <footer className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} {PROFILE.name}. Todos os direitos reservados.</p>
            <div className="flex items-center gap-3">
              <a className="inline-flex items-center gap-1 hover:underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a className="inline-flex items-center gap-1 hover:underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/*
====================================================
INSTRUÇÕES RÁPIDAS
====================================================
1) Tailwind + shadcn/ui: este componente assume que seu projeto já tem Tailwind e shadcn/ui configurados.
   - Tailwind: https://tailwindcss.com/docs/guides/vite
   - shadcn/ui: https://ui.shadcn.com/docs/installation

2) Como usar:
   - Salve este arquivo como src/Portfolio.jsx (ou App.jsx) e importe no seu index.
   - Substitua os dados em PROFILE, SKILLS, TAGS, PROJECTS, EXPERIENCE e EDUCATION.
   - Coloque seu PDF de currículo em /public (ex.: /public/cv-seu-nome.pdf) e ajuste PROFILE.links.resume.

3) Personalizações fáceis:
   - Cores/tema: controle com o state `dark`. Você pode integrar com next-themes se quiser.
   - Seções: duplique <Section/> para criar novas áreas (Certificações, Artigos, etc.).
   - Projetos: marque highlight: true para dar um glow especial.

4) Acessibilidade e SEO:
   - Use <h1> único (na seção Hero) e headings semânticos nas demais seções.
   - Adicione meta tags e favicon no index.html.

Se quiser, posso adaptar este template ao seu conteúdo real agora: textos, logo, paleta e projetos. */
