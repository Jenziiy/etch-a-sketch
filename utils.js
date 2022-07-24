export const qs = document.querySelector.bind(document);
export const qsa = document.querySelectorAll.bind(document);
const eId = document.getElementById.bind(document);
const eCs = document.getElementsByClassName.bind(document);

export const button = eId('button');
export const submitButton = eId ('submit');
export const buttonClear = eId('button-clear');

export const modal = eId('modal');
export const closeButton = eCs('close')[0];
export const input = eId('input-tiles');
export const getContainer = eId('container');

export let userInput = input.value;
export const defaultSizeSquared = 16;
export const maxInput = 100;

export const initializePad = () => container.innerText = '';