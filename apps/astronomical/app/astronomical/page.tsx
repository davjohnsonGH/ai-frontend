import Link from "next/link";

export default function Workflows() {
  return (
    <div>
      <h3>Home for our Astronomical app</h3>
      <ul>
        <li>
          <Link href="/astronomical/bot/1">Astronomical bot 1</Link>
        </li>
        <li>
          <Link href="/astronomical/bot/2">Astronomical bot 2</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
}
