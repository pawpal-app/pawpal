import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  initials: string;
  gradient: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I finally feel confident as a first-time puppy owner. Animo's AI to-dos take away all the guesswork!",
    author: "Soham P.",
    role: "First-time dog owner",
    initials: "SP",
    gradient: "from-pink-400 to-purple-500",
    image: "/images/testimonials/soham.jpg"
  },
  {
    id: 2,
    quote: "Animo has made my rescue kitten's care so much easier. The AI chat helps me understand my kitten's needs better.",
    author: "Naina A.",
    role: "Rescue kitten owner",
    initials: "NA",
    gradient: "from-blue-400 to-teal-500",
    image: "/images/testimonials/naina.jpg"
  },
  {
    id: 3,
    quote: "I love that Animo reminds me about things before I forget. The notifications actually work!",
    author: "Arya D.",
    role: "Experienced pet owner",
    initials: "AD",
    gradient: "from-green-400 to-emerald-500",
    image: "/images/testimonials/arya.jpg"
  },
  {
    id: 4,
    quote: "The pet diary feature is amazing! I love tracking my rescue dog's progress and sharing updates with friends.",
    author: "Jessica T.",
    role: "Pet rescue volunteer",
    initials: "JT",
    gradient: "from-purple-400 to-indigo-500",
    //image: "/images/testimonials/jessica.jpg"
  },
  {
    id: 5,
    quote: "Finally, an app that understands all pets! My rabbit and bearded dragon both get personalized care plans.",
    author: "Alex M.",
    role: "Exotic pet owner",
    initials: "AM",
    gradient: "from-yellow-400 to-orange-500",
    //image: "/images/testimonials/alex.jpg"  
  }
];

export function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true }, 
    [AutoScroll({ 
      speed: 1.5, // Adjusted speed for better readability
      stopOnInteraction: false,
      stopOnMouseEnter: true // Enables pause on hover
    })]
  );

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-[#fafbfb] to-white overflow-hidden" id="testimonials">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#66a4a8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#91a6a6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163031] mb-6 leading-tight">
            What Pet Parents Are Saying
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Animo is helping pet owners feel more confident and connected to their pets
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
          
          <div className="overflow-hidden py-10" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial) => (
                <div className="flex-[0_0_auto] pl-8" key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative w-[350px] sm:w-[500px] flex-shrink-0 group">
      <div className="h-full bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-[2rem] p-6 sm:p-8 hover:bg-white hover:border-[#66a4a8]/30 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          
          {/* Photo / Avatar */}
          <div className="flex-shrink-0 relative">
            <div className={`relative rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300 ${testimonial.image ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-20 h-20 sm:w-24 sm:h-24'}`}>
              {testimonial.image ? (
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                  {testimonial.initials}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow text-center sm:text-left">
             <div className="mb-3 text-[#66a4a8]/40">
                <svg className="w-8 h-8 mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
             </div>
             
             <blockquote className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-4 italic">
              "{testimonial.quote}"
             </blockquote>

             <div>
               <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
               <p className="text-sm text-[#66a4a8] font-medium">{testimonial.role}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
