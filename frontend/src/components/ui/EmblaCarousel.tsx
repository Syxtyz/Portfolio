// import useEmblaCarousel from "embla-carousel-react";

// interface Props {
//   slides: number[];
//   options?: any;
//   plugins?: any[];
// }

// export default function EmblaCarousel({ slides, options, plugins = [] }: Props) {
//   const [emblaRef] = useEmblaCarousel(options, plugins);

//   return (
//     <div className="embla w-full">
//       <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//         <div className="embla__container flex">
//           {slides.map((i) => (
//             <div
//               key={i}
//               className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] p-4"
//             >
//               <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center text-2xl font-semibold">
//                 Slide {i + 1}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
