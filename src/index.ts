import { MainConfig } from "../@types";
import random from "math-random";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomInt(n: number): number {
  const randomNumber = Math.floor(random() * n);
  return randomNumber;
}

function shuffle(s: string): string {
  const sanitazeS = s.replace(/\s/g, "");
  const arr = sanitazeS.split("");
  const n = arr.length;

  for (let i = 0; i < n - 1; ++i) {
    const j = getRandomInt(n);

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  s = arr.join("");
  return s;
}

function hashGenerate(a: number, b: string): string {
  const randomLength = a;
  const scope = b;
  const length = scope.length;

  let str = "";
  for (let i = 0; i < randomLength; i++) {
    let newLetter = scope.charAt(Math.floor(random() * length));
    while (true) {
      if (newLetter === str.slice(-1)) {
        newLetter = scope.charAt(Math.floor(random() * length));
      } else {
        str += newLetter;
        break;
      }
    }
  }
  return str;
}

function crypticSecureGenerate(): string {
  const timeStamp = new Date().getTime();
  const crypto = random();
  const crypticSecureFun = crypto * timeStamp;
  const crypticSecure = Math.floor(crypticSecureFun);
  return crypticSecure.toString();
}

function generateCustomId(name: string, pinLength: number, randomLength: number): string {
  const crypticSecure = crypticSecureGenerate();
  const firstPin = hashGenerate(pinLength, crypticSecure.toString());
  const secondPin = hashGenerate(pinLength, crypticSecure.toString());
  const randomLetters = hashGenerate(randomLength * pinLength, letters);
  const nameShuffle = shuffle(name);
  const nameHash = hashGenerate(randomLength, nameShuffle + randomLetters);

  const resultShuffle = shuffle(nameHash + secondPin);

  return firstPin + resultShuffle;
}

/**
 * Esta é uma função de exemplo de uso de JSDoc
 * @example   example('exemple', 2, 4); // 45leml
 * @param {String} name
 * @param {String} [pin]
 * @param {String} [length]
 * @param {MainConfig} [config]
 * @returns {string} hash
 */
export function idGenerator(name: string, pin: number = 2, length: number = 4, config?: MainConfig): string {
  let hash = generateCustomId(name, pin, length);
  if (typeof config?.prefix === "string") {
    if (config?.prefix) {
      if (config?.trace) {
        hash = config?.prefix + "-" + hash;
      } else {
        hash = config?.prefix + hash;
      }
    }
  } else {
    if (config?.prefix?.prefix) {
      if (config.prefix.trace) {
        hash = config?.prefix?.prefix + "-" + hash;
      } else {
        hash = config?.prefix?.prefix + hash;
      }
    }
  }
  if (typeof config?.sufix === "string") {
    if (config?.sufix) {
      if (config?.trace) {
        hash = hash + "-" + config?.sufix;
      } else {
        hash = hash + config?.sufix;
      }
    }
  } else {
    if (config?.sufix?.sufix) {
      if (config.sufix.trace) {
        hash = hash + "-" + config?.sufix?.sufix;
      } else {
        hash = hash + config?.sufix?.sufix;
      }
    }
  }
  return hash;
}
