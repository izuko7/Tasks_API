import  { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import  { Request } from 'express';

@Injectable()
export class SessionGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<Request & { user: unknown }>();

		if (!request.user) {
			throw new UnauthorizedException('Vous devez être connecté');
		}

		return true;
	}
}
