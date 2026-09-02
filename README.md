# Estação dos Bichos Pet Shop — Vitrine Digital

Site demo de vitrine digital para pitch. Construído a partir de export do Google Stitch, com dados reais confirmados via pesquisa (`prompt_design_stitch.md`). Não é um site de e-commerce/agendamento online: não existe carrinho, sacola, cupom, calculadora de frete ou calendário de agendamento — cada card tem um botão **"Agende pelo WhatsApp"** que abre uma conversa já com o nome do serviço preenchido.

## Catálogo Demonstrativo

Todos os serviços e valores estão marcados com `exemplo: true` em `js/servicos-data.js`, e o site mostra um aviso fixo no topo: "VITRINE DEMONSTRATIVA". A ficha de pesquisa (`prompt_design_stitch.md`) **não confirma nenhum serviço, produto ou preço específico** da Estação dos Bichos — só confirma o **tipo de negócio** ("pet shop + banho e tosa + consultório veterinário + hospedagem (hotelzinho)") e a lista de **5 categorias prováveis**: Banho e Tosa, Consultório Veterinário, Ração e Petiscos, Brinquedos e Acessórios, Hospedagem.

Nenhum nome de serviço específico (ex.: "Banho e Tosa Higiênica", "Consulta Veterinária de Rotina") ou preço aparece em qualquer fonte primária pesquisada — são exemplos plausíveis para ilustrar como o catálogo real funcionaria, com preços marcados como "a partir de R$X" (nunca um valor fechado) e claramente sinalizados via `exemplo: true` + aviso fixo no topo.

## ⚠️ Unidade 1 — não confundir com a unidade 2

A ficha é explícita: a Estação dos Bichos tem **duas unidades**, com dados diferentes no Google Maps. Este site usa **exclusivamente os dados da unidade 1** (Av. C-208, 146, Jardim América — nota 4,6★ com 34 avaliações). A unidade 2 tem nota 4,7★ com 134 avaliações — **nenhum dado da unidade 2 foi usado aqui**, em nenhum texto, badge ou número de contato.

## Dados reais confirmados (unidade 1)

