import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { trustedOrigins } from './auth/auth.cli.js';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module.js';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { bufferLogs: true });
	app.useLogger(app.get(Logger));
	app.use(helmet());
	const trustedOrigins = (app.get(ConfigService).get<string>('TRUSTED_ORIGINS') ?? '')
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean);

	app.enableCors({
		origin: trustedOrigins,
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
	});
	app.useGlobalPipes(new ZodValidationPipe());

	const config = new DocumentBuilder()
		.setTitle('NexaFood API')
		.setVersion('0.1.0')
		.addBearerAuth()
		.build();
	SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config));

	await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
