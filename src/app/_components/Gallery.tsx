import Image from "next/image";

type GalleryProps = {
  images: {
    id: number;
    name: string;
    url: string;
  }[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="flex flex-wrap">
      {images.map((image) => (
        <article key={image.id}>
          <Image src={image.url} alt={image.name} width={192} height={192} />
        </article>
      ))}
    </div>
  );
}
