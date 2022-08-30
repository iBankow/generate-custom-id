import { MainConfig } from "../@types";
import random from "math-random";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function getRandomInt(n: number): number {
  const randomNumber = Math.floor(Math.random() * n);
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
    str += scope.charAt(Math.floor(Math.random() * length));
  }
  return str;
}

function crypticSecureGenerate(length: number): string {
  const timeStamp = new Date().getTime();
  const crypto = random();
  const crypticSecureFun = crypto * timeStamp;
  const crypticSecure = Math.floor(crypticSecureFun);
  return hashGenerate(length, crypticSecure.toString());
}

function generateCustomId(name: string, randomLength: number): string {
  const length = randomLength || 2;
  const crypticSecure = crypticSecureGenerate(length);
  const firstHash = hashGenerate(length, crypticSecure.toString());
  const lastHash = hashGenerate(length, letters);
  const nameHash = shuffle(name + lastHash);

  const result = firstHash + nameHash;

  return result;
}

export function idGenerator(name: string, length: number = 2, config?: MainConfig): string {
  let hash = generateCustomId(name, length);
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
