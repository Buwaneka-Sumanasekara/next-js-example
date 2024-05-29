import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <Link href={"/users"}>Users</Link>
      <Link href={"/users/new"}>{`New user`}</Link>
      <Link href={"/users/1"}>{`Specific user`}</Link>
      <Link href={"/dashboard"}>{`Group exaple - admin->dashboard`}</Link>
      <Link href={"/account"}>{`Group exaple - user->acount`}</Link>
    </main>
  );
}
