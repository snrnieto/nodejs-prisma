npm install -D prisma
npx prisma //Inicializa la configuracíon de prisma, decir que db usar, conversión de tablas, despliegue de base de datos
npx prisma init // Crea carpeta prisma pero enfocado a la base de datos escogida --datasource-provider
npx prisma init --datasource sqlite

npx prisma migrate dev // Sincroniza los modelos en la base de datos, migracion inicial

npx prisma migrate dev --name post-user-relation

npx prisma studio

npx prisma migrate deploy // No crea la migración en la carpeta, solo sube los cambios a la db
npx prisma migrate dev --name user_age //Crea la migración y a la vez hace deploy a la db
