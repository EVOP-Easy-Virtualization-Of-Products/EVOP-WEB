import 'next'

declare module 'next' {
  // Override the PageProps interface to match what Next.js 15.2.4 expects
  interface PageProps {
    params: any
    searchParams?: Record<string, string | string[]>
  }
}
