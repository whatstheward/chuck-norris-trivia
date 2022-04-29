import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'

type Props = {
  loadingFact: 'idle' | 'pending' | 'succeeded' | 'rejected'
  handleSubmit: (e:FormEvent, query:string, fn:Dispatch<SetStateAction<string>>)=>void
  fetchChuckFact: () => void
}

const Searchbar = ({handleSubmit, loadingFact, fetchChuckFact}: Props) => {
  const [queryString, setQueryString] = useState('')

  return (
    <div id='search-container'>
      <form
        onSubmit={(e) => handleSubmit(e, queryString, setQueryString)}
        >
        <h2>
          Search for Facts
        </h2>
        <input
          type='text'
          name='search'
          value={queryString}
          onChange={(e)=>setQueryString(e.target.value)}
          />
          <section>
            <button type='submit' disabled={!queryString || queryString.length > 10}>
              Search 
            </button>
            <button
              type='button'
              onClick={fetchChuckFact}
            >
              Random
            </button>
          </section>
      </form>
          {loadingFact === 'rejected' ? <p className='error'>No Results Found.</p> : null}
          {queryString.length > 10 ? <p className='error'>Search parameter cannot exceed 10 characters.</p> : null}
    </div>
  )
}

export default Searchbar