export const getElementById = (id) => document.getElementById(id);

const click = (elm, func) => {
  elm.addEventListener('click', (e) => {
    func(elm, e);
  });
};

export const onClick = (elm, func) => {
  if (Array.isArray(elm)) {
    elm.map((e) => click(e, func));
  } else {
    click(elm, func);
  }
};
