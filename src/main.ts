import './style.css'

// setTimeout(() => {
//     document.querySelector('#message')!.innerHTML = '|'
// }, 2000);

setTimeout(() => {
    document.querySelector('#message')!.innerHTML = `Here are a few pictures. She's a happy girl!`
    document.querySelector('#message')?.classList.add('typewriter');
    (document.querySelector('.input-field') as HTMLElement).style.paddingInline = '0'
}, 2500);

setTimeout(() => {
    document.querySelector('#message')!.innerHTML = ``
    document.querySelector('#message')?.classList.remove('typewriter');
    (document.querySelector('.fa-angle-right') as HTMLElement).style.backgroundColor = '#c876ff';
}, 4500);

setTimeout(() => {
    (document.querySelector('.fa-angle-right') as HTMLElement).style.backgroundColor = 'hsl(271deg, 36%, 24%)';
    document.querySelector('#message')!.innerHTML = `Can you make it?`
    document.querySelector('#message')?.classList.add('typewriter');
}, 4700);

setTimeout(() => {
    document.querySelector('#message')!.innerHTML = ``
    document.querySelector('#message')?.classList.remove('typewriter');
    (document.querySelector('.fa-angle-right') as HTMLElement).style.backgroundColor = '#c876ff';
}, 6700);

setTimeout(() => {
    (document.querySelector('.fa-angle-right') as HTMLElement).style.backgroundColor = 'hsl(271deg, 36%, 24%)';
    document.querySelector('#message')!.innerHTML = `Type a message`
}, 6900);