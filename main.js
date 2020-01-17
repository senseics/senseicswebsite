const state_init = (yin) => ({
  get:()=>yin,
  set:(yang)=>yin=yang
})

const add_class = (name) => (el) => el.classList.add(name) || el

const remove_class = (name) => (el) => el.classList.remove(name) && el

const state = state_init(false)

const touch = (str) => document.getElementById(str)

const pipe = (...fns) => (x) => fns.reduce((a,c)=>c(a),x)

const invert = (x) => !x

const render = (x) => (x)
      ? touch('menu').classList.remove('menu-hide') || touch('menu').classList.add('menu-show')
      : touch('menu').classList.remove('menu-show') || touch('menu').classList.add('menu-hide')

const toggle_menu = pipe(state.get,invert,state.set,render)

touch('menu-button').addEventListener('click',toggle_menu)

