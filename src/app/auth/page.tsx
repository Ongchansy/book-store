// src/app/auth/page.tsx

import Link from "next/link";

// This function fetches data directly in the component
export default async function AuthPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>
            <Link href={`/auth/${user.id}`}>
              {user.name} ({user.username})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
