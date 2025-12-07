import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillStackAI',
  description: 'SkillStackAI is an AI-driven platform that connects small businesses with niche expertise through micro-SaaS tools and educational content, enhancing their operational efficiency and growth.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillStackAI</h1>
      <p className="mt-4 text-lg">SkillStackAI is an AI-driven platform that connects small businesses with niche expertise through micro-SaaS tools and educational content, enhancing their operational efficiency and growth.</p>
    </main>
  )
}
