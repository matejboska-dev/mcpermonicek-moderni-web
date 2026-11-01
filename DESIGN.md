---
name: MC Permoníček
description: Moderní rodinné centrum a akreditovaná dětská skupina v Jílovém u Prahy
colors:
  primary: "#52B5ED"
  primary-ink: "#0B6CA3"
  primary-deep: "#0B1E2D"
  secondary: "#FDD10A"
  secondary-deep: "#241D00"
  accent-coral: "#E24D2D"
  accent-coral-ink: "#B93316"
  accent-lime: "#BBE364"
  accent-lime-deep: "#182605"
  neutral-ink: "#111318"
  neutral-secondary: "#3E4451"
  neutral-muted: "#5A6170"
  neutral-surface: "#F4F5F7"
  neutral-surface-strong: "#EAECF0"
  neutral-canvas: "#FFFFFF"
typography:
  display:
    fontFamily: "var(--font-display), Bricolage Grotesque, system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.03em"
    lineHeight: 1.08
  headline:
    fontFamily: "var(--font-display), Bricolage Grotesque, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.025em"
    lineHeight: 1.15
  body:
    fontFamily: "var(--font-body), Figtree, system-ui, sans-serif"
    fontWeight: 400
    letterSpacing: "normal"
    lineHeight: 1.55
  label:
    fontFamily: "var(--font-body), Figtree, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  card: "32px"
  pill: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-ink}"
    textColor: "{colors.neutral-canvas}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-accent:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card-surface:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.card}"
    padding: "24px 32px"
---

## Overview

**Creative North Star: "Jitter Motion Playground for Permoníček"**

Mateřské centrum Permoníček, z.s. je rodinné centrum a akreditovaná dětská skupina v Jílovém u Prahy fungující od roku 2006. Nová vizuální identita a web spojují původní barvy (modrá, korálová, sluneční žlutá, jarní limetka) s moderním, hravým motion designem inspirovaným aplikací Jitter (jitter.video).

**Key Characteristics:**
- Čisté plochy `#F4F5F7` se zaoblenými rohy (24–32px)
- Plynulý infinite showreel reálných momentek z herny a přírody
- Týdenní rozvrhový canvas v blankytné modři `#52B5ED` s interaktivním přepínáním dnů
- Tři sticky stacked karty pro klíčové pilíře (dětská skupina pro 6 dětí, kroužky s 1. lekcí zdarma, otevřená herna)
- Precizní česká typografie v písmech Bricolage Grotesque a Figtree

## Colors

### Primary Palette
- **Sky Blue (`#52B5ED`):** Hlavní barva mateřského centra. Evokuje otevřenost, volnost a dětskou hravost. Doprovodné inkoustové odstíny `#0B6CA3` pro text a `#0B1E2D` pro hluboký kontrast.
- **Sunny Gold (`#FDD10A`):** Sluneční žlutá pro conversion badge, stickers a tlačítka ukázkové lekce zdarma.
- **Coral Red (`#E24D2D`):** Korálově červená pro maskotovu čepičku a akcenty pro nejbližší semináře pro rodiče.
- **Spring Lime (`#BBE364`):** Jarní svěží zeleň reprezentující dětskou skupinu a pobyt venku na zahradě.

### Neutrals
- **Canvas (`#FFFFFF`):** Čisté bílé pozadí.
- **Studio Surface (`#F4F5F7` / `#EAECF0`):** Neutrální podklad pro bento karty a showreel.
- **Deep Ink (`#111318`):** Hluboký černý inkoust pro maximální čitelnost a kontrast splňující WCAG AAA.

## Typography

- **Display & Nadpisy:** Bricolage Grotesque (`font-weight: 700 / 800`, `letter-spacing: -0.03em`).
- **Text & UI prvky:** Figtree (`font-weight: 400 / 500 / 600 / 700`, `line-height: 1.55`).

### The Contrast Rule
Na žlutých (`#FDD10A`), limetkových (`#BBE364`) i blankytně modrých (`#52B5ED`) plochách se používá výhradně hluboký černý inkoust (`#111318` nebo `#0B1E2D`). Nikdy šedá ani bílá.

## Layout

- **Max-width kontejnery:** 1280px (`max-w-7xl`) pro hlavičku/patku, 1152px (`max-w-6xl`) pro sekce, 896px (`max-w-4xl`) pro citace a přihlášku.
- **Responsivita:** Mobilní zobrazení má plnou šířku ovládacích prvků (min 44px tap target), bez horizontálního přetečení.

