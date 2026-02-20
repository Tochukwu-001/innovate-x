"use client";

import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const View = () => {
    return (
        <main className="min-h-dvh md:p-5 p-3">
            <h1 className="text-center my-10 font-semibold text-2xl text-gray-800">Explore Innovative Solutions Shared by our Community</h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="shadow-sm p-3">
                    <h1 className="text-center text-2xl font-bold text-gray-800">Innovation Title</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <article className="flex items-center gap-2">
                                <img src="/bg-image2.jpg" alt="John Doe" className="w-10 h-10 rounded-full"/>
                                <p>John Doe</p>
                            </article>
                            <p className="text-sm">2/22/2025</p>
                        </div>
                        <div>
                            <span className="text-sm text-gray-700 flex items-center gap-2"><FaUsers className="text-base"/> Community Problem </span>
                            <p className="text-lg font-light line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem rerum recusandae doloremque, amet mollitia harum nulla quasi quaerat assumenda veritatis vel repudiandae aut, vitae nisi.</p>
                        </div>
                        <div>
                            <span className="text-sm text-gray-700 flex items-center gap-2"><GrResources className="text-base"/>Materials</span>
                            <p className="text-lg font-light line-clamp-2">Waste bin, soil sensors, Aprons</p>
                        </div>
                        <div>
                            <span className="text-sm text-gray-700 flex items-center gap-2"><LuPencilLine className="text-base"/>Prototype Description</span>
                            <p className="text-lg font-light line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit cum voluptas. Incidunt beatae reprehenderit iusto, quas sint omnis officiis tenetur eaque dolorum itaque natus consequuntur voluptate vero aperiam dignissimos. Omnis, necessitatibus vero inventore optio praesentium maxime natus voluptas quibusdam voluptatem ipsum officiis ut animi nostrum quidem itaque dolorum quae sit eos et. Accusantium, velit cupiditate. Distinctio facere consectetur accusamus, dolor eius commodi placeat veniam autem corporis optio adipisci aut, dolore in repellat odio mollitia possimus tempore laborum. Praesentium soluta recusandae libero, ad consequuntur vero harum labore nobis aspernatur cumque at iure voluptatem! In libero doloremque quas tenetur esse neque!</p>
                        </div>
                        <div>
                            <span className="text-sm text-gray-700 flex items-center gap-2"><CiCircleCheck className="text-base"/>Projected Impact</span>
                            <p className="text-lg font-light line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquam iste expedita dolorum veniam, saepe vero, vel doloribus, accusantium voluptate dolorem. Optio placeat facilis enim, voluptatibus repellat alias debitis velit excepturi dolorem aspernatur reprehenderit aut magnam quis magni doloribus molestias asperiores. Quidem, repellat. Nesciunt pariatur minus omnis quam similique rem?</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href={"/"} className="flex items-center gap-1 hover:text-sky-600">View Details <MdOutlineKeyboardDoubleArrowRight className="text-lg"/></Link>
                            <button className="text-lg hover:bg-red-500 p-2 rounded-full hover:text-white transition-all duration-200">
                                <CiTrash/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default View