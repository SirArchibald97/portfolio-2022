import Link from 'next/link';

export default function four_oh_four() {
    return (
      <div className="flex h-screen font-mono">
        <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 m-auto">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Oi, get back over <Link href="/"><span className="text-blue-600 underline hover:text-blue-800">here!</span></Link></h1>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
  