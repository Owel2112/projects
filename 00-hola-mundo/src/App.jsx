import'./App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'ElonMusk' ,
    name: 'Elon Musk' ,
    isFollowing: true
  } ,
  {
    userName: 'midudev' ,
    name: 'Miguel Ángel Durán',
    isFollowing: false
  } ,
  {
    userName: 'realDonaldTrump' ,
    name: 'Donald J. Trump',
    isFollowing: true
  } ,
  {
    userName: 'LOKI747' ,
    name: 'JJChagerben',
    isFollowing: false
  } ,
]

export function App () {

  return (
    <section className='App'>

      <h1 className='follow-title'>Who to Follow</h1>

       {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
       }      
      
    </section>
  )
}