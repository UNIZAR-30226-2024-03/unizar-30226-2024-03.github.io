import { numProgressives } from '@/hooks/numProgressives'
import { useEffect} from 'react'

export const Contador = (
  { initial, final, decimals, duration }:
  { initial: number, final: number, decimals?: number, duration?: number }
) => {
  const [count, setCount] = numProgressives(initial, duration, decimals)

  useEffect(() => {
    setCount(String(final))
  }, [final])

  return <span className=' text-7xl font-bold'>{count}</span>
}