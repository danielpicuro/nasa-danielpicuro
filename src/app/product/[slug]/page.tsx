import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShoppingCart, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { getProductBySlug, getRelatedProducts } from '@/features/product/productData';

/**
 * Página dinámica de producto: Muestra detalles de un producto específico
 * Utiliza getStaticParams para generar rutas estáticas en build time
 */
export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  // Si el producto no existe, mostrar página 404
  if (!product) {
    notFound();
  }

  // Obtener productos relacionados
  const relatedProducts = getRelatedProducts(product.relatedProducts);

  // Formatear precio
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-blue-600">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-gray-500">Product Image Placeholder</div>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <Link href="/products" className="inline-flex items-center text-blue-600 mb-6 hover:underline">
              <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-2" />
              Back to all products
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">24 reviews</span>
            </div>
            
            <p className="text-2xl font-bold text-blue-600 mb-6">{formattedPrice}</p>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="font-bold mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="border border-gray-300 text-gray-700 py-3 px-8 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Product Details</h2>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-8">{product.longDescription}</p>
              
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 font-medium">{key}</td>
                        <td className="py-3 px-4">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  href={`/product/${relatedProduct.slug}`} 
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <div className="text-gray-500">Product Image</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
                    <p className="text-blue-600 font-bold">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                      }).format(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/**
 * Generar rutas estáticas para todos los productos
 */
export async function generateStaticParams() {
  // En un entorno real, esto podría obtener datos de una API
  const { getAllProductSlugs } = await import('@/features/product/productData');
  const slugs = getAllProductSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}