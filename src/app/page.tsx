import { SignedIn, SignedOut } from "@clerk/nextjs";
import Gallery from "./_components/Gallery";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages();

  return (
    <section>
      <SignedOut>
        <p className="text-center">Please Sign in above...</p>
      </SignedOut>

      <SignedIn>
        <Gallery images={images} />
      </SignedIn>
    </section>
  );
}
