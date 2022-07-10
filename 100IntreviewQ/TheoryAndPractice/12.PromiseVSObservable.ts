// Eager vs Lazy
// Promises are eager since the executor function, passed as the constructor argument
// gets invoked at the moment of its definition

// const welcomePromise = new Promise(resolve => {
//     console.log("In promise executor fn");
//     resolve("Welcome!");
// });

// console.log("Before calling the then method!");

// welcomePromise.then(console.log);

// Observables are lazy since the producer function doesnt get called until you subscribe 
// to the stream

// import { Observable } from "rxjs";
// const $welcomeObservable = new Observable(observer => {
//     console.log("In observable producer fn");

//     observer.next("Welcome!");
//     observer.complete();
// });

// console.log("Before calling the subscribe method!");

// $welcomeObservable.subscribe(console.log);

// Transfor promise to observable; one way is to use from but it doesnt affect
// the execution fn; the other way is using defer which delays the execution fn

// import { defer } from "rxjs";

// function getWelcomePromise() {
//     return new Promise(resolve => {
//         console.log("In Promise executor fn");

//         resolve("Welcome!");
//     });
// }

// const wrappedPromise2$ = defer(() => getWelcomePromise());

// console.log("Before calling the subscribe method");

// wrappedPromise2$.subscribe(console.log);

// Async vs Sync

// Even if immediately resolved, the Promise is always asynchronous. As a resutl
// the then methods callback will be added to the microtasks queue which will be processed
// after the current macrotask completion:

// const welcomePromise = new Promise(resolve => {
//     console.log("IN promise executor fn");
//     resolve("Welcome!");
// })

// console.log("Before calling the then method!");

// welcomePromise.then(console.log);

// console.log("After calling the then method!");

// The Observable may be async
import { observable, Observable } from "rxjs";

// const $asyncObservableWelcome = new Observable(observer => {
//     console.log("In observable producer fn");

//     setTimeout(() => {
//         observer.next("Welcome!");
//         observer.complete();
//     }, 500);
// });

// console.log("Before calling the subscribe method!");

// $asyncObservableWelcome.subscribe(console.log);

// console.log("After calling the subscribe method!")

// or sync


// const $syncObservableWelcome = new Observable(observer => {
//     console.log("In Observable fn");
//     observer.next("Welcome!");
//     observer.complete();
// });

// console.log("Before calling the subscriber method");

// $syncObservableWelcome.subscribe(console.log);

// console.log("After calling the subscribe method!");

// SIngle vs Multiple values

// The promise object may only deliver a single value, namely the first call of the resolve fn
// is taken to account;
// const newPromise = new Promise(resolve => {
//     resolve("First");
//     resolve("Second");
// });

// newPromise.then(console.log);

// Observable insatnce may emit multiple values;
// const $newObservable = new Observable(observer => {
//     observer.next("First");
//     observer.next("Second");
// });

// $newObservable.subscribe(console.log);

//RxJS operators
// pipe is used for combinig multiple operators to compose async operations
// of allows u to create Observable from a sequence of values
// switchMap is a transformation operator that applies a project function on each source
// value of an Observable which is later merged into the output Observable and
// the value given is the most recent projected Observable

import { of } from "rxjs";
import { switchMap, delay } from "rxjs/operators";

const newsProducer = (q: string) => of(`News for ${q}`).pipe(delay(1000));

const query$ = of("politics", "sport");
const news$ = query$.pipe(switchMap(newsProducer));

news$.subscribe(console.log);