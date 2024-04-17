import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <section>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <article key={image.id}>
            <img className="w-60" src={image.url} alt={image.name} />
          </article>
        ))}
      </div>
    </section>
  );
}
