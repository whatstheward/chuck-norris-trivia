import React, { useEffect, useState } from 'react'

type Props = {
  triviaFact: string,
  loadingFact: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const Trivia = ({triviaFact, loadingFact}:Props) => {
  
  return (
    <article className='trivia-fact'>
      <section>
        <h2>Did you know...</h2>
        {loadingFact !== 'succeeded' && loadingFact !== 'rejected' ?
        <div>
          <div className="dot-pulse" />
        </div>
        :
        <p>
          {triviaFact}
        </p>
        }
      </section>
    </article>
  )
}

export default Trivia