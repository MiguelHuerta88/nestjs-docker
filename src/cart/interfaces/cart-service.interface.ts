import { Observable } from 'rxjs';
import { Visit } from './visit.interface';

export interface CartServiceInterface {
  getCartById(data: { id: number }): Observable<any>;
  getCaryByVisit(data: Visit): Observable<any>;
}
