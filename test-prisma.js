const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.user.update({
  where: { email: 'admin@fundacionlucky.org' },
  data: { role: 'ADMIN' }
})
  .then(u => {console.log('ROLE UPDATED TO:', u.role)})
  .catch(console.error)
  .finally(() => prisma.$disconnect());
