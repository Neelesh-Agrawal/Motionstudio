# Motionstudio — CSS Animation Playground

> Day 66 of Ship69. Pick a UI element, dial in your animation, get AI reasoning on why it works.

## What it does

Three-panel CSS animation playground:

- **Left** — Element picker (Button, Card, Modal, Badge, Toast, Avatar) + animation controls (effect, easing, duration, delay, iteration)
- **Centre** — Live canvas with real-time preview. Replay anytime. Copy full CSS with keyframes at the bottom.
- **Right** — AI motion reasoning: verdict, why it works, emotional quality, use cases, what to watch out for, duration + easing scores.

## Effects

Fade In · Slide Up · Slide Down · Scale · Bounce · Blur In · Flip · Shake

## Easing presets

ease · ease-in · ease-out · ease-in-out · linear · spring · snappy · sharp

## Stack

- Vanilla HTML/CSS/JS — zero dependencies
- Groq API (`openai/gpt-oss-120b`) via Vercel serverless
- Vercel hosting

## Deploy

1. Push to GitHub
2. Connect repo to Vercel
3. Add env var: `GROQ_API_KEY` in Vercel project settings
4. Deploy — done

## Local dev

```bash
npm i -g vercel
vercel dev
```

Set `GROQ_API_KEY` in a `.env` file locally.

---

Built during [Ship69](https://ship69.dev) · design engineering portfolio challenge
