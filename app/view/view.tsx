"use client";
import Link from 'next/link';
import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const View = () => {
  return (
    <main className='min-h-dvh md:p-5 p-3'>
        <h1 className='text-center my-10 font-semibold text-2xl text-gray-800'>Explore Innovative Solutions Shared by our Community</h1>
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='shadow-sm p-3'>
                <h1 className='text-center text-2xl font-bold text-gray-800'>Innovation Title</h1>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                        <article className='flex items-center gap-2'>
                            <img src="/bg1.jpg" alt="John Doe" className='w-10 h-10 rounded-full' />
                            <p>John Doe</p>
                        </article>
                        <p className='text-sm'>2/12/2025</p>
                    </div>
                    <div>
                        <span className='text-sm text-gray-700 flex items-center gap-2'><FaUsers className='text-base' /> Community Problem </span>
                        <p className='text-lg font-light line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deleniti maxime architecto mollitia consequuntur eligendi culpa neque vel, ipsum placeat nisi, odit iusto, eum ut voluptates sint hic repellendus quas excepturi animi sapiente. Officiis excepturi ipsa omnis quibusdam asperiores, doloremque ipsum sequi ratione cum reiciendis delectus in laboriosam, esse maxime!</p>
                    </div>
                    <div>
                        <span className='text-sm text-gray-700 flex items-center gap-2'><GrResources className='text-base' /> Materials </span>
                        <p className='text-lg font-light line-clamp-2'>Waste bin, Soil Sensors, Aprons</p>
                    </div>
                    <div>
                        <span className='text-sm text-gray-700 flex items-center gap-2'><LuPencilLine className='text-base' /> Prototype Description </span>
                        <p className='text-lg font-light line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum repudiandae quia perferendis explicabo optio ut qui est cumque corporis quae aut eius placeat aspernatur, quaerat quos non fugit atque, aliquid inventore amet! Nostrum ex nemo vel? Sint fugiat nesciunt minima quam quis facere debitis placeat quisquam natus velit similique cum corporis minus, magnam possimus quia harum! Consectetur ex excepturi nisi, facere nesciunt consequatur magnam aspernatur tenetur similique facilis? Vero in, placeat pariatur eius odit laudantium! Soluta, suscipit asperiores. Tenetur alias porro, reiciendis exercitationem est cum, eligendi eum quasi, veritatis obcaecati accusamus consequatur laudantium in iure perspiciatis blanditiis rerum voluptatum iste! Impedit eos esse dolorem, corporis inventore ea exercitationem officia ullam facere sint a, porro minima est. Itaque veniam tempora modi animi voluptatem aut sapiente optio, vero labore eaque odio accusamus qui necessitatibus voluptatum. Ad, aperiam voluptas? Nulla cumque, est ipsa alias placeat ratione deserunt eos non id. Modi, nam nihil.</p>
                    </div>
                    <div>
                        <span className='text-sm text-gray-700 flex items-center gap-2'><CiCircleCheck className='text-base' /> Projected Impact </span>
                        <p className='text-lg font-light line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nisi debitis quasi obcaecati rerum voluptates, quos similique dignissimos, reiciendis inventore laudantium? Tempore nisi odit reprehenderit cupiditate, incidunt, laudantium soluta voluptatem exercitationem sapiente necessitatibus nemo provident nam architecto mollitia. Quae sed rerum architecto a eaque labore, corporis veritatis iusto praesentium omnis.</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Link href={"/"} className='flex items-center gap-1 hover:text-sky-600'>View Details <MdKeyboardDoubleArrowRight className='text-lg' /></Link>
                        <button className='text-lg hover:bg-red-500 p-2 rounded-full hover:text-white transition-all duration-200'>
                            <CiTrash />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default View
