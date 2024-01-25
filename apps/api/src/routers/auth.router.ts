
import { AuthController } from '@/controllers/auth.controller';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authcontroller:AuthController ;

  constructor() {
    this.authcontroller = new AuthController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.post('/register', this.authcontroller.register);
  }

  getRouter(): Router {
    return this.router;
  }
}
