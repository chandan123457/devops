// import {prismaClient} from 'db/client';

// export default async function Home() {

//   const users = await prismaClient.user.findMany();
//   return (
//     <div>
//       {JSON.stringify(users)}
//     </div>
//   )
// }

export default async function Home() {
  const res = await fetch("http://15.207.14.18:8080/users", {
    cache: "no-store"
  });
  const users = await res.json();

  return <div>{JSON.stringify(users)}</div>;
}
