import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowing: true },
  { userName: 'mediopirzel', name: 'Xavier Soler Delgado', isFollowing: false },
  { userName: 'pheralp', name: 'Pablo H.', isFollowing: false },
  { userName: 'TMChein', name: 'Tomas H.', isFollowing: true },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            name={name}
          />
        );
      })}
    </section>
  );
}
