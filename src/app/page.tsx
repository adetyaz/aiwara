import { Navbar, RegionCard } from "@/components";
import Link from "next/link";
import Image from "next/image";
import {
  Coins,
  Laugh,
  PartyPopper,
  Pickaxe,
  Sunrise,
  Utensils,
  Vote,
} from "lucide-react";
import { festivalData } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="container mx-auto px-4 py-16 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/581308/pexels-photo-581308.jpeg')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome to the Comedy Festival!
        </h1>
        <p className="text-xl mb-8">
          Experience the best of regional comedy and explore the hidden gems of
          our towns.
        </p>
        <div className="space-x-4">
          <Link
            href="/tickets"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition duration-300"
          >
            Buy Tickets
          </Link>
          <Link
            href="/festivals"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#EAC85C] to-[#302225] py-8 lg:py-12">
        <article className="px-8 md:px-12 lg:px-28">
          <p>
            Japanese festivals and comedy have long been a vibrant canvas for
            creative expression and cultural dialogue. For generations, these
            celebrations have served as dynamic stages where age-old traditions
            blend seamlessly with modern wit and satirical insights. Today,
            across the archipelago, communities host events that nurture free
            artistic creation, spark interdisciplinary exchanges, and invite
            audiences to both honor heritage and laugh at life&apos;s ironies.
            With support from cultural institutions, local art groups, and
            innovative performance academies, these festivities continue to
            evolve—fostering playful experimentation and a spirited critique of
            contemporary society, all while celebrating the unique, enduring
            charm of Japan&apos;s cultural legacy.
          </p>
        </article>
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="text-white px-8 md:px-12 lg:px-28">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p>
              At Laugh & Explore, we are dedicated to showcasing the best of
              regional comedy and the hidden gems of our towns. Our mission is
              to bring together diverse voices, perspectives, and traditions to
              create a vibrant, inclusive festival that celebrates the rich
              tapestry of Japanese culture. Through our events, we aim to
              entertain, educate, and inspire audiences of all ages while
              fostering a sense of community and connection.
            </p>
            <ul className="grid space-y-8">
              <li>
                <Laugh /> &nbsp; Support local artists and performers
              </li>
              <li>
                <Sunrise /> &nbsp; Promote cultural exchange and understanding
              </li>
              <li>
                <Pickaxe /> &nbsp; Encourage creativity and innovation
              </li>
              <li>
                <PartyPopper /> &nbsp; Celebrate the unique heritage of Japan
              </li>
              <li>
                <Utensils /> &nbsp; Try out local foods and drink
              </li>
              <li>
                <Vote /> &nbsp; Vote for your favorite acts
              </li>
              <li>
                <Coins />
                &nbsp; Earn token for just participating in activites
                you&apos;ll enjoy
              </li>
            </ul>
          </div>
          <Image
            src="https://images.pexels.com/photos/29443600/pexels-photo-29443600/free-photo-of-traditional-japanese-festival-parade-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="festival image"
            width={1260}
            height={750}
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Regions
        </h2>
        {festivalData.splice(0, 5).map((region) => (
          <RegionCard
            key={region.region}
            title={region.region}
            story={region.story}
            image={region.landmarks[0].image}
          />
        ))}
        <div className="grid space-y-8"></div>
      </section>
      {/* Comedy Content Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Regional Comedy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Comedy Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-purple-600">
              Funny Moments in the Region
            </h3>
            <p className="text-gray-600">
              Watch locals share their hilarious stories.
            </p>
          </div>

          {/* Video 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Comedy Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-purple-600">
              Stand-Up Night
            </h3>
            <p className="text-gray-600">
              Highlights from our latest stand-up event.
            </p>
          </div>

          {/* Video 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Comedy Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-purple-600">
              Local Legends
            </h3>
            <p className="text-gray-600">
              Meet the comedians who put our town on the map.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-purple-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Laugh & Explore. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
