import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import Gallery from "./_components/Gallery";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

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
