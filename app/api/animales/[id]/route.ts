import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode('super-secret-jwt-key-for-lucky-app');

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // 1. Verificar autenticación (solo admin puede cambiar estados)
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
    
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { payload } = await jwtVerify(token, SECRET);
    if (payload.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    // 2. Obtener el cuerpo de la petición
    const data = await request.json();
    const { status } = data;

    if (!status || !['DISPONIBLE', 'PENDIENTE', 'ADOPTADO'].includes(status)) {
      return NextResponse.json({ error: 'Estado inválido' }, { status: 400 });
    }

    // 3. Actualizar en la base de datos
    const { id } = await params;
    const updatedAnimal = await prisma.animal.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedAnimal);
  } catch (error) {
    console.error('Error actualizando animal:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // 1. Verificar autenticación (solo admin puede borrar)
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
    
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { payload } = await jwtVerify(token, SECRET);
    if (payload.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    // 2. Eliminar en la base de datos
    const { id } = await params;
    await prisma.animal.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Animal eliminado exitosamente' });
  } catch (error) {
    console.error('Error eliminando animal:', error);
    return NextResponse.json({ error: 'Error interno del servidor al eliminar' }, { status: 500 });
  }
}
