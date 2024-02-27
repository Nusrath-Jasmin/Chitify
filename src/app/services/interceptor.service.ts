import { HttpEvent, HttpInterceptor, HttpRequest,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token') as string;
        if (token) {
        req = req.clone({
            setHeaders: {
            'Authorization': `Bearer ${token}`
            }
        });
        }
        console.log(req);
        
        return next.handle(req);
    }
}
