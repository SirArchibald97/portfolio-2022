import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';

export default function Biscuits() {
    const [showBiscuits, setShowBiscuits] = useState(true);
    const onClick = () => setShowBiscuits(false);

    return (
        showBiscuits ? (
            <>
                <div className="fixed inset-x-0 bottom-0">
                    <div className="bg-indigo-600">
                        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                            <div className="flex flex-wrap items-center justify-between">
                                <div className="flex w-0 flex-1 items-center">
                                    <p className="ml-3 truncate font-medium text-white">
                                        <span className="md:hidden">We announced a new product!</span>
                                        <span className="hidden md:inline"><span className="text-lg font-bold">This site uses biscuits!</span> It actually doesn't, I just wanted an excuse to make that joke.</span>
                                    </p>
                                </div>
                                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                    <Link
                                        href="#"
                                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                    <button
                                        type="button"
                                        className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" onClick={onClick} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : null
    )
}
