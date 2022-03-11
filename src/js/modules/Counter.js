export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <form class="login form-horizontal">
            <div class="counter">
              <a href="#" class="minus-button btn-dec"><span>-</span></a>
              <input name="count" type="text" class="count-display value" disabled value="${state.countValue}">
              <a href="#" class="plus-button btn-inc"><span>+</span></a>
            </div>
          </form>
        </div>`;
  };

  const init = () => {
    render();
    setEvent();
  };

  const setEvent = () => {
    this.$minusBtn = document.querySelector('.minus-button');
    this.$minusBtn.addEventListener('click', handler.dec);
    this.$plusBtn = document.querySelector('.plus-button');
    this.$plusBtn.addEventListener('click', handler.inc);
  };

  const NUMBER_LIMIT = Object.freeze({
    MAX_VALUE: 12,
    MIN_VALUE: 8,
  });

  const handler = {
    dec: () => {
      if (state.countValue === NUMBER_LIMIT.MIN_VALUE) {
        this.$minusBtn.disabled;
        return;
      }

      state.countValue -= 1;
      init();
    },
    inc: () => {
      if (state.countValue === NUMBER_LIMIT.MAX_VALUE) {
        this.$plusBtn.disabled;
        return;
      }

      state.countValue += 1;
      init();
    },
  };

  const state = {
    countValue: 10,
  };

  init();
}
