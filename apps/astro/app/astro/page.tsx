import Link from "next/link";

export default function Astro() {
  return (
    <div>
      <h3>Home for our Astro Astro app</h3>
      <ul>
        <li>
          <Link href="/astro/bot/1">Astro bot 1</Link>
        </li>
        <li>
          <Link href="/astro/bot/2">Astro bot 2</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
}
