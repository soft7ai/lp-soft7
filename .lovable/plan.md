
# Plano: Rebranding para SoftSales com Nova Paleta de Cores

## Resumo

Vamos fazer o rebranding completo da marca, alterando o nome de "Soft7 AI" para "SoftSales" e aplicando a nova paleta de cores de forma moderna e profissional em todo o sistema.

---

## Nova Paleta de Cores

| Cor | HEX | Uso Principal |
|-----|-----|---------------|
| Azul Escuro | #030D1F | Background principal |
| Azul Médio | #0865B4 | Cor primária (botões, destaques) |
| Azul Claro | #4D98D6 | Acentos, hovers, gradientes |
| Gradient | #03060F → #0654C2 | Botões CTA, elementos hero |

---

## Arquivos a Modificar

### 1. Cores do Sistema (src/index.css)

**Tema Dark (principal):**
- Background: #030D1F (azul muito escuro)
- Card: tom mais claro do background
- Primary: #0865B4 → #4D98D6 (gradiente)
- Muted: tons de azul acinzentado
- Gradientes atualizados com as novas cores

**Variáveis CSS:**
- --gradient-primary: linear-gradient(135deg, #0654C2, #4D98D6)
- --gradient-button: linear-gradient(135deg, #0865B4, #4D98D6)
- --shadow-glow: tons de azul #0865B4

### 2. Componente Button (src/components/ui/button.tsx)

- Atualizar variante `gradient` com as novas cores
- Cores: from-[#0654C2] via-[#0865B4] to-[#4D98D6]

### 3. Componente CTA Button (src/components/ui/cta-button.tsx)

- Atualizar cores do glow e shimmer effect

### 4. Utilitários CSS (src/index.css)

- Atualizar classe `.text-gradient` com novas cores
- Atualizar `.bg-gradient-button`
- Atualizar `.glow` e `.glow-sm`

### 5. Alteração de Nome - Todos os Arquivos

| Arquivo | Alterações |
|---------|------------|
| index.html | Título, meta tags, og:title |
| src/components/landing/Header.tsx | Alt da logo |
| src/components/landing/Footer.tsx | Alt da logo, copyright |
| src/components/landing/SolutionSection.tsx | Textos "Soft7 AI" → "SoftSales" |
| src/components/landing/PromiseSection.tsx | Textos |
| src/components/landing/TransformationSection.tsx | Textos |
| src/components/landing/FAQSection.tsx | Textos nas respostas |
| src/pages/PrivacyPolicy.tsx | Textos e email |
| src/index.css | Comentário do design system |

---

## Detalhes Técnicos

### Conversão de HEX para HSL

Para compatibilidade com o sistema CSS existente:

| HEX | HSL |
|-----|-----|
| #030D1F | 216 81% 7% |
| #0865B4 | 204 93% 37% |
| #4D98D6 | 204 60% 57% |
| #03060F | 225 71% 4% |
| #0654C2 | 216 93% 39% |

### Novas Variáveis do Tema Dark

```css
.dark {
  --background: 216 81% 7%;        /* #030D1F */
  --foreground: 0 0% 98%;
  --card: 216 70% 12%;             /* Tom mais claro */
  --primary: 204 93% 37%;          /* #0865B4 */
  --ring: 204 60% 57%;             /* #4D98D6 */
  
  --gradient-primary: linear-gradient(135deg, #0654C2 0%, #4D98D6 100%);
  --gradient-button: linear-gradient(135deg, #0865B4 0%, #4D98D6 100%);
}
```

### Botão Gradient Atualizado

```tsx
gradient: "bg-gradient-to-r from-[#0654C2] via-[#0865B4] to-[#4D98D6] text-white hover:opacity-90 shadow-lg shadow-[#0865B4]/25"
```

---

## Resultado Esperado

- Visual moderno com tons de azul profissional
- Gradientes suaves e elegantes
- Efeitos de glow em azul
- Contraste adequado para legibilidade
- Experiência de usuário consistente
- Nome "SoftSales" em todos os lugares visíveis
