"use client";
import Link from 'next/link';
import React from 'react'

const View = () => {
  return (
    <main className='min-h-dvh'>
        <h1 className='text-center my-10 font-semibold text-2xl text-gray-800'>Explore Innovative Solutions Shared by our Community</h1>
        <section className='grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='shadow-sm p-3'>
                <h1 className='text-center text-2xl font-bold text-gray-800'>Innovation Title</h1>
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <article>
                            <img src="/bg1.jpg" alt="John Doe" />
                            <p>John Doe</p>
                        </article>
                        <p>2/12/2025</p>
                    </div>
                    <div>
                        <h1>Community Problem</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deleniti maxime architecto mollitia consequuntur eligendi culpa neque vel, ipsum placeat nisi, odit iusto, eum ut voluptates sint hic repellendus quas excepturi animi sapiente. Officiis excepturi ipsa omnis quibusdam asperiores, doloremque ipsum sequi ratione cum reiciendis delectus in laboriosam, esse maxime!</p>
                    </div>
                    <div>
                        <h1>Materials</h1>
                        <p>Waste bin, Soil Sensors, Aprons</p>
                    </div>
                    <div>
                        <h1>Prototype Description</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum repudiandae quia perferendis explicabo optio ut qui est cumque corporis quae aut eius placeat aspernatur, quaerat quos non fugit atque, aliquid inventore amet! Nostrum ex nemo vel? Sint fugiat nesciunt minima quam quis facere debitis placeat quisquam natus velit similique cum corporis minus, magnam possimus quia harum! Consectetur ex excepturi nisi, facere nesciunt consequatur magnam aspernatur tenetur similique facilis? Vero in, placeat pariatur eius odit laudantium! Soluta, suscipit asperiores. Tenetur alias porro, reiciendis exercitationem est cum, eligendi eum quasi, veritatis obcaecati accusamus consequatur laudantium in iure perspiciatis blanditiis rerum voluptatum iste! Impedit eos esse dolorem, corporis inventore ea exercitationem officia ullam facere sint a, porro minima est. Itaque veniam tempora modi animi voluptatem aut sapiente optio, vero labore eaque odio accusamus qui necessitatibus voluptatum. Ad, aperiam voluptas? Nulla cumque, est ipsa alias placeat ratione deserunt eos non id. Modi, nam nihil.</p>
                    </div>
                    <div>
                        <p>Projected Impact</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nisi debitis quasi obcaecati rerum voluptates, quos similique dignissimos, reiciendis inventore laudantium? Tempore nisi odit reprehenderit cupiditate, incidunt, laudantium soluta voluptatem exercitationem sapiente necessitatibus nemo provident nam architecto mollitia. Quae sed rerum architecto a eaque labore, corporis veritatis iusto praesentium omnis.</p>
                    </div>
                    <Link href={"/"}>View Details</Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default View
