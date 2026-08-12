import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    const animales = await prisma.animal.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(animales);
  } catch (error) {
    console.error('Error fetching animals:', error);
    return NextResponse.json({ error: 'Error al obtener animales' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.species) {
      return NextResponse.json({ error: 'Nombre y especie son requeridos' }, { status: 400 });
    }

    const newAnimal = await prisma.animal.create({
      data: {
        name: data.name,
        species: data.species,
        breed: data.breed || null,
        age: data.age || null,
        imageUrl: data.imageUrl || null,
        description: data.description || null,
        galleryUrls: data.galleryUrls || [],
      }
    });

    return NextResponse.json(newAnimal, { status: 201 });
  } catch (error) {
    console.error('Error creating animal:', error);
    return NextResponse.json({ error: 'Error al crear animal' }, { status: 500 });
  }
}
