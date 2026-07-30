"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

// Unique ID for our single configuration record
const CONFIG_ID = "global";

export async function getShelterConfig() {
  try {
    // Si no hay base de datos conectada, esto fallará
    if (!process.env.DATABASE_URL) {
      throw new Error("No Database URL configured");
    }

    let config = await prisma.shelterConfiguration.findUnique({
      where: { id: CONFIG_ID },
    });

    if (!config) {
      config = await prisma.shelterConfiguration.create({
        data: {
          id: CONFIG_ID,
          address: "Av. de las Mascotas 456, Quito, Ecuador",
          email: "contacto@fundacionlucky.org",
          phone: "+593 98 765 4321",
        },
      });
    }

    return config;
  } catch (error) {
    // Si la DB falla (ej. falta .env), retornamos datos falsos para que no se rompa la página
    console.warn("Base de datos no conectada. Mostrando datos de prueba.");
    return {
      address: "(Base de datos no conectada) Av. Principal 123",
      email: "prueba@localhost",
      phone: "000-000-0000",
    };
  }
}

export async function updateShelterConfig(formData: FormData) {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("No Database URL configured");
    }

    const address = formData.get("address")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";

    await prisma.shelterConfiguration.update({
      where: { id: CONFIG_ID },
      data: {
        address,
        email,
        phone,
      },
    });
  } catch (error) {
    console.warn("Base de datos no conectada. No se pudo guardar.");
  }

  // Revalidate the page so it shows the fresh data
  revalidatePath("/dashboard-contacto");
}
