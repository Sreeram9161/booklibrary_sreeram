import React from 'react'

export default function BookCard({ title, author, genre, year, description }) {
  return (
    <article className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-author">{author} <span className="card-year">({year})</span></p>
      <p className="card-genre">{genre}</p>
      <p className="card-desc">{description}</p>
    </article>
  )
}
