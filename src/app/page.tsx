const mockUrls = [
  "https://utfs.io/f/9a4abed4-c979-4873-aefa-5e313e293d44-uyp24f.png",
  "https://utfs.io/f/763f9815-42c0-439c-9cd5-f22962e2d01f-278b.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <article className="w-48" key={image.id}>
            <img src={image.url} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}
