
const autoSwipe = () => {
  let swipeCounter = 0;
  const button = document.querySelector(
    "#u490315748 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > main > div > div > div.recsCardboard__cardsContainer.H\\(100\\%\\).Pos\\(r\\).Z\\(1\\) > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button"
  );

  // Done by milliseconds. Right now it swipes every second.
  setInterval(() => {
    button.click();
    swipeCounter++
    console.log(`${swipeCounter} total swipes :O`)
  }, 1000);

};

autoSwipe();
