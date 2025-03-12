import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 1) Full-Screen Background Image */}
      <Image
        src="/homehero.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* 2) Half-Screen Shadow (Overlay) */}
      {/* Adjust left vs. right by changing the positioning classes (`left-0` vs. `right-0`). */}
      <div className="absolute inset-y-0 left-0 w-[120vh] h-full z-10">
        <Image
          src="/shadow.png"
          alt="Shadow Overlay"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* 3) Text Layer */}
      {/* Position your text somewhere "on top" of the images. 
          Tailwind classes like `left-8 top-1/4` are just examples. 
          Tweak them to match the exact visual you want. */}
      <div className="absolute z-20 top-1/4 left-8 max-w-lg text-white space-y-4">
        {/* Arabic Text */}
        <p className="text-right text-xl sm:text-4xl md:text-3xl leading-snug mb-10">
        لَّقَدْ كَانَ لَكُمْ فِى رَسُولِ ٱللَّهِ أُسْوَةٌ حَسَنَةٌۭ
        </p>

        {/* English Translation */}
        <p className="text-lg sm:text-xl md:text-3xl leading-relaxed">
          Indeed, In the Messenger of Allah,
          <br />
          you have an excellent example
        </p>

        {/* Ayah Reference */}
        <p className="text-sm sm:text-base md:text-lg">(33:21)</p>

        {/* Heart Image */}
        <div className="ml-16">
          <Image
            src="/heart.png"
            alt="Har Heart Mein Muhammad"
            width={260}
            height={260}
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
