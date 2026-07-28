export interface KeyMetrics {
  stage?: string;
  amount?: string;
  leadInvestor?: string;
  participatingInvestors?: string[];
  valuation?: string;
  arr?: string;
  headcount?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Rodadas" | "Fundos" | "Perfis" | "Análises";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  heroHighlight?: boolean;
  coverImage?: string;
  imageCaption?: string;
  companyName?: string;
  keyMetrics?: KeyMetrics;
  content: string;
  excerpt: string;
  tags: string[];
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "a-anatomia-da-serie-b-da-nexus-fintech",
    title: "A anatomia da Série B de R$ 180M da Nexus: Valuations pré-hype e a volta das métricas de eficiência",
    subtitle: "Enquanto o mercado especulava um downround, a fintech paulista fechou a captação com crescimento de 3.2x no ARR sem gastar mais de 40% do caixa da rodada anterior.",
    category: "Rodadas",
    author: {
      name: "Rodrigo Mendonça",
      role: "Editor Executivo de Venture Capital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "27 de Julho, 2026",
    readTime: "7 min de leitura",
    featured: true,
    heroHighlight: true,
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Mariana Alcantara, cofundadora e CEO da Nexus Fintech, na sede da empresa na Faria Lima.",
    companyName: "Nexus Fintech",
    keyMetrics: {
      stage: "Série B",
      amount: "R$ 180 M (US$ 32M)",
      leadInvestor: "Kaszek Ventures",
      participatingInvestors: ["Monashees", "Canary", "QED Investors"],
      valuation: "R$ 820 M (Est.)",
      arr: "R$ 95 M (+220% YoY)",
      headcount: "140 colaboradores",
    },
    excerpt: "Sem alarde e longe das festas de comemoração de aportes, a Nexus provou que governança financeira rigorosa ainda é a maior moeda de troca no ecossistema atual.",
    tags: ["Rodadas", "Fintech", "Série B", "Kaszek", "Monashees"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">Nos últimos dezoito meses, o ecossistema brasileiro de venture capital assistiu a uma varredura silenciosa. Empresas que captaram a valuations exorbitantes em 2021 tentaram esticar o *runway* o máximo possível para evitar encarar o mercado. A Nexus Fintech escolheu o caminho inverso.</p>

<p>Fundada em 2022 por Mariana Alcantara e Felipe Zanin, a infraestrutura de liquidação de recebíveis para o varejo B2B acaba de formalizar um aporte Série B de **R$ 180 milhões**, liderado pela **Kaszek**, com participação da Monashees e QED Investors.</p>

<blockquote class="my-6 border-l-4 stroke-[#C77B3F]">
"Não vendemos um sonho de inteligência artificial generativa nem prometemos mudar a cultura de consumo do brasileiro em seis meses. Nós construímos o encanamento pesado por onde passam R$ 12 bilhões ao ano."
<cite class="block text-sm not-italic mt-2 text-[#574F4B]">— Mariana Alcantara, CEO da Nexus</cite>
</blockquote>

<h2>O contraponto ao Hype: Queima de caixa controlada</h2>

<p>O que chamou a atenção dos investidores não foi apenas o crescimento do receita recorrente anual (ARR), que saltou de R$ 30 milhões para **R$ 95 milhões** em doze meses, mas a relação de eficiência de capital. Para cada R$ 1,00 queimado de caixa operacional, a Nexus gerou R$ 2,40 em novo ARR — um indicador que coloca a companhia no quartil superior global do SaaS financeiro.</p>

<p>De acordo com fontes com conhecimento direto dos termos da rodada, a valuation pós-dinheiro ficou estimada em **R$ 820 milhões**, representando um múltiplo de aproximadamente 8.6x ARR. Em um mercado onde múltiplos de 15x a 20x viraram fumaça, o precificação pé no chão permitiu uma rodada limpa, sem estruturas de liquidação preferencial agressivas (*clean terms*).</p>

<h2>Por que os fundos voltaram a assinar cheques grandes?</h2>

<p>O movimento da Kaszek e Monashees reflete uma tese clara para a segunda metade da década: o reaquecimento do VC brasileiro não virá da busca por novas verticais mirabolantes, mas do consolidamento das infraestruturas essenciais do país.</p>

<ul>
  <li><strong>Conectividade bancária legada:</strong> A Nexus substituiu conexões manuais com cinco grandes bancos por APIs proprietárias com tempo de resposta sub-second.</li>
  <li><strong>Inadimplência represada:</strong> O motor de crédito automatizado da empresa manteve a inadimplência acima de 90 dias em apenas 1.1%, contra média de 4.8% do setor.</li>
  <li><strong>Estrutura enxuta:</strong> O time total subiu de 90 para 140 pessoas, mantendo a receita por colaborador acima de R$ 670 mil.</li>
</ul>

<p>A alocação dos R$ 180 milhões será direcionada para a expansão do produto de crédito colateralizado e para a integração nativa com os principais sistemas de gestão ERP do país.</p>
    `,
  },
  {
    id: "2",
    slug: "por-que-fundos-locais-estao-desfazendo-apostas-em-healthtechs-d2c",
    title: "O fim da ilusão D2C na saúde: Por que os fundos locais estão redirecionando capital para o B2B profundo",
    subtitle: "Custos de aquisição explodiram 400% no Google e Meta, forçando startups de telemedicina e assinaturas de bem-estar a mudarem de rumo ou encararem a falência.",
    category: "Análises",
    author: {
      name: "Guilherme Siqueira",
      role: "Repórter Sênior de Tecnologia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "25 de Julho, 2026",
    readTime: "9 min de leitura",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Laboratório e centro de desenvolvimento da BioTech Veda, um dos raros cases de sucesso B2B do setor.",
    companyName: "Análise de Setor",
    excerpt: "Subvenção de tráfego pago não constrói diferencial competitivo em saúde. A migração forçada para planos corporativos é a última cartada das startups do setor.",
    tags: ["Análises", "Healthtech", "CAC", "B2B", "Venture Capital"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">A conta finalmente chegou para a primeira onda de healthtechs brasileiras focadas no consumidor final (Direct-to-Consumer). Entre 2020 e 2023, dezenas de plataformas de consultas online, assinaturas de vitaminas manipuladas e clínicas virtuais captaram mais de US$ 250 milhões com a promessa de digitalizar a saúde da classe média.</p>

<p>Hoje, o diagnóstico nos comitês de investimento dos maiores fundos do país é unânime: a matemática do CAC (Custo de Aquisição de Cliente) versus LTV (Valor do Cliente ao Longo do Tempo) quebrou irremediavelmente.</p>

<h2>A espiral inflacionária dos anúncios online</h2>

<p>Levantamento exclusivo realizado pelo <em>The Round</em> com dados de sete startups do setor aponta que o custo para adquirir um paciente pagante saltou de <strong>R$ 85,00 em 2021 para R$ 420,00 em 2026</strong>. Ao mesmo tempo, a taxa de retenção após o terceiro mês caiu de 42% para menos de 18%.</p>

<blockquote class="my-6 border-l-4 stroke-[#C77B3F]">
"Queimar dólares de venture capital para pagar leilão de palavras-chave no Meta e Google nunca foi inovação em saúde. Foi apenas arbitragem de mídia que acabou quando o dinheiro barato sumiu."
<cite class="block text-sm not-italic mt-2 text-[#574F4B]">— Gestor de VC paulista em condição de anonimato</cite>
</blockquote>

<h2>O pivô desesperado para o canal corporativo</h2>

<p>Para sobreviver, 8 em cada 10 healthtechs do portfólio dos principais fundos locais estão tentando migrar às pressas para o modelo B2B2C, vendendo seus serviços como benefício para médias e grandes empresas.</p>

<p>O problema? O ciclo de venda corporativa em RHs dura de 6 a 12 meses, exige compliance regulatório denso com a ANS e coloca as startups em rota de colisão direta com gigantes estabelecidas como SulAmérica, Bradesco Saúde e Hapvida.</p>

<h2>Onde o dinheiro novo está fluindo?</h2>

<p>Em contrapartida ao recuo no D2C, fundos como Canary, Maya Capital e Astella têm concentrado cheques em teses de <strong>HealthTech de infraestrutura</strong>:</p>

<ul>
  <li>Automação de faturamento glosado para hospitais via IA.</li>
  <li>Interoperabilidade de prontuários eletrônicos entre redes concorrentes.</li>
  <li>Softwares de gestão logística de insumos cirúrgicos.</li>
</ul>

<p>A lição é clara: no setor de saúde brasileiro, quem paga a conta raramente é o paciente final — e ignorar esse fato custou caro ao ecossistema.</p>
    `,
  },
  {
    id: "3",
    slug: "perfil-bruno-albuquerque-fundador-da-vortex-logistics",
    title: "O estilo antissocial de Bruno Albuquerque, o founder que construiu uma gigante de logística sem dar entrevistas",
    subtitle: "Diferente dos founders de palco, o CEO da Vortex passou 5 anos operando no interior de São Paulo até atingir R$ 500M em ARR. Agora, ele quebra o silêncio.",
    category: "Perfis",
    author: {
      name: "Camila Paes",
      role: "Repórter Especial de Perfis",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "22 de Julho, 2026",
    readTime: "11 min de leitura",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Bruno Albuquerque nos bastidores do centro de distribuição automatizado da Vortex em Jundiaí (SP).",
    companyName: "Vortex Logistics",
    keyMetrics: {
      stage: "Lucrativo / Bootstrap estendido",
      amount: "R$ 45 M captados no total",
      leadInvestor: "Igah Ventures",
      arr: "R$ 510 M em 2025",
      headcount: "1.200 colaboradores",
    },
    excerpt: "Sem palestras em eventos de inovação, sem posts motivacionais no LinkedIn e sem coquetéis de networking: como a obsessão por unit economics transformou um galpão em Jundiaí em uma das empresas mais rentáveis do país.",
    tags: ["Perfis", "Founder", "Logística", "Bootstrap", "Vortex"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">Se você procurar pelo nome de Bruno Albuquerque nas listas de '30 Under 30' ou nas fotos dos eventos mais concorridos da Faria Lima dos últimos cinco anos, não encontrará nada. O fundador da Vortex Logistics construiu um hábito quase obsessivo de recusar convites para painéis, podcasts e reportagens.</p>

<p>Enquanto seus pares celebravam valuations teóricos em posts no LinkedIn, Bruno passava as madrugadas acompanhando o carregamento de caminhões de carga fracionada no terminal industrial de Jundiaí.</p>

<h2>A tese da baixa visibilidade e alto fluxo de caixa</h2>

<p>Engenheiro mecatrônico formado pela Poli-USP, Bruno fundou a Vortex em 2019 com R$ 400 mil economizados de seus tempos de consultoria. A premissa era simples: conectar frotas terceirizadas de pequeno porte a distribuidoras industriais utilizando algoritmo próprio de roteamento dinâmico.</p>

<blockquote class="my-6 border-l-4 stroke-[#C77B3F]">
"Existem dois tipos de empresas no Brasil: as que vivem para convencer investidores no PowerPoint e as que vivem para fazer a conta fechar na sexta-feira à tarde. Nós sempre fomos a segunda opção."
<cite class="block text-sm not-italic mt-2 text-[#574F4B]">— Bruno Albuquerque, Founder da Vortex</cite>
</blockquote>

<p>Em 2021, auge do dinheiro abundante, a Vortex levantou apenas R$ 45 milhões com a Igah Ventures, recusando propostas de fundos estrangeiros que queriam injetar três vezes mais capital em troca de metas agressivas de contratação.</p>

<h2>A mecânica dos R$ 500 milhões em receita</h2>

<p>Em vez de subsidiar frete para ganhar market share a qualquer custo, a Vortex focou em clientes de médio porte do agronegócio e da indústria química regional — nichos ignorados pelas grandes logtechs urbanas.</p>

<ul>
  <li><strong>Margem Ebitda Positiva:</strong> A empresa opera com margem Ebitda de 18%, feito raríssimo para o setor logístico.</li>
  <li><strong>Retenção de Motoristas:</strong> Taxa de turn-over de motoristas parceiros abaixo de 8% ao ano, impulsionada por pagamentos pontuais em D+1.</li>
  <li><strong>Tecnologia proprietária:</strong> Sistema de despacho preditivo que reduz o tempo de ociosidade dos caminhões em 34%.</li>
</ul>

<p>Perguntado sobre o motivo de abrir a casa agora, Bruno é direto: "Não estamos procurando validação. Estamos nos preparando para uma oferta pública inicial (IPO) no mercado local em 2027 e nossos clientes precisam saber que a governança é sólida."</p>
    `,
  },
  {
    id: "4",
    slug: "como-os-fundos-de-vc-brasileiros-estao-lidando-com-o-dry-powder-acumulado",
    title: "O dilema dos R$ 12 bilhões parados: Por que os fundos de VC brasileiros demoram para desdobrar o Dry Powder",
    subtitle: "Mesmo com recorde de capital não alocado em caixa, gestores locais recusam propostas de valuations inflacionados e impõem cláusulas rígidas em novos cheques.",
    category: "Fundos",
    author: {
      name: "Rodrigo Mendonça",
      role: "Editor Executivo de Venture Capital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "19 de Julho, 2026",
    readTime: "6 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Distrito financeiro em São Paulo, onde se concentram as principais gestoras de venture capital da América Latina.",
    companyName: "Panorama de Fundos",
    excerpt: "Investidores institucionais (LPs) exigem distribuições (DPI) antes de liberar chamadas de capital para novos fundos.",
    tags: ["Fundos", "Dry Powder", "Venture Capital", "LPs", "DPI"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">Estima-se que os fundos brasileiros de venture capital dedicados a estágios Seed e Série A tenham acumulado aproximadamente R$ 12 bilhões em *dry powder* (capital captado junto a LPs mas ainda não alocado em startups).</p>

<p>No entanto, a ritmo de assinatura de cheques continua em patamares significativamente mais lentos do que a média dos últimos cinco anos. O motivo? O fantasma do DPI (Distributed to Paid-In Capital).</p>

<h2>A pressão dos cotistas institucionais</h2>

<p>Family offices e fundos de pensão globais que investiram nos veículos de 2020 e 2021 querem ver retornos financeiros reais na conta, não apenas valorizações no papel (TVPI). Com poucas saídas via M&A e o mercado de IPOs fechado nos últimos anos, os gestores precisam ser cirúrgicos na alocação do capital restante.</p>

<blockquote class="my-6 border-l-4 stroke-[#C77B3F]">
"O tempo de assinar 30 cheques por ano esperando que 2 deem certo acabou. Agora os fundos assinam 6 cheques por ano e passam 80% do tempo dentro da operação das coligadas."
</blockquote>

<h2>Exigências renovadas em novos termos</h2>

<p>Nas poucas rodadas que estão saindo, os term sheets trazem cláusulas que haviam desaparecido no boom:</p>

<ul>
  <li>Direito de preferência e ratchet de proteção caso a rodada seguinte ocorra em valuation menor.</li>
  <li>Cadeiras obrigatórias no conselho com veto em decisões de remuneração de executivos.</li>
  <li>Auditoria independente prévia antes da liberação da segunda tranche de capital.</li>
</ul>
    `,
  },
  {
    id: "5",
    slug: "a-corrida-silenciosa da-infraestrutura-de-ia-no-brasil",
    title: "A corrida silenciosa da IA vertical: Por que as startups brasileiras estão evitando modelos genéricos",
    subtitle: "Em vez de tentar competir com OpenAI e Anthropic, founders locais estão criando LLMs customizados para o agronegócio, tributário e contencioso jurídico.",
    category: "Análises",
    author: {
      name: "Guilherme Siqueira",
      role: "Repórter Sênior de Tecnologia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "16 de Julho, 2026",
    readTime: "8 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Desenvolvimento de modelos de aprendizado profundo focados na legislação tributária brasileira.",
    companyName: "Tendências de IA",
    excerpt: "A complexidade regulatória e fiscal do Brasil virou uma barreira de proteção natural para as startups locais contra gigantes globais de tecnologia.",
    tags: ["Análises", "IA", "Agronegócio", "Legaltech", "LLM"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">Construir mais um wrapper de ChatGPT para fazer resumos de reuniões deixou de ser uma tese financiável em São Paulo. O verdadeiro fluxo de capital para inteligência artificial no Brasil encontrou refúgio na chamada **IA de nicho profundo**.</p>

<p>Startups que combinam bases de dados proprietárias altamente especializadas com modelos ajustados para as idiossincrasias brasileiras estão atraindo aportes Seed expressivos.</p>

<h2>O exemplo do setor tributário e jurídico</h2>

<p>Com mais de 40 novas regras fiscais publicadas por dia no Brasil, soluções genéricas de IA frequentemente cometem alucinações graves ao interpretar obrigações acessórias. Startups brasileiras como a TaxAI e a Juridix treinaram redes neurais com mais de 20 anos de jurisprudência do CARF e tribunais estaduais.</p>

<blockquote class="my-6 border-l-4 stroke-[#C77B3F]">
"O Vale do Silício nunca vai investir US$ 50 milhões para entender a substituição tributária do ICMS em São Paulo. Essa complexidade é a nossa maior fortaleza."
</blockquote>
    `,
  },
  {
    id: "6",
    slug: "kaszek-e-monashees-lideram-rodada-na-cleantech-solaris",
    title: "Solaris levanta R$ 90M para expandir geração distribuída inteligente para pequenas empresas",
    subtitle: "A greentech paranaense cresceu 400% conectando pequenas indústrias a usinas solares sem exigir investimentos em obras ou equipamentos.",
    category: "Rodadas",
    author: {
      name: "Rodrigo Mendonça",
      role: "Editor Executivo de Venture Capital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "12 de Julho, 2026",
    readTime: "5 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Parque fotovoltaico parceiro da Solaris no interior do Paraná.",
    companyName: "Solaris Greentech",
    keyMetrics: {
      stage: "Série A",
      amount: "R$ 90 M",
      leadInvestor: "Monashees",
      participatingInvestors: ["Kaszek", "Valor Capital"],
      valuation: "Não divulgado",
    },
    excerpt: "Geração distribuída de energia ganha tração com modelo asset-light e inteligência de despacho de carga.",
    tags: ["Rodadas", "Cleantech", "Solaris", "Monashees", "Série A"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">A Solaris Energia, startup curitibana focada na intermediação e otimização de energia renovável para médias e pequenas empresas, acaba de captar **R$ 90 milhões** em sua rodada Série A.</p>

<p>Liderada pela Monashees, com participação da Kaszek e Valor Capital, a captação permitirá que a empresa expanda sua atuação do Paraná e Santa Catarina para o Sudeste brasileiro.</p>
    `,
  },
  {
    id: "7",
    slug: "a-anatomia-de-um-downround-silencioso",
    title: "A anatomia de um downround silencioso: Como as startups reestruturam cap tables sem alarde",
    subtitle: "Em vez de anunciar redução de valuation em comunicado oficial, empresas utilizam notas conversíveis com descontos profundos e pay-to-play rigorosos.",
    category: "Análises",
    author: {
      name: "Guilherme Siqueira",
      role: "Repórter Sênior de Tecnologia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "08 de Julho, 2026",
    readTime: "8 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Reuniões extraordinárias de conselho têm focado na limpeza de cap tables pesados por preferências de liquidação.",
    companyName: "Investigação Editorial",
    excerpt: "Como advogados e founders renegociam a participação de investidores antigos para abrir espaço para novo capital de giro.",
    tags: ["Análises", "Cap Table", "Downround", "Governança"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">No papel, a última valuation oficial continua sendo aquela comemorada em 2021. Na prática, o capital novo está entrando com avaliações 50% a 70% menores do que o pico histórico.</p>

<p>Esta investigação traz detalhes dos mecanismos jurídicos mais utilizados pelas startups brasileiras para evitar o estigma público do *downround*.</p>
    `,
  },
  {
    id: "8",
    slug: "como-a-canary-redefiniu-o-estagio-pre-seed-no-brasil",
    title: "Entrevista exclusiva: Como o Canary enxerga os próximos 5 anos do ecossistema latino-americano",
    subtitle: "Os sócios do fundo pioneiro em pré-seed explicam por que continuam assinando os primeiros cheques de founders experientes e o que mudou na seleção de times.",
    category: "Fundos",
    author: {
      name: "Camila Paes",
      role: "Repórter Especial de Perfis",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "04 de Julho, 2026",
    readTime: "10 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Escritório do Canary em São Paulo, ambiente minimalista focado no acolhimento de founders no dia zero.",
    companyName: "Canary Ventures",
    excerpt: "Conversa aprofundada com os parceiros da Canary sobre resiliência de founders, atração de talentos seniores e disciplina de alocação.",
    tags: ["Fundos", "Canary", "Pre-Seed", "Entrevista", "Venture Capital"],
    content: `
<p class="lead font-medium text-xl text-[#4C0F16]">Como o primeiro fundo focado exclusivamente no 'day zero' dos founders no Brasil, o Canary acompanhou de perto a evolução da maturidade dos empreendedores de tecnologia no país.</p>

<p>Nesta entrevista conduzida no escritório da gestora em São Paulo, discutimos os critérios de escolha dos times de fundadores que estão nascendo na atual safra de 2026.</p>
    `,
  },
];
