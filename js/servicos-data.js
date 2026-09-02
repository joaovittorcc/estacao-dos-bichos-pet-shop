/**
 * CATÁLOGO DE SERVIÇOS - Estação dos Bichos Pet Shop
 *
 * FORMATO DE CADA SERVIÇO:
 * {
 *   id, categoria, nome, descricao,
 *   preco: número (valor "a partir de" — ponto de partida, não preço fechado),
 *   imagem: "https://..." ou null,
 *   destaque: false,
 *   exemplo: true          // true = item de demonstração
 * }
 *
 * IMPORTANTE: Todos os itens abaixo são EXEMPLOS (exemplo: true).
 * A ficha de pesquisa (prompt_design_stitch.md) NÃO confirma nenhum serviço,
 * produto ou preço específico da Estação dos Bichos — só confirma o TIPO de
 * negócio ("pet shop + banho e tosa + consultório veterinário + hospedagem
 * (hotelzinho)") e a lista de "categorias prováveis": Banho e Tosa,
 * Consultório Veterinário, Ração/Petiscos, Brinquedos e Acessórios,
 * Hospedagem/Hotelzinho. Essas 5 categorias vieram direto da ficha.
 *
 * Nenhum nome de serviço específico (ex.: "Tosa Higiênica", "Consulta de
 * Rotina") ou preço aparece em nenhuma fonte primária pesquisada — são
 * exemplos plausíveis para ilustrar como o catálogo real funcionaria,
 * marcados com "a partir de R$X" (nunca um preço fechado) e claramente
 * sinalizados via exemplo: true + aviso fixo no topo do site.
 *
 * As 4 fotos usadas (hotlinks lh3.googleusercontent.com) vieram do único
 * export do Stitch para este cliente que trouxe HTML completo
 * (stitch-export/.../p_gina_inicial_esta_o_dos_bichos/code.html): uma foto
 * de banho/tosa, uma de consultório veterinário, uma de prateleiras de
 * produtos (usada aqui para "Ração e Petiscos") e uma de área de
 * hospedagem/creche. Não há foto própria para "Brinquedos e Acessórios" no
 * export — os itens dessa categoria ficam sem foto (cards em formato lista),
 * igual ao padrão já usado em outros sites do lote quando não existe uma
 * imagem correspondente confiável. Ver README para detalhes.
 */

window.CATEGORIAS = {
    'banho-tosa': {
        titulo: 'Banho e Tosa',
        icone: 'content_cut',
        descricao: 'Higiene e estética para o seu pet — categoria confirmada no tipo de negócio da ficha de pesquisa.'
    },
    'consultorio-veterinario': {
        titulo: 'Consultório Veterinário',
        icone: 'medical_services',
        descricao: 'Consultas e cuidados clínicos — categoria confirmada no tipo de negócio da ficha de pesquisa.'
    },
    'racao-petiscos': {
        titulo: 'Ração e Petiscos',
        icone: 'nutrition',
        descricao: 'Alimentação para o seu pet — categoria citada como provável na ficha de pesquisa.'
    },
    'brinquedos-acessorios': {
        titulo: 'Brinquedos e Acessórios',
        icone: 'toys',
        descricao: 'Itens para o dia a dia do seu pet — categoria citada como provável na ficha de pesquisa.'
    },
    'hospedagem': {
        titulo: 'Hospedagem',
        icone: 'nightlight',
        descricao: 'Hotelzinho para o seu pet — categoria confirmada no tipo de negócio da ficha de pesquisa ("hospedagem (hotelzinho)").'
    }
};

