'use client';
import { ArcElement, Legend, Tooltip } from 'chart.js/auto';
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimal="."
        decimals={2}
        prefix='£'
        duration={2}
        end={amount} 
        />
    </div>
  )
}

export default AnimatedCounter
