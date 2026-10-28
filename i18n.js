/* i18n.js — alternância PT/EN. Original em inglês; tradução por texto exato. */
(function(){
  var DICT = {
 "Work": "Trabalhos",
 "About": "Sobre",
 "Contact": "Contato",
 "← Back to work": "← Voltar aos trabalhos",
 "Case Study": "Estudo de caso",
 "UX Research · Case Study": "Pesquisa UX · Estudo de caso",
 "UI Design · Case Study": "UI Design · Estudo de caso",
 "Role": "Função",
 "Tools": "Ferramentas",
 "Audience": "Público",
 "Focus": "Foco",
 "Next Project": "Próximo projeto",
 "Overview": "Visão geral",
 "Challenge": "Desafio",
 "The Challenge": "O desafio",
 "Process": "Processo",
 "Solution": "Solução",
 "Context": "Contexto",
 "Objective": "Objetivo",
 "Final Result": "Resultado final",
 "Final Design": "Design final",
 "Final design": "Design final",
 "First Steps": "Primeiros passos",
 "Personas": "Personas",
 "UX/UI Designer": "Designer UX/UI",
 "UI Designer": "Designer de UI",
 "UX Researcher & Designer": "Pesquisador e Designer UX",
 "© 2026 Paulo Garcia — UX/UI Designer.": "© 2026 Paulo Garcia — Designer UX/UI.",
 "UX / UI with a focus on AI": "UX / UI com foco em IA",
 "Strategy, data and AI integrated to create high-impact products.": "Estratégia, dados e IA integrados para criar produtos de alto impacto.",
 "A.I, Data and Strategy": "IA, Dados e Estratégia",
 "About me": "Sobre mim",
 "Graduated in digital interface design, postgraduate in UX research and currently pursuing an MBA in A.I applied to business.": "Graduado em design de interfaces digitais, pós-graduado em pesquisa de UX e atualmente cursando MBA em IA aplicada a negócios.",
 "Some Companies": "Algumas empresas",
 "I've Worked With": "com as quais trabalhei",
 "Some of": "Alguns",
 "my Work": "dos meus trabalhos",
 "Self-serve platform for Dell's engineering teams to publish, discover and govern data products.": "Plataforma self-service para as equipes de engenharia da Dell publicarem, descobrirem e governarem produtos de dados.",
 "Redesign of a social learning network where kids learn using Lego toys, boosting engagement and retention.": "Redesign de uma rede social de aprendizado em que crianças aprendem com brinquedos Lego, aumentando engajamento e retenção.",
 "Retail space-planning tool to help teams organize shelves and product layout more efficiently.": "Ferramenta de planejamento de espaço no varejo para ajudar as equipes a organizar gôndolas e disposição de produtos com mais eficiência.",
 "UX improvements for an e-learning platform, making courses easier to navigate and complete.": "Melhorias de UX para uma plataforma de e-learning, tornando os cursos mais fáceis de navegar e concluir.",
 "Checkout and shopping cart redesign focused on reducing friction and cart abandonment.": "Redesign do checkout e do carrinho de compras focado em reduzir fricção e abandono de carrinho.",
 "Digital ordering experience for a pizzeria, from menu browsing to delivery tracking.": "Experiência digital de pedidos para uma pizzaria, da navegação no cardápio ao acompanhamento da entrega.",
 "Designing a self-serve platform that helps Dell's engineering domains publish, discover and govern data products — turning a tangle of siloed pipelines into a single, trustworthy data mesh.": "Projeto de uma plataforma self-service que ajuda os domínios de engenharia da Dell a publicar, descobrir e governar produtos de dados — transformando um emaranhado de pipelines isolados em um único data mesh confiável.",
 "Faster time-to-publish for new data products": "Menos tempo para publicar novos produtos de dados",
 "Increase in cross-team data reuse": "Aumento no reuso de dados entre equipes",
 "Task success rate in usability testing": "Taxa de sucesso nas tarefas em testes de usabilidade",
 "Dell's engineering organization had grown into dozens of independent domain teams, each producing valuable data with no consistent way to share it. Analysts and engineers spent more time hunting for datasets and re‑building pipelines than actually using data to make decisions.": "A organização de engenharia da Dell havia crescido para dezenas de equipes de domínio independentes, cada uma produzindo dados valiosos sem uma forma consistente de compartilhá-los. Analistas e engenheiros gastavam mais tempo procurando datasets e reconstruindo pipelines do que usando os dados para tomar decisões.",
 "I partnered with a cross-functional squad to design the interface layer of a new internal data mesh platform — the tool every domain team would use to publish, discover and govern their data products.": "Atuei com um squad multidisciplinar no design da camada de interface de uma nova plataforma interna de data mesh — a ferramenta que todas as equipes de domínio usariam para publicar, descobrir e governar seus produtos de dados.",
 "Through interviews with data owners and consumers across six business units, three recurring pain points surfaced:": "Por meio de entrevistas com donos e consumidores de dados de seis unidades de negócio, surgiram três dores recorrentes:",
 "No shared catalog — teams didn't know which datasets already existed, so duplicate pipelines were common.": "Nenhum catálogo compartilhado — as equipes não sabiam quais datasets já existiam, então pipelines duplicados eram comuns.",
 "Zero context on data quality, ownership, or freshness before teams committed to using a dataset.": "Nenhum contexto sobre qualidade, responsável ou atualização dos dados antes de as equipes decidirem usar um dataset.",
 "Publishing a new data product required filing tickets with a central platform team, creating weeks of delay.": "Publicar um novo produto de dados exigia abrir chamados com uma equipe central de plataforma, gerando semanas de atraso.",
 "We ran a series of collaborative workshops to map the end-to-end journey of both data producers and consumers, then translated those flows into low-fidelity wireframes tested with 14 engineers across three sprints.": "Realizamos uma série de workshops colaborativos para mapear a jornada completa de produtores e consumidores de dados e, depois, traduzimos esses fluxos em wireframes de baixa fidelidade testados com 14 engenheiros ao longo de três sprints.",
 "Key decisions were validated through moderated usability sessions, iterating on the catalog's search and filtering logic, the data product \"contract\" page, and the self-serve publishing flow.": "As principais decisões foram validadas em sessões de usabilidade moderadas, iterando na lógica de busca e filtros do catálogo, na página de \"contrato\" do produto de dados e no fluxo de publicação self-service.",
 "The final platform gives every domain team a self-serve console to publish new data products in minutes, complete with ownership, SLAs and schema documentation baked in. Consumers get a searchable catalog with trust signals — freshness, quality score and lineage — visible before they ever query a dataset.": "A plataforma final oferece a cada equipe de domínio um console self-service para publicar novos produtos de dados em minutos, já com responsável, SLAs e documentação de schema incluídos. Os consumidores têm um catálogo pesquisável com sinais de confiança — atualização, nota de qualidade e linhagem — visíveis antes mesmo de consultar um dataset.",
 "A lightweight approval workflow replaced the old ticketing process, cutting the time to publish a new data product from weeks to hours.": "Um fluxo de aprovação leve substituiu o antigo processo de chamados, reduzindo o tempo para publicar um novo produto de dados de semanas para horas.",
 "Redesigning Zoom's Lego e-commerce store so parents and schools can browse, trust and buy educational robotics kits with confidence.": "Redesign da loja virtual de Lego da Zoom para que pais e escolas possam navegar, confiar e comprar kits de robótica educacional com segurança.",
 "Increase in purchases after the redesign": "Aumento nas compras após o redesign",
 "Parents & enrolled schools": "Pais e escolas parceiras",
 "Conversion & trust": "Conversão e confiança",
 "Zoom Education for Life, besides providing educational solutions with Lego toys, also has the right to sell Lego robotics products, focusing on parents and children already enrolled in schools that have contracted the ZOOM service.": "A Zoom Education for Life, além de fornecer soluções educacionais com brinquedos Lego, também tem o direito de vender produtos de robótica Lego, com foco em pais e crianças já matriculados em escolas que contrataram o serviço da ZOOM.",
 "Redesign the e-commerce with the aim of increasing sales by at least 5%.": "Redesenhar o e-commerce com o objetivo de aumentar as vendas em pelo menos 5%.",
 "Exploratory interview": "Entrevista exploratória",
 "with stakeholders to understand in depth the company's desires, difficulties, previous attempts that did not work out and gathering requirements.": "com stakeholders para entender a fundo os desejos e dificuldades da empresa, tentativas anteriores que não deram certo e levantar requisitos.",
 "Internal data research": "Pesquisa em dados internos",
 "to understand who the potential buyer is. Zoom has been on the market since 1996, so research is naturally the first step, as it has a lot of data and knowledge at its disposal.": "para entender quem é o potencial comprador. A Zoom está no mercado desde 1996, então a pesquisa é naturalmente o primeiro passo, já que dispõe de muitos dados e conhecimento.",
 "CSD Workframe": "Matriz CSD",
 "were created according to data collected from Zoom to be as assertive as possible when creating the solution.": "— elaboração baseada nos dados coletados da Zoom, para ser o mais assertivo possível na criação da solução.",
 "User Journey Map": "Mapa de jornada do usuário",
 "Wireframes and Prototype": "Wireframes e protótipo",
 "Wireframes and a prototype were created to undergo stakeholders approval.": "Wireframes e um protótipo foram criados para passar pela aprovação dos stakeholders.",
 "Wireframe": "Wireframe",
 "Prototype": "Protótipo",
 "Redesigning Moodle, the world's largest open-source education platform, to simplify a confusing interface and remove teachers' need to hire outside help just to use it.": "Redesign do Moodle, a maior plataforma educacional de código aberto do mundo, para simplificar uma interface confusa e eliminar a necessidade de os professores contratarem ajuda externa apenas para usá-la.",
 "Got a 10 on the final paper": "Nota 10 no trabalho final",
 "Moodle is the largest open source education platform in the world, and as a final project for my college course, my colleagues and I decided to redesign it. Moodle has too many features, an old-fashioned visual style and a difficult technical language for its users (professors). These problems make it so confusing to complete tasks that some professors don't even use it, or need assistants to help them.": "O Moodle é a maior plataforma educacional de código aberto do mundo e, como projeto final da faculdade, meus colegas e eu decidimos redesenhá-lo. O Moodle tem funcionalidades demais, um visual antiquado e uma linguagem técnica difícil para seus usuários (professores). Esses problemas tornam tão confuso concluir tarefas que alguns professores nem o utilizam ou precisam de assistentes para ajudá-los.",
 "Auditing the Existing Interface": "Auditoria da interface existente",
 "We started by mapping every screen a professor touches day to day, annotating where the language, hierarchy and visual density were creating friction.": "Começamos mapeando cada tela que um professor usa no dia a dia, anotando onde a linguagem, a hierarquia e a densidade visual geravam fricção.",
 "Make it easier for teachers to use the platform so that there is no need to hire assistants.": "Facilitar o uso da plataforma pelos professores para que não seja necessário contratar assistentes.",
 "Desk Research:": "Pesquisa de mesa:",
 "An in-depth study of Moodle and the future of distance education was carried out, drawing on previous research by respected scholars in Brazil.": "Foi feito um estudo aprofundado do Moodle e do futuro da educação a distância, com base em pesquisas anteriores de estudiosos respeitados no Brasil.",
 "Think Aloud": "Think Aloud",
 "allowed us to obtain individual perceptions and recommendations from the users.": "permitiu obter percepções e recomendações individuais dos usuários.",
 "Nielsen's Heuristics": "Heurísticas de Nielsen",
 "served as a guide for us to apply the best design practices.": "serviram de guia para aplicarmos as melhores práticas de design.",
 "Card Sorting": "Card Sorting",
 "Card sorting": "Card sorting",
 "testing was carried out with professors in groups of three so they could organize the cards in a coherent order to them, so we could reorganize the site map.": "foi realizado com professores em grupos de três para que organizassem os cartões em uma ordem coerente para eles, permitindo reorganizarmos o mapa do site.",
 "Final wireframes": "Wireframes finais",
 "The proposal for the new design (wireframes) was concluded based on the tests carried out, and with the approval of the panel of judges the team got a 10 on the final paper.": "A proposta do novo design (wireframes) foi concluída com base nos testes realizados e, com a aprovação da banca, a equipe tirou 10 no trabalho final.",
 "Designing a dedicated ordering app for Capricciosa, a home restaurant, so it could stand out from crowded delivery marketplaces and build a direct relationship with its own customers.": "Design de um app de pedidos próprio para a Capricciosa, um restaurante caseiro, para que ela se destaque nos marketplaces de delivery lotados e construa um relacionamento direto com seus clientes.",
 "The coronavirus pandemic \"forced\" restaurants to adapt to the delivery model. However, not only did existing establishments adapt to the new model, but people looking for extra income also entered the market, flooding traditional apps like iFood with competition.": "A pandemia de coronavírus \"forçou\" os restaurantes a se adaptarem ao modelo de delivery. Porém, não apenas os estabelecimentos existentes se adaptaram, como também pessoas em busca de renda extra entraram no mercado, inundando apps tradicionais como o iFood de concorrência.",
 "It wasn't enough to be on iFood — Capricciosa needed to stand out with its own app. With a fixed icon on the customer's phone, it would be one step ahead in the choice process, cutting through the anxiety of scrolling through dozens of options like on iFood. On top of that, the restaurant would gain much more knowledge about its customer base and the freedom to create coupons and targeted advertisements.": "Estar no iFood não era suficiente — a Capricciosa precisava se destacar com um app próprio. Com um ícone fixo no celular do cliente, ela sairia um passo à frente no processo de escolha, evitando a ansiedade de rolar por dezenas de opções como no iFood. Além disso, o restaurante passaria a conhecer muito melhor sua base de clientes e teria liberdade para criar cupons e anúncios direcionados.",
 "Meeting": "Reunião",
 "to understand the problems faced by the restaurant owner and gathering requirements.": "para entender os problemas enfrentados pelo dono do restaurante e levantar requisitos.",
 "Benchmarking": "Benchmarking",
 "was done to follow a usage pattern already established in the market and make small improvements in areas that I found necessary.": "foi feito para seguir um padrão de uso já estabelecido no mercado e fazer pequenas melhorias nas áreas que julguei necessárias.",
 "Redesigning a social learning network where kids learn using Lego toys — turning a barely-used platform with almost no features into an engaging, gamified experience for students, teachers and parents.": "Redesign de uma rede social de aprendizado em que crianças aprendem com brinquedos Lego — transformando uma plataforma pouco usada e quase sem funcionalidades em uma experiência envolvente e gamificada para alunos, professores e pais.",
 "Increase in access time, from 40 seconds to a peak of 7 minutes": "Aumento no tempo de acesso, de 40 segundos para um pico de 7 minutos",
 "Increase in the number of users, from 15,000 to 20,000": "Aumento no número de usuários, de 15.000 para 20.000",
 "Students, teachers & parents": "Alunos, professores e pais",
 "Engagement & retention": "Engajamento e retenção",
 "Zoom 360 is a social learning network for kids to learn using Lego toys. The old design had almost no features, so the average time was just 15 seconds. The platform had the potential for 45 thousand users, but only 15 thousand used it.": "O Zoom 360 é uma rede social de aprendizado na qual crianças aprendem com brinquedos Lego. O design antigo tinha quase nenhuma funcionalidade, então o tempo médio de uso era de apenas 15 segundos. A plataforma tinha potencial para 45 mil usuários, mas apenas 15 mil a utilizavam.",
 "Redesign and ideate new features for Zoom 360 to increase the number of users and time spent using the platform.": "Redesenhar e idear novas funcionalidades para o Zoom 360 a fim de aumentar o número de usuários e o tempo de uso da plataforma.",
 "Low engagement — the old design had almost no features and sessions lasted only seconds.": "Baixo engajamento — o design antigo tinha quase nenhuma funcionalidade e as sessões duravam apenas segundos.",
 "Untapped potential — thousands of registered users simply weren't coming back to the platform.": "Potencial não aproveitado — milhares de usuários cadastrados simplesmente não voltavam à plataforma.",
 "A sensitive audience — every new feature had to consider the emotional impact on children, especially around competition and rankings.": "Um público sensível — cada nova funcionalidade precisava considerar o impacto emocional nas crianças, especialmente em torno de competição e rankings.",
 "Meeting with stakeholders": "Reunião com stakeholders",
 "to understand the entire context in which Zoom 360 finds itself, the objectives, limitations and collect previously produced data.": "para entender todo o contexto em que o Zoom 360 se encontra, os objetivos, as limitações e coletar dados produzidos anteriormente.",
 "Users' journey": "Jornada dos usuários",
 "both of children and teachers. After all, what would be the impact of yet another tool on the lives of teachers who already have a large workload?": "tanto de crianças quanto de professores. Afinal, qual seria o impacto de mais uma ferramenta na vida de professores que já têm uma grande carga de trabalho?",
 "with company's teachers and psychologists to understand the impacts of some ideas presented at the previous meeting on early childhood education and psychology.": "com professores e psicólogos da empresa para entender os impactos de algumas ideias apresentadas na reunião anterior na educação infantil e na psicologia.",
 "Wireframes": "Wireframes",
 "for ideation and stakeholders approval and prototypes for developers.": "para ideação e aprovação dos stakeholders, e protótipos para os desenvolvedores.",
 "Data analysis": "Análise de dados",
 "Carrying out usability tests with children is a very big challenge, which requires, in addition to specific skills with the public, parental approval, so we were only able to analyze the data after the changes for evaluation.": "Realizar testes de usabilidade com crianças é um grande desafio, que exige, além de habilidades específicas com o público, a aprovação dos pais; por isso só conseguimos analisar os dados após as mudanças, para avaliação.",
 "The redesign centered on two pillars: a clearer timeline that surfaces students' work and progress, and a gamification layer that rewards achievement without publicly punishing anyone at the bottom of the ranking.": "O redesign se apoiou em dois pilares: uma timeline mais clara que destaca o trabalho e o progresso dos alunos, e uma camada de gamificação que recompensa conquistas sem punir publicamente quem está no fim do ranking.",
 "Timeline": "Timeline",
 "Gamification": "Gamificação",
 "The timeline shows the students' work, and to earn medals they need to take completed challenges. There, teachers also post additional classes, explanations about the challenge and it is also shown whether the student won a medal.": "A timeline mostra o trabalho dos alunos e, para ganhar medalhas, eles precisam concluir desafios. Nela, os professores também publicam aulas extras e explicações sobre o desafio, e também é exibido se o aluno ganhou uma medalha.",
 "One of the concerns regarding gamification was the psychological impact on children who occupy last positions. To overcome this problem, it was decided that the ranking would only show the top 5 placed.": "Uma das preocupações com a gamificação era o impacto psicológico nas crianças que ocupam as últimas posições. Para resolver isso, decidiu-se que o ranking mostraria apenas os 5 primeiros colocados.",
 "Designing Pricefy Space, a platform that helps retail chains negotiate, track and execute in-store space agreements with suppliers — turning scattered spreadsheets and paper contracts into one clear, auditable workflow.": "Design do Pricefy Space, uma plataforma que ajuda redes varejistas a negociar, acompanhar e executar acordos de espaço em loja com fornecedores — transformando planilhas dispersas e contratos em papel em um fluxo de trabalho claro e auditável.",
 "Contracts signed after the project completion": "Contratos fechados após a conclusão do projeto",
 "Pricefy Space is a platform that helps retail chains negotiate, track and execute in-store space agreements with suppliers — from shelf placement to seasonal displays. My role was to design the interface that turns hundreds of paper and spreadsheet-based negotiations into a single, auditable workflow for category managers, suppliers and store teams.": "O Pricefy Space é uma plataforma que ajuda redes varejistas a negociar, acompanhar e executar acordos de espaço em loja com fornecedores — da posição na gôndola a displays sazonais. Meu papel foi projetar a interface que transforma centenas de negociações feitas em papel e planilhas em um fluxo de trabalho único e auditável para gerentes de categoria, fornecedores e equipes de loja.",
 "Category teams were closing hundreds of space agreements a year with almost no shared visibility into what had already been signed, what was expiring, or how much occupancy and revenue each agreement was generating.": "As equipes de categoria fechavam centenas de acordos de espaço por ano com quase nenhuma visibilidade compartilhada sobre o que já havia sido assinado, o que estava vencendo ou quanta ocupação e receita cada acordo gerava.",
 "Contracts lived scattered across spreadsheets and email threads, with no shared record of what had been agreed.": "Os contratos ficavam espalhados entre planilhas e e-mails, sem um registro compartilhado do que havia sido combinado.",
 "Category managers had no easy way to see occupancy rates or compare offers across store types.": "Os gerentes de categoria não tinham uma forma fácil de ver taxas de ocupação ou comparar ofertas entre tipos de loja.",
 "Store teams often received execution instructions too late to activate new agreements on time.": "As equipes de loja muitas vezes recebiam as instruções de execução tarde demais para ativar novos acordos a tempo.",
 "with stakeholders to understand how industry negotiations work and ask: what, why, who, when and how.": "com stakeholders para entender como funcionam as negociações do setor e perguntar: o quê, por quê, quem, quando e como.",
 "Desk research": "Pesquisa de mesa",
 "to collect data from surveys and interviews previously carried out by Pricefy with the managers.": "para coletar dados de pesquisas e entrevistas feitas anteriormente pela Pricefy com os gerentes.",
 "Exploratory interviews": "Entrevistas exploratórias",
 "were conducted with 5 interested parties from medium-sized supermarket chains.": "foram realizadas com 5 interessados de redes de supermercados de médio porte.",
 "Exp. journey map": "Mapa de jornada de experiência",
 "to understand the current process of creating contracts and identify the most critical points.": "para entender o processo atual de criação de contratos e identificar os pontos mais críticos.",
 "Decoupage": "Decoupage",
 "was made analyzing the taped interviews and notes to find patterns of current problems, fears and definition of personas.": "foi feito analisando as entrevistas gravadas e as anotações para encontrar padrões de problemas atuais e medos, e definir as personas.",
 "Category Manager": "Gerente de categoria",
 "Supplier Account Manager": "Gerente de contas de fornecedor",
 "Store Operations Manager": "Gerente de operações de loja",
 "Negotiates shelf and display space with dozens of suppliers every month and needs one clear place to see what's already been agreed.": "Negocia espaço de gôndola e de displays com dezenas de fornecedores todo mês e precisa de um lugar claro para ver o que já foi acordado.",
 "Represents supplier brands in negotiations and wants transparency on contract status, deadlines and approvals.": "Representa marcas fornecedoras nas negociações e quer transparência sobre status de contratos, prazos e aprovações.",
 "Executes agreements on the shop floor and needs simple, unambiguous instructions delivered with enough lead time.": "Executa os acordos no chão de loja e precisa de instruções simples e inequívocas, entregues com antecedência suficiente.",
 "Ideate & Prototype": "Idealização e protótipo",
 "Early concepts were sketched on paper to test occupancy filters, agreement value breakdowns and availability calendars before moving into hi-fi screens.": "Os primeiros conceitos foram rascunhados no papel para testar filtros de ocupação, detalhamento do valor dos acordos e calendários de disponibilidade antes de partir para as telas de alta fidelidade."
};
  var KEY = 'lang', DEFAULT = 'pt';
  var norm = function(s){ return s.replace(/\s+/g,' ').trim(); };

  function getLang(){
    try{ var l = localStorage.getItem(KEY); if(l==='pt'||l==='en') return l; }catch(e){}
    return DEFAULT;
  }
  function saveLang(l){ try{ localStorage.setItem(KEY,l); }catch(e){} }

  var nodes = [];
  function collect(){
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode:function(n){
        var p = n.parentNode && n.parentNode.nodeName;
        if(p==='SCRIPT'||p==='STYLE'||p==='NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if(n.parentNode.closest && n.parentNode.closest('.lang-switch')) return NodeFilter.FILTER_REJECT;
        return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n; while((n = w.nextNode())){ nodes.push({node:n, en:n.nodeValue}); }
  }

  function lookup(en){
    var k = norm(en);
    // normaliza texto corrompido por codificação (index salvo com mojibake)
    if(DICT.hasOwnProperty(k)) return DICT[k];
    return null;
  }

  function apply(lang){
    nodes.forEach(function(o){
      if(lang==='en'){ o.node.nodeValue = o.en; return; }
      var t = lookup(o.en);
      if(t===null){ return; }
      var lead = /^\s/.test(o.en) ? ' ' : '', trail = /\s$/.test(o.en) ? ' ' : '';
      o.node.nodeValue = lead + t + trail;
    });
    document.documentElement.lang = lang==='pt' ? 'pt-BR' : 'en';
    var first = document.querySelector('title');
    if(first){
      if(!first.dataset.en) first.dataset.en = first.textContent;
      first.textContent = first.dataset.en;
    }
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      var on = b.dataset.lang===lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true':'false');
    });
  }

  function css(){
    var s = document.createElement('style');
    s.textContent =
      '.lang-switch{display:inline-flex;border:1px solid rgba(255,255,255,.25);border-radius:999px;overflow:hidden;background:rgba(38,38,38,.75);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);}'+
      '.lang-switch button{all:unset;cursor:pointer;padding:6px 13px;font:700 12px/1 "Helvetica Neue",Arial,sans-serif;letter-spacing:1.5px;color:#fff;opacity:.7;transition:background .25s,color .25s,opacity .25s;}'+
      '.lang-switch button:hover{opacity:1;color:#c6ff3d;}'+
      '.lang-switch button.active{background:#c6ff3d;color:#262626;opacity:1;}'+
      '.lang-switch button:focus-visible{outline:2px solid #c6ff3d;outline-offset:-2px;}'+
      '.lang-switch.floating{position:fixed;top:18px;right:18px;z-index:9999;}'+
      'header.nav nav ul{align-items:center;}';
    document.head.appendChild(s);
  }

  function build(){
    var box = document.createElement('div');
    box.className = 'lang-switch';
    box.setAttribute('role','group');
    box.setAttribute('aria-label','Idioma / Language');
    box.innerHTML = '<button type="button" data-lang="pt" aria-label="Português">PT</button><button type="button" data-lang="en" aria-label="English">EN</button>';
    box.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      saveLang(b.dataset.lang); apply(b.dataset.lang);
    });
    var ul = document.querySelector('header.nav nav ul');
    if(ul){ var li = document.createElement('li'); li.appendChild(box); ul.appendChild(li); }
    else { box.classList.add('floating'); document.body.appendChild(box); }
  }

  function init(){
    css(); build(); collect();
    var t = document.querySelector('title'); if(t) t.dataset.en = t.textContent;
    apply(getLang());
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
