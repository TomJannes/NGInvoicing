// import { Injectable } from '@angular/core';
// import { Effect, Actions } from '@ngrx/effects';
// import * as Act from '../actions/invoice-type';

// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Observable';

// import * as fromInvoiceType from '../reducers';
// import { InvoiceTypeService } from '../services/invoice-type.service';

// @Injectable()
// export class InvoiceTypeEffects {

//     @Effect()
//     invoiceTypes$ = this.actions$.ofType(Act.SEARCH)
//         .switchMap(params => {
//             return this.invoiceTypeService.searchInvoiceTypes(null)
//                 .switchMap(data => {
//                     return [
//                         new Act.SearchSuccess({ data: data })
//                     ];
//                 })
//                 .catch((error) => {
//                     return [
//                         new Act.SearchFailed({ error: error })
//                     ];
//                 });
//         });

//     constructor(private actions$: Actions, private invoiceTypeService: InvoiceTypeService) { }
// }
