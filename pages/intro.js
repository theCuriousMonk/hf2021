import Head from 'next/head'

export default function Intro() {
    return(
        <div>
        <Head>
          <title>HackerFarm🏕️ : Introduction</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <div class="min-h-screen bg-gray-100 p-6">
        <a href="/">
        <svg className="h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
      </a>

          {/* <div className="container mx-auto bg-white shadow-lg rounded">
            <div className="flex flex-col justify-center">
                <h3 className="text-4xl p-4">HackerFarm🏕️</h3>
                <p className="p-4">HackerFarm🏕️ is an experiential camping retreat which invites passionate people to come together and learn valuable skills.
                  </p>
            </div>
          </div> */}

          <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h4 className="text-2xl">Welcome, Home</h4>
                  <p>HackerFarm🏕️ is an experiential camping retreat which invites passionate people to come together and learn valuable skills.
                  </p>
                  <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">  
                        Live in Nature
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">
                        Do Yoga and Meditation
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">Learn to Code</p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">Code for India</p>
                    </li>                   
                  </ul>
                  <p>Perfect space to focus, hack into healthy lifestyle, get unwind and cherish the beautiful nature.</p>
                </div>
          {/* <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>Checkout previous camp pictures:</p>
            <p>
              <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
            </p>

        </div> */}
        </div>


        </div>




        {/* <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-16 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                <div>
                  <h3 className="text-4xl">HackerFarm🏕️</h3>
                <img src="https://play.tailwindcss.com/img/logo.svg" class="h-7 sm:h-8" />
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h4 className="text-2xl">Introduction</h4>
                  <p>HackerFarm🏕️ is an experiential camping retreat which invites passionate people to come together and learn valuable skills.
                  </p>
                  <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">  
                        Live in Nature
                         <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file 
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">
                        Do Yoga and Meditation
                       <code class="text-sm font-bold text-gray-900">@apply</code>
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <p class="ml-2">Learn to Code</p>
                    </li>
                  </ul>
                  <p>Perfect space to focus, hack into healthy lifestyle, get unwind and cherish the beautiful nature.</p>
                </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>Want to dig deeper into Tailwind?</p>
            <p>
              <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

        </div>
    )
}