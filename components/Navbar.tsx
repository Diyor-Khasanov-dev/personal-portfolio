import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/achievments">Achievements</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/tech-stack">Tech Stack</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
        <li>
          <Link href="/certificates">Certificates</Link>
        </li>
        <li>
          <Link href="/languages">Languages</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
