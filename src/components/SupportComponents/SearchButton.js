'use client'

import React, { useState, useEffect } from 'react';
import { fetchSearch } from '@/lib/hook';
import Link from 'next/link';

const SearchButton = ({lang}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 2) {
        const data = await fetchSearch('plants', query);
        setResults(data.hits);
      } else {
        setResults([]);
      }
    };

    fetchResults();
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        document.getElementById('search').showModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const highlightText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        `<span key=${index} class="text-primary font-bold">${part}</span>`
      ) : (
        part
      )
    ).join('');
  };

  return (
    <>
        <button 
            className="btn btn-ghost my-auto"
            onClick={() => document.getElementById('search').showModal()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>        
        </button>
        <dialog id="search" className="modal ">
            <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex items-center justify-between'>
                    <h3 className="font-bold text-lg">Search</h3>
                    <kbd className="kbd">esc</kbd>
                </div>
                <input 
                    type="text" 
                    placeholder="Type to search..." 
                    className="input input-bordered w-full my-4"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ul className={`${results.length > 2 ? 'max-h-96 overflow-y-scroll' : ''}`}>
                    {results.map((result) => (
                        <li key={result.id} className="p-4 hover:bg-base-200 rounded-lg">
                            <Link href={`/${lang}/plants/${result.slug}`} className="font-bold text-lg space-y-2">
                                <span dangerouslySetInnerHTML={{ __html: highlightText(result.title, query) }} />
                                <div className='prose' dangerouslySetInnerHTML={{ __html: highlightText(result.desc.substring(0, 200), query) }} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>
  );
};

export default SearchButton;