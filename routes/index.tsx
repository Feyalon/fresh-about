import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <body class="bg-gray-900">
    <Head>
      <title>
        FeyaLon
      </title>
      
    </Head>
    <section class="text-white">
      
      <div
        class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        
        <div class="mx-auto max-w-3xl text-center flex flex-col justify-center items-center">
        <img
            alt="Woman"
            src="https://avatars.githubusercontent.com/u/63968483?v=4"
            class="h-24 w-24 rounded-full object-cover shadow-xl"
          />
          <h1
            class="bg-gradient-to-r from-blue-900 via-green-500 to-blue-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Hello and welcome!

            <span class="sm:block"> Its personal web-site </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Im a programer. Programming is a really funny and cool hobby! Im currently learning programming languages such as 
          </p>
          <span class="max-w-xl sm:text-xl text-red-400 font-bold uppercase">
            python, c#(ASP.Net) and TS/JS(FreshJs and Angular).
          </span>
          <div class="mt-8">
            <a
              target="__blank__"
              class="bg-gradient-to-r from-green-500 to-blue-400 block w-full rounded px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white sm:w-auto"
              href="https://github.com/Feyalon"
            >
              My Git-Hub
            </a>
          </div>
        </div>
      </div>
    </section>

  </body>
  );
}
