const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@fundacionlucky.org';
  const password = await bcrypt.hash('lucky123', 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: { password },
    create: {
      email,
      password,
      name: 'Administrador',
      role: 'ADMIN',
    },
  });

  console.log('Contraseña actualizada con éxito:');
  console.log('Email:', admin.email);
  console.log('Nueva Contraseña: lucky123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
