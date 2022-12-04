import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div class="grid h-screen px-4 place-content-center bg-gray-900">
      <h1 class="tracking-widest uppercase bg-gradient-to-r from-blue-900 via-green-500 to-blue-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        404 | Not Found
      </h1>
    </div>
  )
}
