import Image from "next/image"

import { OTHER_LEARNING } from "../constants/path"

export function Other () {
    return (
        <div className=" inline-flex justify-start items-center">
            <h4 
                className="text-md px-6 mr-10 w-1/4 border-r-2 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl"
            >
                Other (Learning)
            </h4>
            <div className="flex flex-wrap gap-3 w-3/4">
                { OTHER_LEARNING.map(
                    (TECH_STACKS) => ( 
                        <div
                            key={ TECH_STACKS.id }
                            className="inline-flex justify-center items-center relative border-2 border-gray-200 dark:border-gray-500 bg-white dark:bg-slate-200 w-14 h-14 rounded-full overflow-hidden"
                        >
                            <span className="relative w-9 h-9">
                                <Image 
                                    priority
                                    alt="Skills"
                                    title={ TECH_STACKS.name }
                                    placeholder="blur"
                                    src={ TECH_STACKS.path }
                                    layout="fill"
                                    objectFit="scale-down"
                                />
                            </span>
                        </div>
                    ) 
                ) }
            </div>
        </div>
    )
}