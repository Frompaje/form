import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { queryClient } from '@/lib/query'

interface ProviderProps {
  children: ReactNode
}

export const Providers = ({ children }: ProviderProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <Toaster duration={1500} richColors />
  </QueryClientProvider>
)
