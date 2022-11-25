import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef } from "react"
import { Carousel } from '@mantine/carousel';
import { Container } from "@mantine/core";


type ImageGalleryProps = {
  images: MedusaImage[]
}
const Ratio = 1.15;
const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className="h-14 w-12 relative border border-white"
              onClick={() => {
                handleScrollTo(image.id)
              }}
            >
              <span className="sr-only">Go to image {index + 1}</span>
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
                alt="Thumbnail"
              />
            </button>
          )
        })}
      </div>
      <Container fluid >
        <Carousel slideSize="100%" align="center" height={540 * Ratio} sx={{ width: 460 * Ratio }} slideGap="md" draggable={false} withIndicators
          styles={
            {
              indicator: {
                color: '#f00',
                opacity: 1,
                backround: '#f00'
              }

            }
          }
        >
          {images.map((image, index) => {
            return (
              <Carousel.Slide><Image
              src={image.url}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              alt="Thumbnail"
            /></Carousel.Slide>

                
            )
          })}
        </Carousel>
      </Container>

    </div>
  )
}

export default ImageGallery
