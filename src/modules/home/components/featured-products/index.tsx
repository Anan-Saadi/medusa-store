import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { Center, Space, Text } from "@mantine/core"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
         
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our newest styles are here to help you look your best.
          </p>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
        <Space h="xl" />

        <Center>
        <UnderlineLink href="/store"><Text weight={500} size="lg"> Expolre more products</Text></UnderlineLink>

        </Center>

      </div>
    </div>
  )
}

export default FeaturedProducts
