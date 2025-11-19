import React from 'react'
import BookCard from './components/BookCard'
import books from './data/books'

function mostCommonGenre(booksArray) {
  const counts = {}
  for (const b of booksArray) {
    counts[b.genre] = (counts[b.genre] || 0) + 1
  }
  let max = 0
  let genre = ''
  for (const g in counts) {
    if (counts[g] > max) {
      max = counts[g]
      genre = g
    }
  }
  return genre
}

export default function App() {
  const total = books.length
  const commonGenre = mostCommonGenre(books)

  return (
    <div className="container">
      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <main>
        <section className="summary">
          <p><strong>Total books:</strong> {total}</p>
          <p><strong>Most common genre:</strong> {commonGenre}</p>
        </section>

        <section className="grid">
          {books.map((book, idx) => (
            <BookCard
              key={book.title + idx}
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              description={book.description}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Created by Sreeram</p>
        <p>© {new Date().getFullYear()} Book Lover</p>
      </footer>
    </div>
  )
}