- Nome: Estação dos Bichos Pet Shop
- Endereço: Av. C-208, 146 - Jardim América, Goiânia-GO, CEP 74070-000
- Nota: 4,6★ (34 avaliações) no Google Maps
- Telefone: (62) 3928-1313 — confirmado na ficha do Google Maps
- Instagram: [@estacaodosbichospetshop](https://instagram.com/estacaodosbichospetshop) — 5.409 seguidores, 3.304 posts. Bio: "há 12 anos cuidando do seu Fofucho". Conta muito ativa (destaques recentes: "Evento 09/08", "Festa 10 Anos", "Inauguração")
- 12 anos de marca — usado no hero e no destaque "Tradição & Confiança" da página

## ⚠️ Atenção — WhatsApp NÃO confirmado por número exato

Este é o ponto mais importante para validar antes de qualquer uso real:

- O telefone **(62) 3928-1313** é confirmado na ficha do Google Maps, mas o formato (DDD + 8 dígitos, sem o "9" inicial) é típico de **linha fixa**, não de celular/WhatsApp.
- A pesquisa primária confirma que a Estação dos Bichos **usa WhatsApp** — o link "Site" do Maps aponta para `meulink.com.vc` (um link-na-bio genérico) e a bio do Instagram tem um link `wa.me` — mas **não foi possível capturar o número exato por trás desse link `wa.me`**.
- Os botões "Agende pelo WhatsApp" deste site usam o telefone fixo (62) 3928-1313 formatado como `wa.me/556239281313` — mesma convenção de melhor esforço usada nos outros sites do lote quando o WhatsApp não foi validado por handshake real. **Isso precisa ser validado com o cliente antes de qualquer uso real**: o link pode simplesmente não abrir uma conversa de WhatsApp válida, já que o número pode ser só linha fixa.
- Recomendação: pedir ao cliente o número de WhatsApp exato (provavelmente o mesmo que está por trás do link `wa.me` genérico na bio do Instagram) antes de publicar.

A solução digital atual do cliente (campo "Site" do Google Maps) aponta para `meulink.com.vc`, uma ferramenta de link-na-bio (tipo Linktree) — confirmado abrindo a página, é só uma lista de links, não um site próprio. Essa vitrine é o upgrade natural.

## O que o export do Stitch precisou de ajuste

O export trouxe uma única tela com `code.html` completo (`p_gina_inicial_esta_o_dos_bichos/code.html`), com problemas semelhantes aos outros clientes do lote:

- **Estatística fabricada ("+10.000 Pets Atendidos")**: o export incluía um destaque "+10.000 Pets Atendidos" na seção de credibilidade, sem nenhuma fonte que confirme esse número. **Removido.** Os 3 destaques usados aqui ("12 Anos de Tradição", "4,6★ no Google", "5,4 mil no Instagram") são todos dados confirmados na ficha de pesquisa.
- **Endereço divergente no rodapé**: o rodapé do export citava "Av. T-9, Jardim América" — endereço diferente do confirmado na ficha ("Av. C-208, 146"). **Corrigido** para o endereço real.
- **Texto em inglês misturado ao português**: o rodapé do export tinha "© 2024 Estação dos Bichos Pet Shop - 12 Years of Care in Jardim América, Goiânia" e a nav tinha itens em inglês ("Services", "About Us", "Location", "Contact"). **Todo o texto foi traduzido para português do Brasil**, conforme restrição do briefing.
- **Botão "Book Grooming" fixo na nav**: substituído pela combinação padrão do lote (badge de nota + busca + botão flutuante de WhatsApp no mobile), já que não existe agendamento online real — só contato via WhatsApp.
- **Links de rodapé sem destino ("Privacy Policy", "Terms of Service", "FAQ", "Careers", `href="#"`)**: são boilerplate genérico do Stitch, sem relação com o negócio. **Removidos** — o rodapé final só traz contato real (telefone, Instagram, endereço).
- **Cards de serviço**: o export tinha 4 cards fixos ("Banho e Tosa", "Consultório Veterinário", "Pet Shop Boutique", "Hospedagem & Creche") com sub-itens de exemplo (ex.: "Quartos Individuais", "Rações Super Premium") sem preço. Esses 4 cards foram a base para as **5 categorias completas** em `js/servicos-data.js` (a categoria "Ração e Petiscos" e "Brinquedos e Acessórios" foram separadas a partir do card único "Pet Shop Boutique" do export, já que a ficha lista as duas como categorias prováveis distintas), cada uma com 2 serviços de exemplo, preço "a partir de R$X" e botão "Agende pelo WhatsApp" religado de verdade.
- **Fotos usadas**: das 4 fotos com URL real no `code.html` (hotlinks `lh3.googleusercontent.com`), 1 foi usada como imagem de hero (cão sendo banhado) e as outras 3 foram reaproveitadas em `js/servicos-data.js` para os cards de Banho e Tosa, Consultório Veterinário e Ração/Petiscos. Não há foto própria para "Brinquedos e Acessórios" nem para o segundo item de cada categoria no export — esses ficam sem foto (cards em formato lista), igual ao padrão já usado em outros sites do lote quando não existe uma imagem correspondente confiável. Todas são fotos ilustrativas geradas por IA (Stitch/Google), não fotos reais da loja — sinalizado no `alt` da imagem do hero.
- **Sem carrinho/sacola/calendário**: mantido — cada card só tem "Agende pelo WhatsApp", sem acumular pedido, sem checkout, sem calendário de agendamento.

## Rodando localmente

```bash
npm install
npm run dev
```

Sobe o Tailwind em modo watch + live-server na porta **5010**.

Para gerar o CSS de produção sem subir servidor:

```bash
npm run build:css
```

## Pendente de validação com o cliente

- **Número exato de WhatsApp** (o telefone confirmado é provavelmente linha fixa — ver seção acima).
- Catálogo real completo, com nomes, descrições, fotos e preços de verdade (o que está aqui é só estrutura + 10 itens de exemplo em 5 categorias).
- Horário de funcionamento (não confirmado em nenhuma fonte primária pesquisada — não usado neste site).
- Confirmar se a unidade 1 (Av. C-208) é de fato a unidade que o cliente quer usar como referência para este site, já que existe uma unidade 2 com dados diferentes (4,7★/134 avaliações).
- Logo real da marca (o export do Stitch não trouxe nenhum ativo de logo para este cliente; o header usa só ícone + nome em texto).
