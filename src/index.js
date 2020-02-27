import "@bospieter/ws-helper/styles.css";
import { add, initBody } from "@bospieter/ws-helper";

import { Observable } from "rxjs";

initBody("rx-js promise vs observable");

add.li("log 1 ");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {

    resolve("We are done promise!");

  }, 5000);
});

const o = new Observable(observable => {
  setTimeout(() => {
    observable.next("We are done observable");
  }, 4000);
});

p.then(message => add.li(message));

o.subscribe(message => {
  add.li(message);
});

add.li("log 3");
