type GalleryProps = {
  images: {
    id: number;
    name: string;
    url: string;
  }[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="flex flex-col flex-wrap md:flex-row">
      {images.map((image) => (
        <article key={image.id}>
          <img className="w-full md:w-60" src={image.url} alt={image.name} />
        </article>
      ))}
    </div>
  );
}
