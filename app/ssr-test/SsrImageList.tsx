import Image from "next/image";

export default async function ImagesList({
  imagesPromise,
}: {
  imagesPromise: Promise<
    { id: number; author: string; download_url: string }[]
  >;
}) {
  const images = (await imagesPromise).slice(0, 4);

  const slideStyles = images
    .map(
      (_img, i) => `
    #slide-${i}:checked ~ .slides .slide-${i} { opacity: 1; transform: translateX(0); z-index: 2; }
  `
    )
    .join("\n");

  const css = `
  .carousel { --h: 400px; width:100%; max-width:48rem; margin:0 auto; position:relative; }
  .carousel input[type="radio"] { display:none; }
  .slides { position:relative; width:100%; height:var(--h); overflow:hidden; }
  .slides .slide { position:absolute; inset:0; opacity:0; transform: translateX(20px); transition: opacity .45s ease, transform .45s ease; z-index:1; display:flex; align-items:center; justify-content:center; }
  .slides .slide img, .slides .slide .next-image { width:100%; height:100%; object-fit:cover; display:block; }
  /* selected slide rules (dynamically generated) */
  ${slideStyles}
  /* navigation dots */
  .dots { display:flex; gap:.5rem; justify-content:center; margin-top:.75rem; }
  .dots label { width:.75rem; height:.75rem; border-radius:9999px; background:#cbd5e1; display:inline-block; cursor:pointer; transition:transform .15s ease, background .15s ease; }
  /* style the active dot based on checked input */
  ${images
    .map(
      (_img, i) =>
        `#slide-${i}:checked ~ .dots label[for="slide-${i}"] { background:#0f172a; transform:scale(1.08); }`
    )
    .join("\n")}
  /* optional arrows (pure CSS labels) */
  .arrow { position:absolute; top:50%; transform:translateY(-50%); width:2.25rem; height:2.25rem; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.7); border-radius:9999px; cursor:pointer; }
  .arrow.left { left:0.5rem; }
  .arrow.right { right:0.5rem; }
  .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
  `;

  const prevIndex = (i: number) => (i - 1 + images.length) % images.length;
  const nextIndex = (i: number) => (i + 1) % images.length;

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="carousel">
        {images.map((img, i) => (
          <input
            key={`radio-${img.id}`}
            id={`slide-${i}`}
            name="carousel"
            type="radio"
            defaultChecked={i === 0}
          />
        ))}

        <div className="slides">
          {images.map((img, i) => (
            <div key={img.id} className={`slide slide-${i}`}>
              <Image
                src={img.download_url}
                alt={img.author}
                width={1200}
                height={600}
                className="next-image"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.map((img, i) => (
          <div key={`arrows-${i}`}>
            <label
              htmlFor={`slide-${prevIndex(i)}`}
              className="arrow left"
              aria-hidden="false"
            >
              ‹<span className="sr-only">Previous slide</span>
            </label>

            <label
              htmlFor={`slide-${nextIndex(i)}`}
              className="arrow right absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded"
              aria-hidden="false"
            >
              ›<span className="sr-only">Next slide</span>❯
            </label>

            {i === 0 ? null : null}
          </div>
        ))}

        <div className="dots" aria-hidden="false">
          {images.map((_, i) => (
            <label key={`dot-${i}`} htmlFor={`slide-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
