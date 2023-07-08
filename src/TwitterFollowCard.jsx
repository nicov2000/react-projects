import { useState } from 'react'
import './TwitterFollowCard.css'

// Buena practica: Props iniciales con prefijo 'initial'
// Buena practica: mantener props inmutables.
export function TwitterFollowCard ({children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const onClick = () => setIsFollowing(!isFollowing)  
  const text = isFollowing
    ? 'Siguiendo'
    : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button following'
    : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="nick" src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-user-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-user'>@{userName}</span>
          { /* Comment dentro de jsx */ }
        </div>
      </header>
      <aside>
        <button 
          className={buttonClassName}
          onClick={onClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-text unfollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
