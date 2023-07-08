import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export default function App () {
  // Un cambio de estado desencadena una re-renderizacion desde el componente hacia abajo (hijos)
  // El codigo se re-ejecuta, pero el html sin cambios NO se re-renderiza
  const users = [
    {
      id: 1,
      userName: 'midudev',
      isFollowing: true,
      name: 'Miguel Angel Duran'
    },
    {
      id: 2,
      userName: 'nick',
      isFollowing: true,
      name: 'Nick Volves'
    },
    {
      id: 3,
      userName: 'tanjiro',
      isFollowing: false,
      name: 'Tanjiro Kamado'
    },
    {
      id: 4,
      userName: 'elonmusk',
      isFollowing: true,
      name: 'Elon Musk'
    }
  ]
  return (
      <section className='app'>
        {
        users.map(({ id, userName, isFollowing, name }) => (
          <TwitterFollowCard key={id} userName={userName} initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
        ))
        }
      </section>
    )
}