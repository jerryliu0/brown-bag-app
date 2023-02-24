import profile from './assets/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src={profile} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
    <h1 class="f3 mb2">Jerry Liu</h1>
    <h2 class="f5 fw4 gray mt0">SDE I</h2>
  </div>
</article>
      <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
  <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
  <div class="pa3 bt b--black-10">
    <p class="f6 f5-ns lh-copy measure">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>
</article>
      </header>
    </div>
  );
}

export default App;
