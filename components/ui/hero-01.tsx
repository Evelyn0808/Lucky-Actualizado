"use client";

import { GradientWave } from "@/components/ui/gradient-wave";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection01() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* GradientWave behind the text */}
      <GradientWave
        colors={["#ffffff", "#f97316", '#fcd34d', "#fb923c", "#ffffff"]} // Warm orange/yellow tones matching Lucky brand
        shadowPower={4}
        darkenTop={false} 
        noiseFrequency={[0.0001, 0.0002]}
        deform={{ incline: 0.2, noiseAmp: 100, noiseFlow: 2 }}
      />
      <div className="flex flex-col text-center z-10">
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&auto=format&fit=crop"
          alt="Lucky Mascot"
          height={100}
          width={100}
          className="mx-auto rounded-full object-cover border-4 border-white shadow-lg mb-4 h-24 w-24"
        />
        <h2 className="font-extrabold pt-6 text-black mix-blend-overlay tracking-tighter text-5xl md:text-7xl lg:text-8xl">
          Amor Sin <br /> Límites
        </h2>
        <div className="space-y-6 z-10 pt-12 flex justify-center items-center flex-col text-center px-6">
          <p className="text-black w-full max-w-lg font-medium text-lg md:text-xl mix-blend-overlay">
            Rescatamos, cuidamos y encontramos hogares llenos de amor para animales en necesidad. Únete a nuestra misión.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            <Link href="/catalogo">
              <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10 bg-orange-600 hover:bg-orange-700 text-white shadow-md">
                Adoptar ahora
              </Button>
            </Link>
            <Link href="/donaciones">
              <Button
                variant={"secondary"}
                className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10 bg-white/80 hover:bg-white text-orange-700 shadow-sm border border-orange-200"
              >
                Hacer una donación
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