window.SERVICOS = [
    {
        id: 'banho-tosa-higienico',
        categoria: 'banho-tosa',
        nome: 'Banho e Tosa Higiênica',
        descricao: 'Banho completo com produtos apropriados e tosa higiênica (patinhas, região íntima e rosto). Exemplo ilustrativo — pacote real e valor a confirmar com a loja.',
        preco: 60,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG21wTJPE3ctwF0AKgIMsn5IXq6te46VRm7ccB3jFUVWuG9qlP3k-Nb4jm4l2Ov9VxwS5d4BHG7qLPORoWzlxDnJTCmv0rdarXbBkACIX1Z303VNTsLLkmAAfm6rAf0GoHHYHkkLtoGOLjOVBwCYtmOXWvCEP2MQAXLjbfNgXaXpD3SbPVgJUKjJ35LkC_cPMIAyAQsfYDuJ92gOkJyazp7iIOh-CHQLEJprgBu_3yRddwWUGTsDnH3A',
        destaque: true,
        exemplo: true
    },
    {
        id: 'banho-tosa-tesoura',
        categoria: 'banho-tosa',
        nome: 'Tosa na Tesoura',
        descricao: 'Tosa de acabamento na tesoura, com hidratação. Exemplo ilustrativo de como o cardápio de serviços de estética poderia ser detalhado.',
        preco: 90,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'consulta-veterinaria-rotina',
        categoria: 'consultorio-veterinario',
        nome: 'Consulta Veterinária de Rotina',
        descricao: 'Avaliação clínica geral com veterinário da casa. Exemplo ilustrativo — especialidades e valores reais do consultório a confirmar com a loja.',
        preco: 90,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL4k7_Sh0_0jOkSeprEqaQZWRoelqNh3mDaSDi92EqtgNSnta2QGZm4Pv_IWaj-ax4cIupizzCMjvnZvGxQzpnlLz5rQJsQSiyxlzkPxAFXL7wn8vcGW_-bgCQLF_o721t9Raz3OPkryPXDdpPzu8AzHx7_0AglccQowCXw655a3Nl928VTcfXt656bfS8Gj-WjIRHyc9SqIrp43OzfN_sgAyVWxTuMRe3FtXhju4z2DMMQ0z3o4kuBQ',
        destaque: true,
        exemplo: true
    },
    {
        id: 'vacinacao',
        categoria: 'consultorio-veterinario',
        nome: 'Vacinação',
        descricao: 'Aplicação de vacinas com acompanhamento da carteirinha do pet. Exemplo ilustrativo — protocolo e valores reais a confirmar com a loja.',
        preco: 50,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'racao-premium-caes',
        categoria: 'racao-petiscos',
        nome: 'Ração Premium para Cães',
        descricao: 'Linha de ração premium, pacote de exemplo. Marcas e tamanhos reais disponíveis na loja a confirmar.',
        preco: 120,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhr2oq4lLXNatgYqhdIQJn482gA6ClO8bIpZiR9aGUp2K3rGz2Ypks4c2VQ5gy5JAqOoJlvoiDD3BXDBEiYQVKxE88JZTCnJRD0OTM67AzGT35EhgEpRltU1VI_eZ0tdzkgZ8agMsLAtX3V2rvaOmHb7uUUnPxEnAYL51mtMK5uar6F6tvWh6ba5FAQnYfVks6O7C8I4WL3cGOykbUKKUoEkMRghRlld0J2pzJVqENkGmaCkVfTbcBNg',
        destaque: true,
        exemplo: true
    },
    {
        id: 'petiscos-naturais',
        categoria: 'racao-petiscos',
        nome: 'Petiscos Naturais',
        descricao: 'Petiscos para recompensa e adestramento. Exemplo ilustrativo — sabores e marcas reais a confirmar com a loja.',
        preco: 20,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'brinquedo-mordedor',
        categoria: 'brinquedos-acessorios',
        nome: 'Brinquedo Mordedor',
        descricao: 'Brinquedo resistente para cães. Exemplo ilustrativo do tipo de item de acessórios da loja.',
        preco: 25,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'coleira-guia',
        categoria: 'brinquedos-acessorios',
        nome: 'Coleira e Guia',
        descricao: 'Conjunto de coleira e guia para passeio. Exemplo ilustrativo — modelos e tamanhos reais a confirmar com a loja.',
        preco: 45,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'hospedagem-diaria',
        categoria: 'hospedagem',
        nome: 'Hospedagem Diária (Hotelzinho)',
        descricao: 'Diária de hospedagem com alimentação e recreação. Exemplo ilustrativo — estrutura e valores reais do hotelzinho a confirmar com a loja.',
        preco: 70,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8LL_Itdy_ZeY38qaKzdFZlN8k73ClvVj4x__5RnVveh8l7v72p7loUYUW4KYdZ6v0oEXeaFjMkM9SsasP-ED1jWNqF7g841vRQwzaqAYKFzUa8Z7y6XUAHrAyDbkSGL5N-Bl6ael4JYia3WU8_1OqzTIM_IF3F1dEQir0F_Exz2Iv9bYs3S2FJxKRFBPrUoWGkYt-jTlGwO8TxAK81FLuqXD1N6YwTKaRyvp5JEMX6Bg3_jMG8myMfg',
        destaque: true,
        exemplo: true
    },
    {
        id: 'hospedagem-fim-de-semana',
        categoria: 'hospedagem',
        nome: 'Pacote Fim de Semana',
        descricao: 'Pacote de hospedagem para o fim de semana. Exemplo ilustrativo — condições reais do pacote a confirmar com a loja.',
        preco: 150,
        imagem: null,
        destaque: false,
        exemplo: true
    }
];
