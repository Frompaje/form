import { Loader2 } from 'lucide-react'

export const LoadingSpin = () => {
  return (
    <div className="absolute top-1/2 left-12 translate-x-2/4">
      <Loader2 className="text-emerald-500 animate-spin" size={50} />
    </div>
  )
}
