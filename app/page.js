import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>the wild oasis . Welcome to paradise.</h1>
      <Link href={"/cabins"}>Explore luxury cabins</Link>
    </div>
  );
}
