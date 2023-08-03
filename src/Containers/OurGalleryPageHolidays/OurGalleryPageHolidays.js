import React from "react";
import "./OurGalleryPageHolidays.css"

const OurGalleryPageHolidays = () => {
  const products = [
    {
      id: 1,
      name: '',
      href: '#',
      price: 'Rajasthan',
      imageSrc: 'https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 'Kashmir',
      imageSrc: 'https://images.unsplash.com/photo-1617829206657-ca53cbb6b0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 'Kerla',
      imageSrc: 'https://images.unsplash.com/photo-1566865204669-c7b93be298bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rajasthan',
      imageSrc: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 1,
      name: '',
      href: '#',
      price: 'Rajasthan',
      imageSrc: 'https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 'Kashmir',
      imageSrc: 'https://images.unsplash.com/photo-1617829206657-ca53cbb6b0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 'Kerla',
      imageSrc: 'https://images.unsplash.com/photo-1566865204669-c7b93be298bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rajasthan',
      imageSrc: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 'Kashmir',
      imageSrc: 'https://images.unsplash.com/photo-1617829206657-ca53cbb6b0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 'Kerla',
      imageSrc: 'https://images.unsplash.com/photo-1566865204669-c7b93be298bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rajasthan',
      imageSrc: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRvdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 1,
      name: '',
      href: '#',
      price: 'Rajasthan',
      imageSrc: 'https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    // More products...
  ]

  return <div>


    <div className="flex-container-for-gallery">


      <div className="bg-white ">
        <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="width-container-for-gallery">
            <div>
              <h2 className="flex justify-center m-7 text-4xl">Our Gallery</h2>

            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 w-75% mb-7">

              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-96 w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
            {/* <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-5 w-75%">

              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>

    {/* video section */}
    {/* <div className="">

      <video className="h-full w-full rounded-lg" controls autoPlay muted>

        <iframe width="75%" height="300" src="https://www.youtube.com/3f9d7805-6c23-4971-8e31-9de2410640a5" title="Travel to Jordan | Cinematic Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </video>

    </div> */}

  </div>;
};

export default OurGalleryPageHolidays;