## Elevation & Depth

- **Tonal Layering First:** Hloubka je primárně vyjádřena plochami `#F4F5F7` na `#FFFFFF` s měkkým rozptylem `rgba(17, 19, 24, 0.04)`.
- **Active / Elevated Cards:** Jemný offsetový stín `box-shadow: 0 16px 40px rgba(17, 19, 24, 0.1)` bez tvrdých ohraničení.

## Shapes

- **Karty a kontejnery:** `border-radius: 24px` až `32px`.
- **Tlačítka a přepínače:** Plně zaoblené pilulky (`border-radius: 9999px`).
- **Formulářové vstupy:** `border-radius: 12px` až `16px`.

## Components

### Buttons
- **Primary:** Tmavý inkoust `#111318`, bílý text, pill tvar, hover scale 1.02.
- **Accent:** Sluneční žlutá `#FDD10A`, inkoustový text `#111318`, zářivý akcent pro ukázkové lekce.
- **Ghost / Secondary:** Plocha `#F4F5F7`, text `#111318`, hover `#EAECF0`.

### Navigation Pill
- Plovoucí pilulkový panel v záhlaví s animovaným bílým jezdcem přepínajícím sekce pomocí spring physics (`layoutId="nav-pill"`).

## Do's and Don'ts

### Do:
- Vždy uvádět pro všechny dětské kroužky "1. ukázková lekce nezávazná a zdarma".
- Zachovávat původní maskotovu červenou čepičku a čistý bílý kabátek.
- Využívat reálné fotografie dětí a pečovatelek v Jílovém u Prahy.
- Dodržovat WCAG kontrast na všech barevných kartách.

### Don't:
- Nikdy nepoužívat eyebrow/kicker štítky přímo nad nadpisy `h1`/`h2`/`h3`.
- Nikdy nepoužívat textové gradienty ani tvrdé neobrutalistické stíny.
- Nikdy nepoužívat generické emoji – oficiální SVG ikony Phosphor v jednotném duotone stylu, bez dekorativních hvězdiček.

## Úpravy 1. 11. 2026

Navigace drží text v jednom řádku; pod 1280 px se mění na menu. Telefon v záhlaví je viditelný od 1500 px. Loga partnerů mají výšku 80–96 px. Týdenní rozvrh odpovídá oficiální tabulce 2026/2027, včetně přímých registračních kontaktů a neděle. Ikony pocházejí z oficiálního balíčku @phosphor-icons/react (duotone).

### Struktura rezervačního formuláře

Formulář seskupuje výběr zájmu, kontaktní údaje a podrobnosti do tří oddělených částí s nadpisy. Výběr používá pojmenované selecty místo zalamovaných štítků. Jméno a alespoň jeden kontakt jsou povinné; doplňující pole odpovídají typu zájmu. Tlačítko „Pokračovat k odeslání“ vede k náhledu e-mailu. Ověřeny všechny typy zájmu, validace a potvrzení na mobilu i desktopu; doručení e-mailu není součástí kontroly.

### Pozadí úvodní sekce

Vpravo je průhledná kresba maskota dodaná uživatelem 1. 11. 2026 (`public/images/hero/permonicek-kresba.png`, původní příloha `codex-clipboard-ee91ae61-1f5a-4e87-a450-9a972265bed5.png`). Kresba je pouze dekorativní, bez alternativního textu, v plné černé se 100% opacitou, posunutá doprava a dolů. Vlevo ji vyvažují plochy v modré, žluté a zelené z loga. Na mobilu motivy ustupují k okrajům.

### Členství a slevy

Sekce má vycentrovaný nadpis se žlutě zvýrazněnou roční cenou a symetrickou mřížku šesti výhod (3 sloupce desktop, 2 tablet, 1 mobil). Galanterie a dětské zboží tvoří samostatné položky. Každá výhoda kombinuje velkou částku či procento, ikonu Phosphor a krátké podmínky. Ověřeno šest položek a absence vodorovného přetečení na 1440 a 390 px.

### Semináře a herna

Vycentrované záhlaví, dvě rovnocenné karty. Datum a čas tvoří výrazný barevný štítek s textem 16–18 px; požadavek uživatele výslovně zachovává tento štítek nad nadpisem. Rezervační tlačítka jsou přes celou šířku, min. 56 px vysoká, s textem 16 px. Sekundární odkazy jsou pod nimi. Ověřeno na mobilu a desktopu, včetně předvolby semináře ve formuláři.
